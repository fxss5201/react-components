import { useState } from 'react'
import FilesSelect from '@/components/FilesSelect'
import type { FileTreeItem } from '@/types/files'
import JsonView from '@/components/JsonView'

function FileSelectList() {
  const [listData, setListData] = useState<FileTreeItem[]>([])

  function onSelect(fileList: FileTreeItem[]) {
    setListData(fileList)
  }

  return (
    <>
      <FilesSelect targetType='list' onSelect={onSelect} className='mt-4'></FilesSelect>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FileSelectList
