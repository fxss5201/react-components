import React from 'react'
import { Tree } from 'antd'
import DropElement from '../../components/DropElement'
import { type FileTreeItem } from '../../components/DropElement'
import FileIcon from '../../components/FileIcon'

function DropUpload() {
  const [treeData, setTreeData] = React.useState<FileTreeItem[]>([])
  
  function onDropTree(fileTrees: FileTreeItem[]) {
    console.log('fileTrees', fileTrees)
    setTreeData(fileTrees)
  }

  return (
    <>
      <DropElement type='tree' onDrop={onDropTree} className='h-30!'></DropElement>
      {treeData.length > 0 && (
        <Tree
          fieldNames={{
            title: 'name',
            key: 'filePath',
            children: 'children'
          }}
          // @ts-ignore
          treeData={treeData}
          showLine={true}
          defaultExpandAll
          height={320}
          showIcon
          icon={(props: any) => {
            return <FileIcon fileName={props.title} type={props.type === 'file' ? 'file' : 'folder'}></FileIcon>
          }}
          className='mt-4 h-80'
        />
      )}
    </>
  )
}

export default DropUpload
