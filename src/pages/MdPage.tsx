import { useState } from 'react'
import { Splitter, Input } from 'antd'
import MdRender from '../components/MdRender'
import mdPageMd from '../md/mdPageMd.md?raw'
import mdPageMdEn from '../md/en/mdPageMd.md?raw'
import { useLocale } from '../Hooks/useLocale'
import { useUpdateEffect } from 'ahooks'

const { TextArea } = Input

function MdPage() {
  const locale = useLocale()
  const [markdown, setMarkdown] = useState(locale === 'en' ? mdPageMdEn : mdPageMd)
  useUpdateEffect(() => {
    console.log(locale)
    setMarkdown(locale === 'en' ? mdPageMdEn : mdPageMd)
  }, [locale])

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
            <MdRender md={markdown} />
          </div>
        </div>
      </Splitter.Panel>
    </Splitter>
  )
}

export default MdPage
