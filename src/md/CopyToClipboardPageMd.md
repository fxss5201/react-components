# 复制到剪贴板

复制到剪贴板 用于将文本、代码或其他内容复制到剪贴板，以便在其他应用程序或文档中使用。

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
