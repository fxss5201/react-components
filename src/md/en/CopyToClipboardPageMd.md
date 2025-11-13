# Copy to Clipboard

Copy to clipboard is used to copy text, code, or other content to the clipboard for use in other applications or documents.

```tsx
import { useState } from 'react'
import { Input } from 'antd'
import CopyToClipboard from '@/components/CopyToClipboard'

const { TextArea } = Input

function CopyToClipboardPage() {
  const [content, setContent] = useState('')
  
  return (
    <div className='relative'>
      <div className='absolute top-0 right-0 z-10'>
        <CopyToClipboard text={content} />
      </div>
      <TextArea rows={10} value={content} onChange={e => setContent(e.target.value)} />
    </div>
  )
}
```
