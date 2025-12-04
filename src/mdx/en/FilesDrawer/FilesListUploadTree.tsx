import { useState } from 'react'
import FilesUploadDrawer from '@/components/FilesUploadDrawer'
import { type DrawerResultFileTreeItemType } from '@/components/FilesDrawer'
import FilesSelect from '@/components/FilesSelect'
import type { FileItemType } from '@/types/files'
import JsonView from '@/components/JsonView'

function FilesListUploadTree() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, setFileList] = useState<FileItemType[]>([])
  const [treeData, setTreeData] = useState<DrawerResultFileTreeItemType[]>([])

  const onSelectFn = (files: FileItemType[]) => {
    setFileList(files)
    setDrawerOpen(true)
  }
  const onSuccessFn = (tree: DrawerResultFileTreeItemType[]) => {
    console.log('success', tree)
    setTreeData(tree)
  }

  return (
    <div className='px-4 pb-4'>
      <FilesSelect targetType='list' isUpload={true} onSelect={onSelectFn} />

      <FilesUploadDrawer
        targetType='tree'
        title='Upload Files/Folders'
        open={drawerOpen}
        list={fileList}
        setOpen={setDrawerOpen}
        onSuccess={onSuccessFn}
      />

      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {treeData}
      </JsonView>
    </div>
  )
}

export default FilesListUploadTree
