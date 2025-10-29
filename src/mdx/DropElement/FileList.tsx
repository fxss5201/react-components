import { useState } from 'react'
import DropElement from '../../components/DropElement'
import { type FileTreeFileItem } from '../../components/DropElement'
import FilesUploadDrawer, { type FileItemType } from '../../components/FilesUploadDrawer'
import JsonView from '../../components/JsonView'

function FileList() {
  const [listData, setListData] = useState<FileItemType[]>([])
  const [drawerOpen, setDrawerOpen] = useState(false)

  function onDropList(fileList: FileTreeFileItem[]) {
    setListData(changeFileTreeItemToFileItemType(fileList))
    setDrawerOpen(true)
  }
  function changeFileTreeItemToFileItemType(fileList: FileTreeFileItem[]): FileItemType[] {
    return fileList.map(item => ({
      type: item.type,
      file: item.file,
      name: item.name,
      filePath: item.filePath,
      folderPath: item.folderPath,
    }))
  }

  return (
    <>
      <DropElement type='list' onDrop={onDropList} className='mt-4'></DropElement>
      <JsonView className='mt-4! max-h-100 overflow-auto'>
        {listData}
      </JsonView>
      <FilesUploadDrawer
        open={drawerOpen}
        list={listData}
        setOpen={setDrawerOpen}
      />
    </>
  )
}

export default FileList
