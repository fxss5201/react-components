import { useState } from 'react'
import FilesDownloadDrawer from '@/components/FilesDownloadDrawer'
import { type DrawerFileItemType } from '@/components/FilesDrawer'
import type { FileDownloadItemType } from '@/types/files'
import JsonView from '@/components/JsonView'
import { Button, Switch } from 'antd'

function FilesDownload() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList] = useState<FileDownloadItemType[]>([
    {
      name: 'vite.svg',
      type: 'file',
      filePath: '/vite.svg',
      folderPath: '/',
      url: '/react-components/vite.svg',
    },
    {
      name: 'logo123.png',
      type: 'file',
      filePath: '/logo123.png',
      folderPath: '/',
      url: 'https://blog.fxss.work/logo123.png',
    },
    {
      name: 'logo.png',
      type: 'file',
      filePath: '/logo.png',
      folderPath: '/',
      url: 'https://blog.fxss.work/logo.png',
    },
    {
      name: 'aaa.png',
      type: 'file',
      filePath: '/dir/bb/aaa.png',
      folderPath: '/dir/bb',
      url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f80fb055-eaa7-4008-b0c3-05194e370800/26671f33-7f69-40e8-af57-cc66a8d437cf.png',
    },
  ])
  const [isSelectFolder, setIsSelectFolder] = useState(true)
  const [listData, setListData] = useState<DrawerFileItemType[]>([])
  const onSuccessFn = (list: DrawerFileItemType[]) => {
    console.log('success', list)
    setListData(list)
  }

  return (
    <>
      <div className='mb-4!'>Network Content:</div>
      <JsonView className='mb-4!' jsonClassName='max-h-100 overflow-auto'>
        {fileList}
      </JsonView>
      <div className='flex items-center'>
        <Switch checkedChildren="Folder Download" unCheckedChildren="Normal Download" checked={isSelectFolder} onChange={setIsSelectFolder} />
        <Button onClick={() => setDrawerOpen(true)} className='ml-4'>Download Files/Folders</Button>
      </div>
      <FilesDownloadDrawer
        targetType='list'
        title='Download Files/Folders'
        open={drawerOpen}
        list={fileList}
        setOpen={setDrawerOpen}
        onSuccess={onSuccessFn}
        isSelectFolder={isSelectFolder}
      />
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FilesDownload
