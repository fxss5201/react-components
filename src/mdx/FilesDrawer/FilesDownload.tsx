import { useState } from 'react'
import FilesDownloadDrawer from '@/components/FilesDownloadDrawer'
import { type DrawerFileItemType } from '@/components/FilesDrawer'
import type { FileItemType } from '@/types/files'
import JsonView from '@/components/JsonView'
import { Button } from 'antd'

function FilesDownload() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList] = useState<FileItemType[]>([
    {
      name: 'default.jpg',
      type: 'file',
      filePath: '/default.jpg',
      folderPath: '/',
      url: 'https://theme-hope-assets.vuejs.press/hero/default.jpg',
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
  const [listData, setListData] = useState<DrawerFileItemType[]>([])
  const onSuccessFn = (list: DrawerFileItemType[]) => {
    console.log('success', list)
    setListData(list)
  }

  return (
    <>
      <div className='mb-4!'>网络内容：</div>
      <JsonView className='mb-4!' jsonClassName='max-h-100 overflow-auto'>
        {fileList}
      </JsonView>
      <Button onClick={() => setDrawerOpen(true)}>下载文件/文件夹</Button>
      <FilesDownloadDrawer
        targetType='list'
        title='下载文件/文件夹'
        open={drawerOpen}
        list={fileList}
        setOpen={setDrawerOpen}
        onSuccess={onSuccessFn}
      />
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FilesDownload
