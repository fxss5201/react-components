import FilesDrawer, { type FilesDrawerProps, type DrawerFileItemType } from '@/components/FilesDrawer'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { App } from 'antd'

export type FilesDownloadDrawerProps = Omit<FilesDrawerProps, 'title' | 'doneFile'> & {
  title?: string
}

function FilesDownloadDrawer({
  targetType = 'list',
  title = '下载文件/文件夹',
  open = false,
  setOpen,
  list = [],
  onSuccess
}: FilesDownloadDrawerProps) {
  const { t } = useTranslation()
  const { message } = App.useApp()
  const [drawerOpen, setDrawerOpen] = useState(open)

  const directoryHandle = useRef<FileSystemDirectoryHandle>(null)
  useEffect(() => {
    const getDirectoryHandle = async () => {
      if (!window.showDirectoryPicker) {
        message.warning(t('components.FilesDownloadDrawer.noSupport', { defaultValue: '当前浏览器不支持' }))
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
        if (error instanceof Error && error.message.includes('aborted')) {
          message.warning(t('components.FilesDownloadDrawer.chooseFolder', { defaultValue: '请选择文件夹' }))
        } else {
          console.log("🚀 ~ selectDirectoryStoreFn ~ error:", error)
        }
      }
    }

    if (open) {
      getDirectoryHandle()
    } else {
      setDrawerOpen(false)
    }
    return () => {
      directoryHandle.current = null
    }
  }, [open, t, message])

  const downloadResourceAsBlob = async (url: string) => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`网络请求失败：${response.status} ${response.statusText}`)
        }
        return await response.blob()
      } catch (error) {
        throw new Error(`下载资源失败：${error}`)
      }
    }

  const writeFile = async (item: DrawerFileItemType) => {
    if (!directoryHandle.current) {
      return
    }
    if (item.folderPath === '/') {
      const fileHandle = await directoryHandle.current.getFileHandle(item.name, { create: true })
      const writable = await fileHandle.createWritable()
      await writable.write(await downloadResourceAsBlob(item.url!))
      await writable.close()
    } else {
      const folderPath = item.folderPath.split('/').filter(x => x !== '')
      let currentDirHandle = directoryHandle.current
      for (const folder of folderPath) {
        currentDirHandle = await currentDirHandle.getDirectoryHandle(folder, { create: true })
      }
      const fileHandle = await currentDirHandle.getFileHandle(item.name, { create: true })
      const writable = await fileHandle.createWritable()
      await writable.write(await downloadResourceAsBlob(item.url!))
      await writable.close()
    }
  }

  const doneFile = async (item: DrawerFileItemType) => {
    if (item.url) {
      await writeFile(item)
    }
  }

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
