import { useState } from 'react'
import { Input } from 'antd'
import CopyToClipboard from '../../components/CopyToClipboard'

const { TextArea } = Input

function CopyToClipboardDemo() {
  const [content, setContent] = useState('复制到剪贴板')
  
  return (
    <div className='relative'>
      <div className='absolute top-0 right-0 z-10'>
        <CopyToClipboard text={content} />
      </div>
      <TextArea rows={3} value={content} onChange={e => setContent(e.target.value)} placeholder='请输入要复制的内容' />
    </div>
  )
}

export default CopyToClipboardDemo
