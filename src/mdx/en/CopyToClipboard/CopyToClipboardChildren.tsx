import { useState } from 'react'
import { Input } from 'antd'
import CopyToClipboard from '@/components/CopyToClipboard'

const { TextArea } = Input

function CopyToClipboardDemo() {
  const [content, setContent] = useState('Copy to Clipboard')
  
  function childrenFn (props: { copied: boolean, copyToClipboard: () => void }) {
    const { copied, copyToClipboard } = props
    return (
      <div className='px-2 py-1 bg-gray-200 rounded cursor-pointer' onClick={() => {
        if (!copied) {
          copyToClipboard()
        }
      }}>
        {copied ? 'Copied' : 'Copy'}
      </div>
    )
  }

  return (
    <div className='relative'>
      <div className='absolute top-[1px] right-[1px] z-10'>
        <CopyToClipboard text={content} children={childrenFn} />
      </div>
      <TextArea rows={3} value={content} onChange={e => setContent(e.target.value)} placeholder='Enter content to copy to clipboard' />
    </div>
  )
}

export default CopyToClipboardDemo
