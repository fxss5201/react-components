import { useState } from 'react'
import FilesDropSelect from '@/components/FilesDropSelect'
import type { FileTreeItem } from '@/types/files'
import JsonView from '@/components/JsonView'
import { Button, Form, Input } from 'antd'
import { ZipWriter, BlobWriter, BlobReader } from '@zip.js/zip.js'
import { aDownloadBlob } from '@/utils'

function FilesZipWriter() {
  const [form] = Form.useForm()
  const [listData, setListData] = useState<FileTreeItem[]>([])
  const [loading, setLoading] = useState(false)

  function onSelect(fileList: FileTreeItem[]) {
    setListData(fileList)
  }

  async function onZip(values: { fileName: string }) {
    const { fileName } = values
    const fileNameWithExt = fileName + '.zip'

    setLoading(true)
    const zipWriter = new ZipWriter(new BlobWriter('application/zip'), { bufferedWrite: true })
    for (const item of listData) {
      await zipWriter.add(item.filePath, new BlobReader(item.file as Blob))
    }
    const zipBlob = await zipWriter.close()
    aDownloadBlob(zipBlob, fileNameWithExt)
    setLoading(false)
  }

  return (
    <>
      <FilesDropSelect targetType='list' isIgnoreFolder={true} onSelect={onSelect}></FilesDropSelect>
      <JsonView className='mt-3!' jsonClassName='max-h-50 overflow-auto'>{listData}</JsonView>
      <div className='mt-3'>
        <Form form={form} name='zip-form' layout='inline' initialValues={{ fileName: 'zipFiles' }} onFinish={onZip}>
          <Form.Item
            name='fileName'
          >
            <Input suffix={<span>.zip</span>} placeholder='请输入文件名' allowClear />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button htmlType='submit' type='primary' disabled={!listData.length || form.getFieldValue('fileName') === ''} loading={loading}>压缩</Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default FilesZipWriter
