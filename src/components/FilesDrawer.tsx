import { useEffect, useCallback, useState, useRef } from 'react'
import type { FileItemType, TargetType } from '@/types/files'
import { useImmer } from 'use-immer'
import { Drawer, Progress, Button, App } from 'antd'
import { type ProgressProps } from 'antd'
import cn from 'classnames'
import FileIcon from './FileIcon'
import { useTranslation } from 'react-i18next'
import { theme as antdTheme } from 'antd'

export type DrawerFileItemType = FileItemType & {
  /**
   * @description 文件图标。|| File icon.
   */
  icon?: React.ReactNode,
  /**
   * @description 上传进度。|| Upload progress.
   * @default 0
   */
  percent?: number,
  /**
   * @description 上传进度状态。|| Upload progress status.
   * @default 'normal'
   */
  percentStatus?: ProgressProps['status'],
}

export type DrawerResultFileTreeItemType = DrawerFileItemType & {
  /**
   * @description 子项。|| Child items.
   */
  children?: DrawerResultFileTreeItemType[]
}

export type FilesDrawerProps = {
  /**
   * @description 目标类型 'tree' | 'list'。|| Target type, 'tree' | 'list'.
   * @default 'list'
   */
  targetType?: TargetType,
  /**
   * @description 抽屉标题。|| Drawer title.
   * @default ''
   */
  title: string,
  /**
   * @description 抽屉是否打开。|| Drawer is open.
   * @default false
   */
  open: boolean,
  /**
   * @description 抽屉关闭回调。|| Drawer close callback.
   */
  setOpen: (open: boolean) => void,
  /**
   * @description 文件列表。|| File list.
   * @default []
   */
  list: FileItemType[],
  /**
   * @description 文件上传回调。|| File upload callback.
   */
  doneFile: (fileItem: DrawerFileItemType) => Promise<void>,
  /**
   * @description 上传完成回调。|| Upload complete callback.
   */
  onSuccess?: (fileTrees: DrawerResultFileTreeItemType[]) => void,
}

function FilesDrawer({
  targetType = 'list',
  title = '',
  open = false,
  setOpen,
  list = [],
  doneFile,
  onSuccess
}: FilesDrawerProps) {
  const { token } = antdTheme.useToken()
  const { modal } = App.useApp()
  const { t } = useTranslation()
  const fileListRef = useRef<HTMLUListElement>(null)
  const [fileList, updateFileList] = useImmer<DrawerFileItemType[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const doneFileFn = useCallback(async (item: DrawerFileItemType) => {
    setLoading(true)
    const interval = setInterval(() => {
      updateFileList((draft) => {
        const index = draft.findIndex((i) => i.filePath === item.filePath)
        if (index !== -1) {
          draft[index].percent = Math.min(98, draft[index].percent! + (draft[index].percent! < 50 ? 10 : draft[index].percent! < 75 ? 5 : 1))
          draft[index].percentStatus = 'active'
        }
      })
    }, 300)
    return doneFile(item).then(() => {
      if (import.meta.env.DEV) console.log('success', item)
      updateFileList((draft) => {
        const index = draft.findIndex((i) => i.filePath === item.filePath)
        if (index !== -1) {
          draft[index].percent = 100
          draft[index].percentStatus = 'success'
        }
      })
    }).catch((error) => {
      if (import.meta.env.DEV) console.log('error', error, item)
      updateFileList((draft) => {
        const index = draft.findIndex((i) => i.filePath === item.filePath)
        if (index !== -1) {
          draft[index].percentStatus = 'exception'
        }
      })
    }).finally(() => {
      setLoading(false)
      clearInterval(interval)
    })
  }, [updateFileList, doneFile])

  useEffect(() => {
    if (open && list.length > 0) {
      const initList: DrawerFileItemType[] = list.map((item) => ({
        ...item,
        icon: item.type === 'file' ? <FileIcon fileName={item.name} /> : <FileIcon fileName={item.name} type="folder" />,
        percent: 0,
        percentStatus: 'normal',
      }))
      updateFileList(initList)
    } else if (!open) {
      updateFileList([])
    }
  }, [open, list, updateFileList])

  const convertToTree = (array: DrawerFileItemType[]): DrawerResultFileTreeItemType[] => {
    const roots: DrawerResultFileTreeItemType[] = []
    array.forEach(item => {
      let currentLevel = roots
      if (item.folderPath) {
        const paths = item.folderPath.split('/').filter(x => x !== '')
        paths.forEach((folder, folderIndex) => {
          const findIndex = currentLevel.findIndex(x => x.name === folder)
          if (findIndex === -1) {
            currentLevel.push({
              name: folder,
              type: 'folder',
              filePath: paths.slice(0, folderIndex + 1).join('/'),
              folderPath: paths.slice(0, folderIndex).join('/'),
              children: []
            })
            currentLevel = currentLevel[currentLevel.length - 1].children as DrawerResultFileTreeItemType[]
          } else {
            currentLevel = currentLevel[findIndex].children as DrawerResultFileTreeItemType[]
          }
        })
      }
      currentLevel.push({
        name: item.name,
        type: item.type,
        filePath: item.filePath,
        folderPath: item.folderPath,
        ...(item.type === 'file' ? { size: item.size, file: item.file } : {}),
        ...(item.type === 'folder' ? { children: [] } : {})
      })
    })
    return roots
  }

  const [refreshDone, setRefreshDone] = useState<boolean>(true)
  useEffect(() => {
    if (!open) return
    if (loading) return
    
    if (fileList.length > 0 && fileList.every((item) => item.percentStatus === 'success')) {
      setOpen(false)
      if (import.meta.env.DEV) console.log('allSuccess', fileList)
      if (onSuccess) {
        if (targetType === 'list') {
          onSuccess(fileList)
        } else {
          onSuccess(convertToTree(fileList))
        }
      }
      return
    }
    
    const nextIndex = fileList.findIndex(item => item.percentStatus === 'normal')
    if (nextIndex !== -1) {
      const itemElement = fileListRef.current?.children[nextIndex] as HTMLElement
      itemElement?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      const nextItem = fileList[nextIndex]
      if (nextItem) {
        const timer = setTimeout(() => {
          doneFileFn(nextItem)
        }, 0)
        return () => clearTimeout(timer)
      }
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRefreshDone(true)
    }
  }, [open, fileList, doneFileFn, loading, setOpen, onSuccess, targetType])

  const onRefreshUpload = useCallback(() => {
    setRefreshDone(false)
    updateFileList((draft) => {
      draft.forEach((item) => {
        if (item.percentStatus === 'exception') {
          item.percent = 0
          item.percentStatus = 'normal'
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
        onSuccess(convertToTree(IgnoreErrorList))
      }
    }
  }

  const doCloseFn = useCallback(() => {
    modal.confirm({
      title: t('components.FilesDrawer.closePrompt', { defaultValue: '关闭提示' }),
      content: t('components.FilesDrawer.closePromptContent', { defaultValue: '关闭后将停止，是否确认关闭吗？' }),
      okType: 'danger',
      closable: true,
      onOk: () => {
        setOpen(false)
      },
      onCancel: () => {
        // 取消关闭
      }
    })
}, [setOpen, modal, t])

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
            <Button size="small" onClick={onRefreshUpload}>{t('components.FilesDrawer.retryFailed', { defaultValue: '失败重传' })}</Button>
            <Button size="small" onClick={onIgnoreError} className='ml-2'>{t('components.FilesDrawer.ignoreErrors', { defaultValue: '忽略错误' })}</Button>
          </>
        )
      }
    >
      <div className='w-full h-full flex flex-col'>
        <div className='flex-shrink-0 flex justify-between text-[16px] mb-2 px-6'>
          <div>{t('components.FilesDrawer.total', { defaultValue: '总数' })}: {fileList.length}</div>
          <div>{t('components.FilesDrawer.success', { defaultValue: '成功' })}: {fileList.filter((item) => item.percentStatus === 'success').length}</div>
          <div style={{ color: token.colorError }}>{t('components.FilesDrawer.failed', { defaultValue: '失败' })}: {fileList.filter((item) => item.percentStatus === 'exception').length}</div>
        </div>
        <ul className='flex-auto overflow-x-hidden overflow-y-auto px-6' ref={fileListRef}>
          {fileList.map((item, index) => (
            <li
              key={item.filePath}
              className={cn('py-2', { 'border-t border-solid': index > 0 })}
              style={{ borderColor: token.colorBorder }}>
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

export default FilesDrawer
