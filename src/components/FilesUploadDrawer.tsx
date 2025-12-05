import FilesDrawer, { type FilesDrawerProps, type DrawerFileItemType } from '@/components/FilesDrawer'
import fileUploadMock from '@/common/fileUploadMock'
import { useCallback } from 'react'

export type FilesUploadDrawerProps = Omit<FilesDrawerProps, 'title' | 'doneFile'> & {
  title?: string,
}

function FilesUploadDrawer({
  targetType = 'list',
  title = '上传文件/文件夹',
  open = false,
  setOpen,
  list = [],
  onSuccess
}: FilesUploadDrawerProps) {
  const doneFile = useCallback(async (item: DrawerFileItemType) => {
    if (item.type === 'file') {
      await fileUploadMock()
    } else {
      await fileUploadMock()
    }
  }, [])

  return (
    <FilesDrawer
      targetType={targetType}
      title={title}
      open={open}
      setOpen={setOpen}
      list={list}
      doneFile={doneFile}
      onSuccess={onSuccess}
    />
  )
}

export default FilesUploadDrawer
