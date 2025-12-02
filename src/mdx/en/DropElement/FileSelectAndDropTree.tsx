import { useState, useContext } from 'react'
import FilesSelect from '@/components/FilesSelect'
import type { FileTreeItem } from '@/types/files'
import DropElement from '@/components/DropElement'
import JsonView from '@/components/JsonView'
import LocaleContext from '@/context/LocaleContext'

function FileSelectAndDropTree() {
  const localeContext = useContext(LocaleContext)
  const [listData, setListData] = useState<FileTreeItem[]>([])

  function onSelect(fileList: FileTreeItem[]) {
    setListData(fileList)
  }

  return (
    <>
      <DropElement targetType='tree' onDrop={onSelect} className='h-30!'>
        <div className='flex align-center'>
          <div className='text-2xl'>{
            localeContext === 'zh'
              ? '请拖放文件或文件夹到这里，或点击选择文件'
              : 'Please drag and drop files or folders here, or click to select files'}</div>
          <FilesSelect targetType='tree' onSelect={onSelect} className='ml-4'></FilesSelect>
        </div>
      </DropElement>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FileSelectAndDropTree
