import { useRef, useState } from 'react'
import { Button, Input, Progress, Table, App, Form, Spin } from 'antd'
import { ZipReader, BlobWriter, BlobReader, type Entry, type FileEntry } from '@zip.js/zip.js'
import dayjs from 'dayjs'
import { convertByteToReadableSize } from '@/utils'
import { aDownloadBlob } from '@/utils'
import FileIcon from '@/components/FileIcon'
import FilesDownloadDrawer from '@/components/FilesDownloadDrawer'
import type { FileDownloadItemType } from '@/types/files'
import { type DrawerFileItemType } from '@/components/FilesDrawer'

export type FileTreeItem = {
  type: 'folder' | 'file'
  name: string
  filePath: string
  folderPath: string
  encrypted?: boolean
  compressedSize?: number
  uncompressedSize?: number
  lastModDate?: Date
  children?: FileTreeItem[]
}
export type BreadcrumbItemsType = {
  name: string
  filePath: string
}

function FilesZipReader() {
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [progress, setProgress] = useState(0)
  const [showProgress, setShowProgress] = useState(false)
  const [entries, setEntries] = useState<Entry[]>([])
  const [showEntries, setShowEntries] = useState(false)
  const oldFileName = useRef<string>('')
  const allFileTree = useRef<FileTreeItem[]>([])
  const [fileTree, setFileTree] = useState<FileTreeItem[]>([])
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItemsType[]>([])
  const { modal } = App.useApp()
  const [form] = Form.useForm()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fileList, setFileList] = useState<FileDownloadItemType[]>([])

  async function openFileFn(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword('')
    setShowProgress(true)
    setShowEntries(false)
    setProgress(0)
    const files = e.target.files
    if (files) {
      const file = files[0]
      const fileNames = file.name.split('.')
      fileNames.pop()
      oldFileName.current = fileNames.join('.')
      const zipReader = new ZipReader(new BlobReader(file))
      const entries = await zipReader.getEntries({
        onprogress: async(progress, total, entry) => {
          setProgress((progress / total) * 100)
          console.log(entry)
        }
      })
      setEntries(entries)
      setShowProgress(false)
      setShowEntries(true)
      allFileTree.current = buildFileTree(entries)
      setFileTree(allFileTree.current)
      setBreadcrumbItems([{
        name: file.name,
        filePath: '/',
      }])
      if (entries[0].encrypted && !password) {
        modal.confirm({
          title: '密码提示',
          content: (
            <Form
              form={form}
              layout='vertical'
              preserve={false}
              initialValues={{ password: '' }}
              clearOnDestroy
              className='mt-4'
            >
              <Form.Item
                name='password'
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password placeholder='请输入密码' />
              </Form.Item>
            </Form>
          ),
          closable: true,
          destroyOnHidden: true,
          okButtonProps: { autoFocus: true, htmlType: 'submit' },
          onOk: async () => {
            try {
              const values = await form.validateFields()
              setPassword(values.password)
            } catch (error) {
              return Promise.reject(error)
            }
          },
        })
      }
    }
  }
  function buildFileTree(items: Entry[]): FileTreeItem[] {
    const tree: FileTreeItem[] = []
    items.forEach((item) => {
      const parts = item.filename.split('/')
      let currentLevel = tree
      parts.forEach((part, index) => {
        if (part) {
          const isLast = index === parts.length - 1
          const existingItem = currentLevel.find((i) => i.name === part)
          const type = isLast ? item.directory ? 'folder' : 'file' : 'folder'
          if (existingItem) {
            if (isLast) {
              existingItem.type = type
              existingItem.filePath = parts.slice(0, index + 1).join('/')
              existingItem.folderPath = parts.slice(0, index).join('/')
              if (type === 'file') {
                existingItem.encrypted = item.encrypted
                existingItem.compressedSize = item.compressedSize
                existingItem.uncompressedSize = item.uncompressedSize
                existingItem.lastModDate = item.lastModDate
              }
            } else {
              currentLevel = existingItem.children || []
            }
          } else {
            const newItem: FileTreeItem = {
              type: type,
              name: part,
              filePath: parts.slice(0, index + 1).join('/'),
              folderPath: parts.slice(0, index).join('/'),
              ...(type === 'file' ? {
                encrypted: item.encrypted,
                compressedSize: item.compressedSize,
                uncompressedSize: item.uncompressedSize,
                lastModDate: item.lastModDate,
              } : {})
            }
            if (!isLast) {
              newItem.children = []
            }
            currentLevel.push(newItem)
            currentLevel = newItem.children || []
          }
        }
      })
    })
      console.log('tree', tree)
    return tree
  }

  async function downloadFile(item: FileTreeItem) {
    if (item.type === 'folder') {
      return
    }
    const filePath = item.filePath
    const fileEntry: FileEntry = entries.find(x => x.filename === filePath) as FileEntry
    if (!fileEntry) {
      return
    }
    setLoading(true)
    const blobData = await fileEntry.getData(new BlobWriter(), {
      password,
    })
    setLoading(false)
    aDownloadBlob(blobData, item.name)
  }

  function doFolderClick(item: FileTreeItem) {
    if (item.type === 'file') {
      return
    }
    const newBreadcrumbItems = [...breadcrumbItems!, { name: item.name, filePath: item.filePath }]
    setBreadcrumbItems(newBreadcrumbItems)
    setFileTree(getFileTrees(newBreadcrumbItems))
  }
  function getFileTrees(breadcrumbItems: BreadcrumbItemsType[]): FileTreeItem[] {
    let allFileTrees = allFileTree.current
    breadcrumbItems.forEach((breadcrumbItem) => {
      const folder = allFileTrees.find(x => x.filePath === breadcrumbItem.filePath)
      if (folder) {
        allFileTrees = folder.children || []
      }
    })
    return allFileTrees
  }
  function doBreadcrumbClick(item: BreadcrumbItemsType, index: number) {
    if (item.filePath === '/') {
      setBreadcrumbItems([{ name: oldFileName.current, filePath: '/' }])
      setFileTree(allFileTree.current)
      return
    }
    const newBreadcrumbItems = breadcrumbItems!.slice(0, index + 1)
    setBreadcrumbItems(newBreadcrumbItems)
    setFileTree(getFileTrees(newBreadcrumbItems))
  }

  async function downloadAllFile() {
    setDrawerOpen(true)
    setFileList([])
    const allFileList: FileDownloadItemType[] = []
    setLoading(true)
    for (const entry of entries) {
      if (entry.directory) continue
      const blobData = await entry.getData(new BlobWriter(), {
        password,
      })
      const parts = entry.filename.split('/')
      const name = parts[parts.length - 1]
      allFileList.push({
        name,
        type: 'file',
        filePath:  [oldFileName.current, ...parts.slice(0)].join('/'),
        folderPath: [oldFileName.current, ...parts.slice(0, -1)].join('/'),
        url: URL.createObjectURL(blobData),
      })
    }
    setLoading(false)
    setFileList(allFileList)
  }
  function onSuccessFn(list: DrawerFileItemType[]) {
    list.forEach(item => {
      if (item.url) URL.revokeObjectURL(item.url)
    })
  }
  async function downloadCurrentFolder() {
    setDrawerOpen(true)
    setFileList([])
    const fileList: FileDownloadItemType[] = []
    setLoading(true)
    await getCurrentFolderFileList(fileTree, fileList)
    setLoading(false)
    setFileList(fileList)
  }
  async function getCurrentFolderFileList(fileTree: FileTreeItem[], fileList: FileDownloadItemType[]) {
    for (const item of fileTree) {
      if (item.type === 'file') {
        const filePath = item.filePath
        const fileEntry: FileEntry = entries.find(x => x.filename === filePath) as FileEntry
        if (!fileEntry) {
          return
        }
        const blobData = await fileEntry.getData(new BlobWriter(), {
          password,
        })
        const parts = filePath.split('/')
        fileList.push({
          name: item.name,
          type: 'file',
          filePath:  [oldFileName.current, ...parts.slice(0)].join('/'),
          folderPath: [oldFileName.current, ...parts.slice(0, -1)].join('/'),
          url: URL.createObjectURL(blobData),
        })
      } else if (item.children) {
        await getCurrentFolderFileList(item.children, fileList)
      }
    }
  }
  
  return (
    <Spin spinning={loading} delay={500} size='large' tip='解压中...'>
      <div className='flex items-center'>
        <div className='flex-shrink-0 w-30'>选择zip文件：</div>
        <Input type='file' accept='.zip' style={{ cursor: 'pointer' }} onChange={openFileFn} />
      </div>
      {showProgress && (
        <div className='mt-4'>
          <Progress percent={progress} />
        </div>
      )}
      {showEntries && (
        <div className='mt-4'>
          <div className='flex items-center'>
            <span className='font-bold'>目录：</span>
            {breadcrumbItems.map((item, index) => (
              <div key={item.filePath} onClick={() => doBreadcrumbClick(item, index)}>
                <Button type='text' size='small'>{item.name}</Button>
                {index < breadcrumbItems.length - 1 && <span className='mx-1'>/</span>}
              </div>
            ))}
          </div>
          <div className='my-4 flex items-center'>
            <Button onClick={downloadAllFile}>全部解压</Button>
            <Button className='ml-4' onClick={downloadCurrentFolder}>解压当前目录</Button>
          </div>
          <Table<FileTreeItem>
            rowKey={(record) => record.filePath}
            columns={[
              {
                title: '文件名',
                dataIndex: 'name',
                render: (name, record) => <div className='flex items-center'>{ record.type === 'file' ? <FileIcon fileName={name} /> : <FileIcon fileName={name} type="folder" /> }<span className='ml-1'>{name}</span></div>,
              },
              {
                title: '压缩大小',
                dataIndex: 'compressedSize',
                render: (compressedSize, record) => record.type === 'file' ? convertByteToReadableSize(compressedSize) : '-',
              },
              {
                title: '解压大小',
                dataIndex: 'uncompressedSize',
                render: (uncompressedSize, record) => record.type === 'file' ? convertByteToReadableSize(uncompressedSize) : '-',
              },
              {
                title: '最后修改时间',
                dataIndex: 'lastModDate',
                render: (lastModDate) => lastModDate ? dayjs(lastModDate).format('YYYY-MM-DD HH:mm:ss') : '-',
              },
              {
                title: '操作',
                dataIndex: 'action',
                render: (_, record) => record.type === 'file'
                  ? <Button type='text' size='small' onClick={(e) => {
                      e.stopPropagation()
                      downloadFile(record)
                    }}>下载</Button>
                  : null,
              }
            ]}
            dataSource={fileTree.map(x => ({ ...x, children: undefined }))}
            onRow={(record) => {
              return {
                onClick: () => {
                  if (record.type === 'file') {
                    downloadFile(record)
                  } else if (record.type === 'folder') {
                    doFolderClick(record)
                  }
                }
              };
            }}
            pagination={false} />
          <FilesDownloadDrawer
            targetType='list'
            title='下载文件/文件夹'
            open={drawerOpen}
            list={fileList}
            setOpen={setDrawerOpen}
            onSuccess={onSuccessFn}
            isSelectFolder={true}
          />
        </div>
      )}
    </Spin>
  )
}

export default FilesZipReader
