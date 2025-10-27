import { useState } from 'react'
import { Tree } from 'antd'
import DropElement from '../../components/DropElement'
import { type FileTreeItem, type FileTreeFileItem } from '../../components/DropElement'
import MdRender from '../../components/MdRender'
import DropElementMd from '../../md/DropElement.md?raw'
import DropElementMdEn from '../../md/en/DropElement.md?raw'
import { useLocale } from '../../Hooks/useLocale'
import FileIcon from '../../components/FileIcon'
import FilesUploadDrawer, { type FileItemType } from '../../components/FilesUploadDrawer'

function DropUpload() {
  const locale = useLocale()

  const [treeData, setTreeData] = useState<FileTreeItem[]>([])
  const [listData, setListData] = useState<FileItemType[]>([])
  const [drawerOpen, setDrawerOpen] = useState(false)
  
  function onDropTree(fileTrees: FileTreeItem[]) {
    console.log('fileTrees', fileTrees)
    setTreeData(fileTrees)
  }

  function onDropList(fileList: FileTreeItem[]) {
    setListData(changeFileTreeItemToFileItemType(fileList as FileTreeFileItem[]))
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
    <div className='px-4 pb-4'>
      <MdRender md={locale === 'zh' ? DropElementMd : DropElementMdEn} />
      <h2 className='text-2xl font-bold mt-4'>{locale === 'zh' ? '文件树' : 'File Tree'}</h2>
      <DropElement onDrop={onDropTree} className='mt-4 h-30!'></DropElement>
      {treeData.length > 0 && (
        <Tree
          fieldNames={{
            title: 'name',
            key: 'filePath',
            children: 'children',
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
      <h2 className='text-2xl font-bold mt-4'>{locale === 'zh' ? '文件列表' : 'File List'}</h2>
      <DropElement type='list' onDrop={onDropList} className='mt-4'></DropElement>

      <FilesUploadDrawer
        open={drawerOpen}
        list={listData}
        setOpen={setDrawerOpen}
      />
    </div>
  )
}

export default DropUpload
