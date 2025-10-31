import { useState } from 'react'
import FilesUploadDrawer from '../../../components/FilesUploadDrawer'
import FilesSelect from '../../../components/FilesSelect'
import type { FileItemType } from '../../../types/files'

function FilesListUpload() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, setFileList] = useState<FileItemType[]>([])

  const onSelectFn = (files: FileItemType[]) => {
    setFileList(files)
    setDrawerOpen(true)
  }

  return (
    <div className='px-4 pb-4'>
      <FilesSelect targetType='list' isUpload={true} onSelect={onSelectFn} />

      <FilesUploadDrawer
        title='Upload Files/Folders'
        open={drawerOpen}
        list={fileList}
        setOpen={setDrawerOpen}
        onSuccess={(list) => console.log('success', list)}
      />
    </div>
  )
}

export default FilesListUpload
