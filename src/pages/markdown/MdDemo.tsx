import { useState } from 'react'
import { Splitter, Checkbox } from 'antd'
import MdRender from '@/components/MdRender'
import mdPageMd from '@/md/mdPageMd.md?raw'
import mdPageMdEn from '@/md/en/mdPageMd.md?raw'
import { useLocale } from '@/Hooks/useLocale'
import { useUpdateEffect } from 'ahooks'
import CodeEditor from '@/components/CodeEditor'

function MdDemo() {
  const locale = useLocale()
  const [markdown, setMarkdown] = useState(locale === 'en' ? mdPageMdEn : mdPageMd)
  useUpdateEffect(() => {
    setMarkdown(locale === 'en' ? mdPageMdEn : mdPageMd)
  }, [locale, mdPageMd, mdPageMdEn])
  const [enableCopy, setEnableCopy] = useState(true)

  return (
    <Splitter className='h-[50vh]'>
      <Splitter.Panel collapsible>
        <div className='p-4'>
          <div className='flex items-center justify-between mb-3'>
            <div className='text-lg font-bold'>{ locale === 'en' ? 'Markdown Editor' : 'Markdown 编辑'}</div>
            <Checkbox checked={enableCopy} onChange={(e) => setEnableCopy(e.target.checked)}>{ locale === 'en' ? 'Enable Copy' : '启用复制'}</Checkbox>
          </div>
          <CodeEditor value={markdown} onChange={setMarkdown} className='border border-gray-300 dark:border-gray-700' />
        </div>
      </Splitter.Panel>
      <Splitter.Panel collapsible>
        <div className='p-4'>
          <div className='text-lg font-bold mb-3'>{ locale === 'en' ? 'Markdown Preview (Content Inside Border)' : 'Markdown 预览（边框内的内容）'}</div>
          <div className='border border-gray-300 dark:border-gray-700 rounded p-4'>
            <MdRender enableCopy={enableCopy}>{markdown}</MdRender>
          </div>
        </div>
      </Splitter.Panel>
    </Splitter>
  )
}

export default MdDemo
