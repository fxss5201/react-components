import { useRef, useContext } from 'react'
import type { FileType, FileItemType, TargetType, FileTreeFileItem } from '../types/files'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown, Space, App } from 'antd'
import { type LocaleType } from '../config'
import cn from 'classnames'
import LocaleContext from '../context/LocaleContext'

export type FileTreeItem = FileItemType & {
  children?: FileTreeItem[]
}

export type FilesSelectProps<T extends TargetType> = {
  targetType: T,
  onSelect: (fileTrees: T extends 'tree' ? FileTreeItem[] : FileTreeFileItem[]) => void
  isUpload?: boolean
  isIgnoreFolder?: boolean // 当 targetType 为 'list' 时，是否忽略文件夹，比如说上传文件的时候，只需要上传文件，不需要上传文件夹
  locale?: LocaleType
  className?: string
  children?: React.ReactNode
}

function FilesSelect<T extends TargetType>({
  targetType = 'tree' as T,
  onSelect,
  isUpload = false,
  isIgnoreFolder = false,
  locale,
  className = '',
  children
}: FilesSelectProps<T>) {
  const localeContext = useContext(LocaleContext)
  const currentLocale = locale || localeContext || 'zh'

  const inputRef = useRef<HTMLInputElement>(null)
  const { message } = App.useApp()

  const dropdownItems: MenuProps['items'] = [
    {
      label: currentLocale === 'zh' ? (isUpload ? '上传文件' : '选择文件') : (isUpload ? 'Upload File' : 'Select File'),
      key: 'upload-file'
    },
    {
      label: currentLocale === 'zh' ? (isUpload ? '上传文件夹（含根目录）' : '选择文件夹（含根目录）') : (isUpload ? 'Upload Folder (Include Root)' : 'Select Folder (Include Root)'),
      key: 'upload-folder-include-root'
    },
    {
      label: currentLocale === 'zh' ? (isUpload ? '上传文件夹（不含根目录）' : '选择文件夹（不含根目录）') : (isUpload ? 'Upload Folder (Exclude Root)' : 'Select Folder (Exclude Root)'),
      key: 'upload-folder-exclude-root'
    }
  ]

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    const key = e.key
    if (key === 'upload-folder-include-root') {
      selectDirectoryStoreFn('upload-folder-include-root')
    } else if (key === 'upload-folder-exclude-root') {
      selectDirectoryStoreFn('upload-folder-exclude-root')
    } else {
      if (inputRef.current) {
        inputRef.current.click()
      }
    }
  }

  async function selectDirectoryStoreFn(type: 'upload-folder-include-root' | 'upload-folder-exclude-root') {
    if (!window.showDirectoryPicker) {
      message.warning('当前浏览器不支持')
      return
    }
    let dirHandle: FileSystemDirectoryHandle | null = null
    try {
      dirHandle = await window.showDirectoryPicker({
        mode: 'read',
        id: type,
      })
      if (!dirHandle) {
        return
      }
      // console.log(dirHandle)
      
      let rootFiles: FileTreeItem[] = []
      if (type === 'upload-folder-include-root') {
        rootFiles = [
          {
            type: 'folder',
            name: dirHandle.name,
            filePath: `${dirHandle.name}`,
            folderPath: '/',
            children: await getFileList(dirHandle as FileSystemDirectoryHandle, `/${dirHandle.name}`)
          }
        ]
      } else {
        rootFiles = await getFileList(dirHandle as FileSystemDirectoryHandle, '/')
      }
      if (targetType === 'tree') {
        onSelect(rootFiles as T extends 'tree' ? FileTreeItem[] : FileTreeFileItem[])
      } else {
        const roorFileList = flattenFileTree(rootFiles, isIgnoreFolder)
        onSelect(roorFileList as T extends 'tree' ? FileTreeItem[] : FileTreeFileItem[])
      }
    } catch (error) {
      if (error instanceof Error && error.message.includes('aborted')) {
        message.warning('请选择文件夹')
      } else {
        console.log(error)
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const roorFileList = Array.from(files).map((file) => ({
        type: 'file' as FileType,
        file,
        name: file.name,
        filePath: file.name,
        folderPath: '/',
      }))
      if (roorFileList.length > 0) {
        onSelect(roorFileList as T extends 'tree' ? FileTreeItem[] : FileTreeFileItem[])
      }
    }
  }

  return (
    <div className={cn('files-select inline-flex', className)}>
      <Dropdown menu={{ items: dropdownItems, onClick: handleMenuClick }}>
        {children || (
          <Button>
            <Space>
              {currentLocale === 'zh' ? (isUpload ? '上传文件/文件夹' : '选择文件/文件夹') : (isUpload ? 'Upload File/Folder' : 'Select File/Folder')}
              <DownOutlined />
            </Space>
          </Button>
        )}
      </Dropdown>
      <input
        ref={inputRef}
        type='file'
        multiple
        style={{ display: 'none' }}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default FilesSelect

async function getFileList(dirHandle: FileSystemDirectoryHandle, parentKey: string = ''): Promise<FileTreeItem[]> {
  const currentRankFiles: FileTreeItem[] = []
  for await (const handelEle of dirHandle.values()) {
    const fileKey = `${parentKey.endsWith('/') ? parentKey : parentKey + '/'}${handelEle.name}`
    const curObj: FileTreeItem = {
      type: handelEle.kind === 'file' ? 'file' : 'folder',
      name: handelEle.name,
      filePath: fileKey,
      folderPath: parentKey
    }
    if (handelEle.kind === 'file') {
      const file = await (handelEle as FileSystemFileHandle).getFile()
      curObj.file = file
      curObj.size = file.size
    } else if (handelEle.kind === 'directory') {
      curObj.children = await getFileList(handelEle as FileSystemDirectoryHandle, fileKey)
    }
    currentRankFiles.push(curObj)
  }
  return currentRankFiles
}

function flattenFileTree(fileTree: FileTreeItem[], isIgnoreFolder = false): FileItemType[] {
  const result: FileItemType[] = []
  
  function traverse(node: FileTreeItem) {
    const { children, ...fileItem } = node
    // console.log(children)
    if (isIgnoreFolder) {
      if (node.type === 'file') {
        result.push(fileItem)
      }
    } else {
      result.push(fileItem)
    }
    
    // 递归处理子节点
    if (node.children && node.children.length > 0) {
      node.children.forEach(traverse)
    }
  }
  
  fileTree.forEach(traverse)
  return result
}
