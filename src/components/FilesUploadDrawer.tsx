import { Drawer, Progress } from 'antd'
import { type UploadFileItemType } from '../pages/FilesUpload'
import cn from 'classnames'

type FilesUploadDrawerProps = {
  title?: string,
  open: boolean,
  setOpen: (open: boolean) => void,
  fileList?: UploadFileItemType[],
}
function FilesUploadDrawer({
  title = '上传文件/文件夹',
  open = false,
  setOpen,
  fileList = []
}: FilesUploadDrawerProps) {
  return (
    <Drawer
      title={title}
      open={open}
      onClose={() => setOpen(false)}
    >
      <ul className='my-2!'>
        {fileList.map((item, index) => (
          <li key={item.name} className={cn('py-2', { 'border-t border-zinc-300': index > 0 })}>
            <div className='flex items-center overflow-hidden'>
              <div className='flex-shrink-0 leading-[24px] h-[24px]'>{item.icon}</div>
              <span className='ml-2 flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap leading-[24px]' title={item.name}>{item.name}</span>
            </div>
            <Progress className='w-full' percent={item.percent} />
          </li>
        ))}
      </ul>
    </Drawer>
  )
}

export default FilesUploadDrawer
