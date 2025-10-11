import { useState } from 'react'
import MdRender from '../components/MdRender'
import { useLocale } from '../Hooks/useLocale'
import CopyToClipboard from '../components/CopyToClipboard'
import copyToClipboardMd from '../md/CopyToClipboardPageMd.md?raw'
import copyToClipboardMdEn from '../md/en/CopyToClipboardPageMd.md?raw'
import { Input } from 'antd'

const { TextArea } = Input

function CopyToClipboardPage() {
  const locale = useLocale()
  const md = locale === 'en' ? copyToClipboardMdEn : copyToClipboardMd
  const [content, setContent] = useState('Copy to Clipboard')
  
  return (
    <div className='px-4 markdown-body'>
      <MdRender md={md} />
      <div className='mt-4'>
        <div className='relative'>
          <div className='absolute top-0 right-0 z-10'>
            <CopyToClipboard text={content} />
          </div>
          <TextArea rows={10} value={content} onChange={e => setContent(e.target.value)} />
        </div>
      </div>
    </div>
  )
}

export default CopyToClipboardPage
