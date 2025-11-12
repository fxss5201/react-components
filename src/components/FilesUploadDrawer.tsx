import { useEffect, useCallback, useState, useRef, useContext } from 'react'
import type { FileItemType, TargetType } from '../types/files'
import { useImmer } from 'use-immer'
import { Drawer, Progress, Button, App } from 'antd'
import { type ProgressProps } from 'antd'
import cn from 'classnames'
import FileIcon from './FileIcon'
import fileUploadMock from '../common/fileUploadMock'
import { type LocaleType } from '../config'
import LocaleContext from '../context/LocaleContext'

export type UploadFileItemType = FileItemType & {
  icon: React.ReactNode,
  percent: number,
  percentStatus: ProgressProps['status'],
}

export type UploadResultFIleItemType = Omit<FileItemType, 'filePath' | 'folderPath'>

export type UploadResultFileTreeItemType = UploadResultFIleItemType & {
  children?: UploadResultFileTreeItemType[]
}

export type FilesUploadDrawerProps<T extends TargetType> = {
  targetType: T,
  title?: string,
  open: boolean,
  setOpen: (open: boolean) => void,
  list?: FileItemType[],
  locale?: LocaleType,
  onSuccess?: (fileTrees: T extends 'list' ? UploadFileItemType[] : UploadResultFileTreeItemType[]) => void,
}

function FilesUploadDrawer<T extends TargetType>({
  targetType = 'list' as T,
  title = '上传文件/文件夹',
  open = false,
  setOpen,
  list = [],
  locale,
  onSuccess
}: FilesUploadDrawerProps<T>) {
  const localeContext = useContext(LocaleContext)
  const currentLocale = locale || localeContext || 'zh'

  const { message, modal } = App.useApp()
  const fileListRef = useRef<HTMLUListElement>(null)

  const intervalPercentMax = 80
  const [fileList, updateFileList] = useImmer<UploadFileItemType[]>([])
  const [uploading, setUploading] = useState<boolean>(false)

  const uploadFile = useCallback(async (item: UploadFileItemType) => {
    setUploading(true)
    const interval = setInterval(() => {
      updateFileList((draft) => {
        const index = draft.findIndex((i) => i.filePath === item.filePath)
        if (index !== -1) {
          draft[index].percent = Math.min(intervalPercentMax, draft[index].percent + (draft[index].percent < 50 ? 10 : 5))
        }
      })
    }, 300)
    return fileUploadMock().then(() => {
      console.log(currentLocale === 'zh' ? '上传成功' : 'Upload Success', item)
      updateFileList((draft) => {
        const index = draft.findIndex((i) => i.filePath === item.filePath)
        if (index !== -1) {
          draft[index].percent = 100
          draft[index].percentStatus = 'success'
        }
      })
    }).catch(() => {
      console.log(currentLocale === 'zh' ? '上传失败' : 'Upload Failed', item)
      updateFileList((draft) => {
        const index = draft.findIndex((i) => i.filePath === item.filePath)
        if (index !== -1) {
          draft[index].percentStatus = 'exception'
        }
      })
    }).finally(() => {
      setUploading(false)
      clearInterval(interval)
    })
  }, [updateFileList])

  const uploadFolder = useCallback(async (item: UploadFileItemType) => {
    setUploading(true)
    const interval = setInterval(() => {
      updateFileList((draft) => {
        const index = draft.findIndex((i) => i.filePath === item.filePath)
        if (index !== -1) {
          draft[index].percent = Math.min(intervalPercentMax, draft[index].percent + (draft[index].percent < 50 ? 10 : 5))
        }
      })
    }, 300)
    return fileUploadMock().then(() => {
      console.log(currentLocale === 'zh' ? '上传成功' : 'Upload Success', item)
      updateFileList((draft) => {
        const index = draft.findIndex((i) => i.filePath === item.filePath)
        if (index !== -1) {
          draft[index].percent = 100
          draft[index].percentStatus = 'success'
        }
      })
    }).catch(() => {
      console.log(currentLocale === 'zh' ? '上传失败' : 'Upload Failed', item)
      updateFileList((draft) => {
        const index = draft.findIndex((i) => i.filePath === item.filePath)
        if (index !== -1) {
          draft[index].percentStatus = 'exception'
        }
        if (item.type === 'folder') {
          draft.forEach((i) => {
            if (i.folderPath.startsWith(item.filePath)) {
              i.percentStatus = 'exception'
            }
          })
        }
      })
    }).finally(() => {
      setUploading(false)
      clearInterval(interval)
    })
  }, [updateFileList])

  useEffect(() => {
    if (open && list.length > 0) {
      const initList: UploadFileItemType[] = list.map((item) => ({
        ...item,
        icon: item.type === 'file' ? <FileIcon fileName={item.name} /> : <FileIcon type="folder" />,
        percent: 0,
        percentStatus: 'active',
      }))
      updateFileList(initList)
    } else if (!open) {
      updateFileList([])
    }
  }, [open, list, updateFileList])

  const [refreshDone, setRefreshDone] = useState<boolean>(true)
  useEffect(() => {
    if (!open) return
    if (uploading) return
    
    if (fileList.length > 0 && fileList.every((item) => item.percentStatus === 'success')) {
      setOpen(false)
      message.success(currentLocale === 'zh' ? '所有文件上传成功' : 'All files uploaded successfully')
      if (onSuccess) {
        if (targetType === 'list') {
          onSuccess(fileList)
        } else {
          onSuccess(convertToTree(fileList) as T extends "list" ? UploadFileItemType[] : UploadResultFileTreeItemType[])
        }
      }
      return
    }
    
    const nextIndex = fileList.findIndex(item => item.percentStatus === 'active')
    if (nextIndex !== -1) {
      const itemElement = fileListRef.current?.children[nextIndex] as HTMLElement
      itemElement?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      const nextItem = fileList[nextIndex]
      if (nextItem) {
        const timer = setTimeout(() => {
          if (nextItem.type === 'file') {
            uploadFile(nextItem)
          } else {
            uploadFolder(nextItem)
          }
        }, 0)
        return () => clearTimeout(timer)
      }
    } else {
      setRefreshDone(true)
    }
  }, [open, fileList, uploadFile, uploadFolder, uploading, setOpen, message])

  const onRefreshUpload = useCallback(() => {
    setRefreshDone(false)
    updateFileList((draft) => {
      draft.forEach((item) => {
        if (item.percentStatus === 'exception') {
          item.percent = 0
          item.percentStatus = 'active'
        }
      })
    })
  }, [updateFileList])

  const onIgnoreError = () => {
    setOpen(false)
    const IgnoreErrorList = fileList.filter((item) => item.percentStatus !== 'exception')
    if (onSuccess) {
      if (targetType === 'list') {
        onSuccess(IgnoreErrorList)
      } else {
        onSuccess(convertToTree(IgnoreErrorList) as T extends "list" ? UploadFileItemType[] : UploadResultFileTreeItemType[])
      }
    }
  }

  const convertToTree = (array: UploadFileItemType[]): UploadResultFileTreeItemType[] => {
    const roots: UploadResultFileTreeItemType[] = []
    array.forEach(item => {
      let currentLevel = roots
      if (item.folderPath) {
        const paths = item.folderPath.split('/').filter(x => x !== '')
        paths.forEach((folder) => {
          const findIndex = currentLevel.findIndex(x => x.name === folder)
          if (findIndex === -1) {
            currentLevel.push({
              name: folder,
              type: 'folder',
              children: []
            })
            currentLevel = currentLevel[currentLevel.length - 1].children as UploadResultFileTreeItemType[]
          } else {
            currentLevel = currentLevel[findIndex].children as UploadResultFileTreeItemType[]
          }
        })
      }
      currentLevel.push({
        name: item.name,
        type: item.type,
        ...(item.type === 'file' ? { size: item.size, file: item.file } : {}),
        ...(item.type === 'folder' ? { children: [] } : {})
      })
    })
    return roots
  }

  const doCloseFn = useCallback(() => {
    modal.confirm({
      title: currentLocale === 'zh' ? '关闭提示' : 'Close Prompt',
      content: currentLocale === 'zh' ? '关闭后将停止继续上传文件，是否确认关闭吗？' : 'Are you sure you want to close? Uploading files will be stopped.',
      okType: 'danger',
      closable: true,
      onOk: () => {
        setOpen(false)
      },
      onCancel: () => {
        // 取消关闭
      }
    })
}, [setOpen, modal])

  return (
    <Drawer
      title={title}
      open={open}
      size='large'
      onClose={doCloseFn}
      maskClosable={false}
      classNames={{
        body: 'pt-4 pb-0 px-0'
      }}
      extra={
        fileList.filter((item) => item.percentStatus === 'exception').length > 0 && refreshDone && (
          <>
            <Button size="small" onClick={onRefreshUpload}>{currentLocale === 'zh' ? '失败重传' : 'Retry Failed'}</Button>
            <Button size="small" onClick={onIgnoreError} className='ml-2'>{currentLocale === 'zh' ? '忽略错误' : 'Ignore Errors'}</Button>
          </>
        )
      }
    >
      <div className='w-full h-full flex flex-col'>
        <div className='flex-shrink-0 flex justify-between text-[16px] mb-2 px-6'>
          <div>{currentLocale === 'zh' ? '总数：' : 'Total: '}{fileList.length}</div>
          <div>{currentLocale === 'zh' ? '成功：' : 'Success: '}{fileList.filter((item) => item.percentStatus === 'success').length}</div>
          <div className='text-red-500'>{currentLocale === 'zh' ? '失败：' : 'Failed: '}{fileList.filter((item) => item.percentStatus === 'exception').length}</div>
        </div>
        <ul className='flex-auto overflow-x-hidden overflow-y-auto px-6' ref={fileListRef}>
          {fileList.map((item, index) => (
            <li key={item.filePath} className={cn('py-2', { 'border-t border-zinc-300': index > 0 })}>
              <div className='flex items-center overflow-hidden'>
                <div className='flex-shrink-0 leading-[24px] h-[24px]'>{item.icon}</div>
                <span className='ml-2 flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap leading-[24px]' title={item.name}>{item.name}</span>
              </div>
              <div className='overflow-hidden overflow-ellipsis whitespace-nowrap leading-[18px] text-[12px]' title={item.folderPath}>{item.folderPath}</div>
              <Progress className='w-full' percent={item.percent} status={item.percentStatus} />
            </li>
          ))}
        </ul>
      </div>
    </Drawer>
  )
}

export default FilesUploadDrawer
