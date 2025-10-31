import { useState } from 'react'
import FilesSelect, { type FileTreeItem } from '../../components/FilesSelect'
import JsonView from '../../components/JsonView'

function FileSelectTree() {
  const [listData, setListData] = useState<FileTreeItem[]>([])

  function onSelect(fileList: FileTreeItem[]) {
    setListData(fileList)
  }

  return (
    <>
      <FilesSelect targetType='tree' onSelect={onSelect} className='mt-4'></FilesSelect>
      <JsonView className='mt-4! max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FileSelectTree
