import { useState } from 'react'
import FilesSelect from '../../components/FilesSelect'
import type { FileTreeFileItem } from '../../types/files'
import JsonView from '../../components/JsonView'

function FileSelectList() {
  const [listData, setListData] = useState<FileTreeFileItem[]>([])

  function onSelect(fileList: FileTreeFileItem[]) {
    setListData(fileList)
  }

  return (
    <>
      <FilesSelect targetType='list' onSelect={onSelect} className='mt-4'></FilesSelect>
      <JsonView className='mt-4! max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FileSelectList
