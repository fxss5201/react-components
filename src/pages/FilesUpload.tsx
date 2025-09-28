import { useRef, useState } from 'react'
import { useImmer } from 'use-immer'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown, Space } from 'antd'
import FileIcon from '../components/FileIcon'
import FilesUploadDrawer from '../components/FilesUploadDrawer'

const dropdownItems: MenuProps['items'] = [
  {
    label: '上传文件',
    key: 'upload-file'
  },
  {
    label: '上传文件夹（含根目录）',
    key: 'upload-folder-include-root'
  },
  {
    label: '上传文件夹（不含根目录）',
    key: 'upload-folder-exclude-root'
  }
]

export type UploadFileType = 'file' | 'folder'
export type UploadFileItemType = {
  type: UploadFileType,
  file: File,
  name: string,
  icon: React.ReactNode,
  percent?: number,
  filePath?: string,
  folderPath?: string,
}

function FilesUpload() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, updateFileList] = useImmer<UploadFileItemType[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    const key = e.key
    if (key === 'upload-folder-include-root') {
      console.log('上传文件夹（含根目录）')
    } else if (key === 'upload-folder-exclude-root') {
      console.log('上传文件夹（不含根目录）')
    } else {
      if (inputRef.current) {
        inputRef.current.click()
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newFileList = Array.from(files).map((file) => ({
        type: 'file' as UploadFileType,
        file,
        name: file.name,
        icon: <FileIcon fileName={file.name} />,
        percent: 0,
      }))
      updateFileList(() => newFileList)
      setDrawerOpen(true)
    }
  }

  return (
    <div className='p-4'>
      <Dropdown menu={{ items: dropdownItems, onClick: handleMenuClick }}>
        <Button>
          <Space>
            上传文件/文件夹
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <input
        ref={inputRef}
        type='file'
        multiple
        style={{ display: 'none' }}
        onChange={handleInputChange}
      />

      <FilesUploadDrawer
        open={drawerOpen}
        fileList={fileList}
        setOpen={setDrawerOpen}
      />
    </div>
  )
}

export default FilesUpload
