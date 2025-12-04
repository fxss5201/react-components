import { useRef } from 'react'
import { useEventListener } from 'ahooks'
import cn from 'classnames'
import type { TargetType, FileTreeItem } from '@/types/files'
import { useTranslation } from 'react-i18next'

export type DropElementProps = {
  className?: string
  targetType?: TargetType // 执行 onSelect 时，参数的类型， tree 时为文件树，list 时为文件列表
  isIgnoreFolder?: boolean // 当 targetType 为 'list' 时，是否忽略文件夹，比如说上传文件的时候，只需要上传文件，不需要上传文件夹
  isUpload?: boolean
  onSelect: (fileTrees: FileTreeItem[]) => void
  children?: React.ReactNode
}

function DropElement({
  className = '',
  targetType = 'tree',
  isIgnoreFolder = false,
  isUpload = false,
  onSelect,
  children
}: DropElementProps) {
  const { t } = useTranslation()

  async function handleDrop(e: DragEvent) {
    try {
      await handleDropItems(e)
    } catch (error) {
      console.log(error)
      handleDropFiles(e)
    }
  }

  async function handleDropItems (e: DragEvent) {
    const items = e.dataTransfer?.items
    if (items) {
      const itemList = Array.from(items)
      const entryList: FileSystemEntry[] = []
      // 这里要区分两次循环，第一次先创建 FileSystemEntry ，并保存
      // 原因是 e.dataTransfer.items 是动态数组，读取时会改变，FileSystemEntry 是静态的
      for (let i = 0; i < itemList.length; i++) {
        const item = itemList[i]
        if (item.kind !== 'file') continue
        const entry = item.webkitGetAsEntry()
        if (!entry) continue
        entryList.push(entry)
      }
      if (!entryList.length) return
      const fileTrees: FileTreeItem[] = []
      // 第二次循环，递归读取文件树
      for (let i = 0; i < entryList.length; i++) {
        const entry = entryList[i]
        if (targetType === 'tree') {
          await readerFileTree(entry, fileTrees)
        } else {
          const entryFiles = await readerFileList(entry)
          fileTrees.push(...entryFiles)
        }
      }
      // console.log("🚀 ~ handleDropItems ~ fileTrees:", fileTrees)
      onSelect(fileTrees)
    }
  }

  // 读取 e.dataTransfer.items 中的文件和文件夹，以文件树的形式返回
  async function readerFileTree (entry: FileSystemEntry, parentList: FileTreeItem[]) {
    const folderPath = entry.fullPath.split('/').slice(0, -1).join('/') || '/'
    if (entry.isFile) {
      const file = await syncFile(entry as FileSystemFileEntry)
      parentList.push({
        file,
        filePath: entry.fullPath,
        folderPath: folderPath,
        name: file.name,
        size: file.size,
        type: 'file'
      })
    } else if (entry.isDirectory) {
      const directoryReader = (entry as FileSystemDirectoryEntry).createReader()
      const entries = await syncReadEntries(directoryReader)
      const childrenList: FileTreeItem[] = []
      parentList.push({
        filePath: entry.fullPath,
        folderPath: folderPath,
        name: entry.name,
        type: 'folder',
        children: childrenList
      })
      const promises = entries.map(entry => readerFileTree(entry, childrenList))
      await Promise.all(promises)
    }
  }

  // 读取 e.dataTransfer.items 中的文件和文件夹，以文件列表的形式返回
  async function readerFileList (entry: FileSystemEntry): Promise<FileTreeItem[]> {
    const fileList: FileTreeItem[] = []
    const folderPath = entry.fullPath.split('/').slice(0, -1).join('/') || '/'
    if (entry.isFile) {
      const file = await syncFile(entry as FileSystemFileEntry)
      fileList.push({
        file,
        filePath: entry.fullPath,
        folderPath: folderPath,
        name: file.name,
        size: file.size,
        type: 'file'
      })
    } else if (entry.isDirectory) {
      if (!isIgnoreFolder) {
        fileList.push({
          type: 'folder',
          filePath: entry.fullPath,
          folderPath: folderPath,
          name: entry.name,
        })
      }
      const directoryReader = (entry as FileSystemDirectoryEntry).createReader()
      const entries = await syncReadEntries(directoryReader)
      const promises = entries.map(entry => readerFileList(entry))
      const subFiles = await Promise.all(promises)
      subFiles.forEach(subFile => {
        fileList.push(...subFile)
      })
    }
    return fileList
  }

  function syncFile (entry: FileSystemFileEntry): Promise<File> {
    return new Promise((resolve, reject) => {
      entry.file(resolve, reject)
    })
  }
  function syncReadEntries (directoryReader: FileSystemDirectoryReader): Promise<FileSystemEntry[]> {
    return new Promise((resolve, reject) => {
      const entries: FileSystemEntry[] = []
      // 递归读取所有条目，直到返回空数组
      const readAllEntries = () => {
        directoryReader.readEntries(
          (newEntries) => {
            if (newEntries.length === 0) {
              // 没有更多条目，返回所有收集的结果
              resolve(entries)
            } else {
              // 累加条目并继续读取
              entries.push(...newEntries)
              readAllEntries()
            }
          },
          (error) => {
            reject(error) // 捕获读取失败的错误
          }
        )
      }
      // 开始读取目录中的条目
      readAllEntries()
    })
  }


  function handleDropFiles (e: DragEvent) {
    const files = e.dataTransfer?.files
    if (files) {
      // 去除文件夹
      const fileList = Array.from(files).filter(item => item.name.includes('.') || item.type !== '' || item.size > 0)
      const fileTrees: FileTreeItem[] = fileList.map(item => ({
        file: item,
        filePath: `/${item.name}`,
        folderPath: '/',
        name: item.name,
        size: item.size,
        type: 'file'
      }))
      // console.log("🚀 ~ handleDropFiles ~ fileTrees:", fileTrees)
      onSelect(fileTrees)
    }
  }

  const dropAreaRef = useRef<HTMLDivElement>(null)
  useEventListener(
    ['dragover', 'dragenter', 'dragleave', 'drop'],
    (e) => {
      e.preventDefault()
      e.stopPropagation()
    },
    { target: dropAreaRef }
  )
  useEventListener(
    ['dragover', 'dragenter'],
    () => {
      dropAreaRef.current!.style.borderColor = '#2b7fff'
    },
    { target: dropAreaRef }
  )
  useEventListener(
    ['dragleave', 'drop'],
    () => {
      dropAreaRef.current!.style.borderColor = '#d1d5dc'
    },
    { target: dropAreaRef }
  )
  useEventListener(
    ['drop'],
    (e) => {
      handleDrop(e)
    },
    { target: dropAreaRef }
  )

  return (
    <div ref={dropAreaRef}
      className={
        cn('border-2 border-dashed border-gray-300 rounded-md p-4 text-gray-400 h-50 flex items-center justify-center', className)
      }
    >{children || (
      <div className='text-2xl'>{
        isUpload
          ? t('components.DropElement.uploadArea', { defaultValue: '请拖放文件/文件夹到这里进行上传' })
          : t('components.DropElement.dropArea', { defaultValue: '请拖放文件/文件夹到这里进行选择' })
      }</div>
    )}</div>
  )
}

export default DropElement
