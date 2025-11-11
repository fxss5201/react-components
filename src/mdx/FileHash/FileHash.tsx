import { useState } from 'react'
import { Select, Spin } from 'antd'
import DropElement from '../../components/DropElement'
import type { FileTreeFileItem, FileItemType } from '../../types/files'
import JsonView from '../../components/JsonView'
import { calculateFileHashHex, type AlgorithmType } from '../../utils/calculateFileHashHex'

type FileHashItemType = FileItemType & {
  hashHex: string
}

function FileHashDemo() {
  const [listData, setListData] = useState<FileHashItemType[]>([])
  const [algorithm, setAlgorithm] = useState<AlgorithmType>('SHA-256')
  const [loading, setLoading] = useState<boolean>(false)

  async function onDropList(fileList: FileTreeFileItem[]) {
    setLoading(true)
    setListData(await changeFileTreeItemToFileItemType(fileList))
    setLoading(false)
  }
  async function changeFileTreeItemToFileItemType(fileList: FileTreeFileItem[]): Promise<FileHashItemType[]> {
    const fileHashItemList: FileHashItemType[] = []
    for (let index = 0; index < fileList.length; index++) {
      const item = fileList[index]
      const hashHex = await calculateFileHashHex(item.file as File, algorithm)
      fileHashItemList.push({
        type: item.type,
        file: item.file,
        name: item.name,
        filePath: item.filePath,
        folderPath: item.folderPath,
        hashHex,
      })
    }
    return fileHashItemList
  }

  return (
    <>
      <div className='flex items-center'>
        <div>加密算法：</div>
        <Select
          value={algorithm}
          onChange={setAlgorithm}
          options={['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'].map(x => ({ value: x, label: x }))}
          className='w-30'
        />
      </div>
      <DropElement targetType='list' onDrop={onDropList} className='mt-4'>
        <div className='text-center'>
          <div className='text-2xl'>文件哈希计算器</div>
          <div className='text-sm mt-4'>拖拽文件/文件夹到此处，即可计算文件的哈希值。</div>
        </div>
      </DropElement>
      <Spin spinning={loading}>
        <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
          {listData}
        </JsonView>
      </Spin>
    </>
  )
}

export default FileHashDemo
