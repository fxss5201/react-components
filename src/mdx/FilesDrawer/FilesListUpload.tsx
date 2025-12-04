import { useState } from 'react'
import FilesUploadDrawer from '@/components/FilesUploadDrawer'
import { type DrawerFileItemType } from '@/components/FilesDrawer'
import FilesSelect from '@/components/FilesSelect'
import type { FileItemType } from '@/types/files'
import JsonView from '@/components/JsonView'

function FilesListUpload() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, setFileList] = useState<FileItemType[]>([])
  const [listData, setListData] = useState<DrawerFileItemType[]>([])

  const onSelectFn = (files: FileItemType[]) => {
    setFileList(files)
    setDrawerOpen(true)
  }
  const onSuccessFn = (list: DrawerFileItemType[]) => {
    console.log('success', list)
    setListData(list)
  }

  return (
    <div className='px-4 pb-4'>
      <FilesSelect targetType='list' isUpload={true} onSelect={onSelectFn} />

      <FilesUploadDrawer
        targetType='list'
        title='上传文件/文件夹'
        open={drawerOpen}
        list={fileList}
        setOpen={setDrawerOpen}
        onSuccess={onSuccessFn}
      />

      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </div>
  )
}

export default FilesListUpload
