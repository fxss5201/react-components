import { Activity, useState, useContext } from 'react'
import MdRender from './MdRender'
import { CodeOutlined, UpOutlined } from '@ant-design/icons'
import { Button, Divider } from 'antd'
import LocaleContext from '../context/LocaleContext'
import { type LocaleType } from '../config'

export type PlaygroundProps = {
  code: string
  type?: string
  title?: string
  description?: string
  children: React.ReactNode,
  locale?: LocaleType
}

function Playground({ code, type = 'tsx', title, description, children, locale }: PlaygroundProps) {
  const localeContext = useContext(LocaleContext)
  const currentLocale = locale || localeContext || 'zh'
  const displayCode = currentLocale === 'zh' ? '显示代码' : 'Show Code'
  const collapseCode = currentLocale === 'zh' ? '收起代码' : 'Collapse Code'
  
  const [codeShow, setCodeShow] = useState(false)
  function toggleCodeShow() {
    setCodeShow(!codeShow)
  }

  return (
    <div className='w-full border border-gray-300 dark:border-gray-600 rounded-md'>
      <div className='px-4 pt-4'>
        {children}
      </div>
      {title && <Divider orientation='left'>
        <MdRender>{title}</MdRender>
      </Divider>}
      {description && <div className='px-4 pb-4'>
        <MdRender>{description}</MdRender>
      </div>}
      <div className='h-10 border-t border-gray-300 dark:border-gray-600 flex items-center justify-center'>
        <Button type='text' onClick={toggleCodeShow} icon={<CodeOutlined />}>
          {codeShow ? collapseCode : displayCode}
        </Button>
      </div>
      <Activity mode={codeShow ? 'visible' : 'hidden'}>
        <MdRender className='border-t border-gray-300 dark:border-gray-600 pre-no-border-radius'>
          {`\`\`\` ${type}\n${code}\n\`\`\``}
        </MdRender>
        <div className='h-10 flex items-center justify-center border-t border-gray-300 dark:border-gray-600 sticky left-0 right-0 bottom-0 z-10 bg-white dark:bg-gray-800 rounded-b-md'>
          <Button type='text' onClick={toggleCodeShow} icon={<UpOutlined />}>
            {codeShow ? collapseCode : displayCode}
          </Button>
        </div>
      </Activity>
    </div>
  )
}

export default Playground
