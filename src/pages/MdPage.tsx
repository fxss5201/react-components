import { useState } from 'react'
import { Splitter, Input } from 'antd'
import MdRender from '../components/MdRender'
import mdPageMd from '../md/mdPageMd.md?raw'

const { TextArea } = Input

function MdPage() {
  const [markdown, setMarkdown] = useState(mdPageMd)

  return (
    <Splitter className='h-full'>
      <Splitter.Panel collapsible>
        <div className='p-4'>
          <div className='text-lg font-bold mb-3'>Markdown 编辑</div>
          <TextArea value={markdown} onChange={(e) => setMarkdown(e.target.value)} rows={15} />
        </div>
      </Splitter.Panel>
      <Splitter.Panel collapsible>
        <div className='p-4'>
          <div className='text-lg font-bold mb-3'>Markdown 预览（边框内的内容）</div>
          <div className='border border-gray-300 dark:border-gray-700 rounded p-4'>
            <MdRender markdown={markdown} />
          </div>
        </div>
      </Splitter.Panel>
    </Splitter>
  )
}

export default MdPage
