import { useState } from 'react'
import FilesDropSelect from '@/components/FilesDropSelect'
import type { FileTreeItem } from '@/types/files'
import JsonView from '@/components/JsonView'

function FileSelectAndDropTree() {
  const [listData, setListData] = useState<FileTreeItem[]>([])

  function onSelect(fileList: FileTreeItem[]) {
    setListData(fileList)
  }

  return (
    <>
      <FilesDropSelect onSelect={onSelect}></FilesDropSelect>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FileSelectAndDropTree
