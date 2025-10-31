import { useRef, useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown, Space, App } from 'antd'
import FilesUploadDrawer, { type FileType, type FileItemType } from '../../components/FilesUploadDrawer'
import MdRender from '../../components/MdRender'
import filesUploadMd from '../../md/FilesUpload.md?raw'
import filesUploadMdEn from '../../md/en/FilesUpload.md?raw'
import { useLocale } from '../../Hooks/useLocale'

export type FileItemTypeTree = {
  type: FileType,
  file?: File,
  name: string,
  filePath: string,
  folderPath: string,
  children?: FileItemTypeTree[]
}

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


async function getFileList(dirHandle: FileSystemDirectoryHandle, parentKey: string = '') {
  const currentRankFiles: FileItemTypeTree[] = []
  for await (const handelEle of dirHandle.values()) {
    const fileKey = `${parentKey.endsWith('/') ? parentKey : parentKey + '/'}${handelEle.name}`
    const curObj: FileItemTypeTree = {
      type: handelEle.kind === 'file' ? 'file' : 'folder',
      name: handelEle.name,
      filePath: fileKey,
      folderPath: parentKey,
      ...(handelEle.kind === 'file' ? { file: await (handelEle as FileSystemFileHandle).getFile() } : {})
    }
    if (handelEle.kind === 'directory') {
      curObj.children = await getFileList(handelEle as FileSystemDirectoryHandle, fileKey)
    }
    currentRankFiles.push(curObj)
  }
  return currentRankFiles
}

function flattenFileTree(fileTree: FileItemTypeTree[]): FileItemType[] {
  const result: FileItemType[] = []
  
  function traverse(node: FileItemTypeTree) {
    const { children, ...fileItem } = node
    // console.log(children)
    result.push(fileItem)
    
    // 递归处理子节点
    if (node.children && node.children.length > 0) {
      node.children.forEach(traverse)
    }
  }
  
  fileTree.forEach(traverse)
  return result
}

function FilesUpload() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, setFileList] = useState<FileItemType[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const { message } = App.useApp()

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    const key = e.key
    if (key === 'upload-folder-include-root') {
      selectDirectoryStoreFn('upload-folder-include-root')
    } else if (key === 'upload-folder-exclude-root') {
      selectDirectoryStoreFn('upload-folder-exclude-root')
    } else {
      if (inputRef.current) {
        inputRef.current.click()
      }
    }
  }

  async function selectDirectoryStoreFn(type: 'upload-folder-include-root' | 'upload-folder-exclude-root') {
    if (!window.showDirectoryPicker) {
      message.warning('当前浏览器不支持')
      return
    }
    let dirHandle: FileSystemDirectoryHandle | null = null
    try {
      dirHandle = await window.showDirectoryPicker({
        mode: 'read',
        id: type,
      })
      if (!dirHandle) {
        return
      }
      // console.log(dirHandle)
      
      let rootFiles: FileItemTypeTree[] = []
      if (type === 'upload-folder-include-root') {
        rootFiles = [
          {
            type: 'folder',
            name: dirHandle.name,
            filePath: `${dirHandle.name}`,
            folderPath: '/',
            children: await getFileList(dirHandle as FileSystemDirectoryHandle, `/${dirHandle.name}`)
          }
        ]
      } else {
        rootFiles = await getFileList(dirHandle as FileSystemDirectoryHandle, '/')
      }
      const roorFileList = flattenFileTree(rootFiles)
      if (roorFileList.length > 0) {
        setFileList(roorFileList)
        console.log(roorFileList.length)
        setDrawerOpen(true)
      }
    } catch (error) {
      if (error instanceof Error && error.message.includes('aborted')) {
        message.warning('请选择文件夹')
      } else {
        console.log(error)
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newFileList = Array.from(files).map((file) => ({
        type: 'file' as FileType,
        file,
        name: file.name,
        filePath: file.name,
        folderPath: '/',
      }))
      if (newFileList.length > 0) {
        setFileList(newFileList)
        console.log(newFileList.length)
        setDrawerOpen(true)
      }
    }
  }

  const locale = useLocale()

  return (
    <div className='px-4 pb-4'>
      <MdRender>{locale === 'zh' ? filesUploadMd : filesUploadMdEn}</MdRender>
      
      <div className='mt-4'>
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
      </div>

      <FilesUploadDrawer
        open={drawerOpen}
        list={fileList}
        setOpen={setDrawerOpen}
      />
    </div>
  )
}

export default FilesUpload
