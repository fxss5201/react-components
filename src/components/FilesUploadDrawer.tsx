import { useEffect, useCallback, useState, useRef } from 'react'
import { useImmer } from 'use-immer'
import { Drawer, Progress, Button, App } from 'antd'
import { type ProgressProps } from 'antd'
import cn from 'classnames'
import { type FileItemType } from '../pages/FilesUpload'
import FileIcon from './FileIcon'
import fileUploadMock from '../common/fileUploadMock'

type UploadFileItemType = FileItemType & {
  icon: React.ReactNode,
  percent: number,
  percentStatus: ProgressProps['status'],
}

type FilesUploadDrawerProps = {
  title?: string,
  open: boolean,
  setOpen: (open: boolean) => void,
  list?: FileItemType[],
}

function FilesUploadDrawer({
  title = '上传文件/文件夹',
  open = false,
  setOpen,
  list = []
}: FilesUploadDrawerProps) {
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
          draft[index].percent = Math.min(intervalPercentMax, draft[index].percent + 10)
        }
      })
    }, 300)
    return fileUploadMock().then(() => {
      console.log('上传成功', item)
      updateFileList((draft) => {
        const index = draft.findIndex((i) => i.filePath === item.filePath)
        if (index !== -1) {
          draft[index].percent = 100
          draft[index].percentStatus = 'success'
        }
      })
    }).catch(() => {
      console.log('上传失败', item)
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
          draft[index].percent = Math.min(intervalPercentMax, draft[index].percent + 10)
        }
      })
    }, 300)
    return fileUploadMock().then(() => {
      console.log('上传成功', item)
      updateFileList((draft) => {
        const index = draft.findIndex((i) => i.filePath === item.filePath)
        if (index !== -1) {
          draft[index].percent = 100
          draft[index].percentStatus = 'success'
        }
      })
    }).catch(() => {
      console.log('上传失败', item)
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

  useEffect(() => {
    if (!open) return
    if (uploading) return
    
    if (fileList.length > 0 && fileList.every((item) => item.percentStatus === 'success')) {
      setOpen(false)
      message.success('所有文件上传成功')
      return
    }
    
    const nextIndex = fileList.findIndex(item => item.percentStatus === 'active')
    if (nextIndex !== -1) {
      fileListRef.current!.scrollTop = nextIndex * 62
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

  const [refreshDone, setRefreshDone] = useState<boolean>(true)
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

  const doCloseFn = useCallback(() => {
    modal.confirm({
      title: '关闭提示',
      content: '关闭后将停止继续上传文件，是否确认关闭吗？',
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
      onClose={doCloseFn}
      maskClosable={false}
      classNames={{
        body: 'pt-4 pb-0 px-0'
      }}
      extra={
        fileList.filter((item) => item.percentStatus === 'exception').length > 0 && refreshDone && (
          <Button size="small" onClick={onRefreshUpload}>失败重传</Button>
        )
      }
    >
      <div className='w-full h-full flex flex-col'>
        <div className='flex-shrink-0 flex justify-between text-[16px] mb-2 px-6'>
          <div>总数：{fileList.length}</div>
          <div>成功：{fileList.filter((item) => item.percentStatus === 'success').length}</div>
          <div className='text-red-500'>失败：{fileList.filter((item) => item.percentStatus === 'exception').length}</div>
        </div>
        <ul className='flex-auto overflow-x-hidden overflow-y-auto px-6' ref={fileListRef}>
          {fileList.map((item, index) => (
            <li key={item.name} className={cn('py-2', { 'border-t border-zinc-300': index > 0 })}>
              <div className='flex items-center overflow-hidden'>
                <div className='flex-shrink-0 leading-[24px] h-[24px]'>{item.icon}</div>
                <span className='ml-2 flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap leading-[24px]' title={item.name}>{item.name}</span>
              </div>
              <Progress className='w-full' percent={item.percent} status={item.percentStatus} />
            </li>
          ))}
        </ul>
      </div>
    </Drawer>
  )
}

export default FilesUploadDrawer
