import FilesDrawer, { type FilesDrawerProps, type DrawerFileItemType } from '@/components/FilesDrawer'
import type { FileDownloadItemType } from '@/types/files'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { App } from 'antd'
import { isCrossOrigin } from '@/utils'

export type FilesDownloadDrawerProps = Omit<FilesDrawerProps, 'title' | 'doneFile' | 'list'> & {
  /**
   * @description 抽屉标题。|| Drawer title.
   * @default '下载文件/文件夹'
   */
  title?: string
  /**
   * @description 文件列表。|| File list.
   * @default []
   */
  list: FileDownloadItemType[]
  /**
   * @description 是否下载到选择的文件夹。|| Whether to download to the selected folder.
   * @default true
   */
  isSelectFolder?: boolean
}

function FilesDownloadDrawer({
  targetType = 'list',
  title = '下载文件/文件夹',
  open = false,
  setOpen,
  list = [],
  onSuccess,
  isSelectFolder = true
}: FilesDownloadDrawerProps) {
  const { t } = useTranslation()
  const { message } = App.useApp()
  const [drawerOpen, setDrawerOpen] = useState(open)
  const [canSelectFolder, setCanSelectFolder] = useState(isSelectFolder)
  useEffect(() => {
    setCanSelectFolder(isSelectFolder)
  }, [isSelectFolder])

  const directoryHandle = useRef<FileSystemDirectoryHandle>(null)
  useEffect(() => {
    const getDirectoryHandle = async () => {
      if (!window.showDirectoryPicker) {
        message.warning(t('components.FilesDownloadDrawer.noSupport', { defaultValue: '当前浏览器不支持选择文件夹，将使用普通下载' }))
        setCanSelectFolder(false)
        setDrawerOpen(true)
        return
      }
      try {
        const dirHandle = await window.showDirectoryPicker({
          mode: 'readwrite',
          id: 'FilesDownloadDrawer',
        })
        if (!dirHandle) {
          return
        }
        directoryHandle.current = dirHandle
        setDrawerOpen(true)
      } catch (error) {
        setOpen(false)
        if (error instanceof Error && error.message.includes('aborted')) {
          message.warning(t('components.FilesDownloadDrawer.chooseFolder', { defaultValue: '请选择文件夹' }))
        } else {
          console.log("🚀 ~ selectDirectoryStoreFn ~ error:", error)
        }
      }
    }

    if (open) {
      if (isSelectFolder) {
        getDirectoryHandle()
      } else {
        setDrawerOpen(true)
      }
    } else {
      setDrawerOpen(false)
    }
    return () => {
      directoryHandle.current = null
    }
  }, [open, isSelectFolder, t, message, setOpen])

  const doneFile = useCallback(async (item: DrawerFileItemType) => {
    const downloadResourceAsBlob = async (url: string) => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`error: ${response.status} ${response.statusText}`)
        }
        return await response.blob()
      } catch (error) {
        throw new Error(`download error: ${error}`)
      }
    }

    const writeFile = async (item: DrawerFileItemType) => {
      if (!directoryHandle.current) {
        return
      }
      try {
        if (item.type === 'folder') {
          const folderPath = item.filePath.split('/').filter(x => x !== '')
          let currentDirHandle = directoryHandle.current
          for (const folder of folderPath) {
            currentDirHandle = await currentDirHandle.getDirectoryHandle(folder, { create: true })
          }
          return
        }
        let fileBlob: Blob
        if (item.url instanceof Blob) {
          fileBlob = item.url
        } else {
          fileBlob = await downloadResourceAsBlob(item.url!)
        }
        if (item.folderPath === '/') {
          const fileHandle = await directoryHandle.current.getFileHandle(item.name, { create: true })
          const writable = await fileHandle.createWritable()
          await writable.write(fileBlob)
          await writable.close()
        } else {
          const folderPath = item.folderPath.split('/').filter(x => x !== '')
          let currentDirHandle = directoryHandle.current
          for (const folder of folderPath) {
            currentDirHandle = await currentDirHandle.getDirectoryHandle(folder, { create: true })
          }
          const fileHandle = await currentDirHandle.getFileHandle(item.name, { create: true })
          const writable = await fileHandle.createWritable()
          await writable.write(fileBlob)
          await writable.close()
        }
      } catch (error) {
        throw new Error(`error: ${error}`)
      }
    }

    const downloadFile = async (item: DrawerFileItemType) => {
      if (item.type === 'folder') {
        return
      }
      console.log('downloadFile', item)
      const isCross = item.url instanceof Blob ? false : isCrossOrigin(item.url!)
      let url: string = ''
      if (item.url instanceof Blob) {
        url = URL.createObjectURL(item.url)
      } else if (isCross) {
        const blob = await downloadResourceAsBlob(item.url!)
        url = URL.createObjectURL(blob)
      } else {
        url = item.url!
      }
      const a = document.createElement('a')
      a.href = url
      a.target = '_blank'
      a.download = item.name
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      if (item.url instanceof Blob || isCross) URL.revokeObjectURL(url)
    }
    if ((item.type === 'file' && item.url) || item.type === 'folder') {
      if (canSelectFolder) {
        await writeFile(item)
      } else {
        await downloadFile(item)
      }
    }
  }, [canSelectFolder])

  return (
    <FilesDrawer
      targetType={targetType}
      title={title}
      open={drawerOpen}
      setOpen={setOpen}
      list={list}
      doneFile={doneFile}
      onSuccess={onSuccess}
    />
  )
}

export default FilesDownloadDrawer
