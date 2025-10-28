import { Activity, useState } from 'react'
import MdRender from './MdRender'
import { CodeOutlined, UpOutlined } from '@ant-design/icons'
import { Button, Divider } from 'antd'

export type PlaygroundProps = {
  code: string
  type?: string
  title?: string
  description?: string
  children: React.ReactNode
}

function Playground({ code, type = 'tsx', title, description, children }: PlaygroundProps) {
  const [codeShow, setCodeShow] = useState(false)
  function toggleCodeShow() {
    setCodeShow(!codeShow)
  }

  return (
    <div className='w-full border border-gray-300 dark:border-gray-600 rounded-md'>
      <div className='p-4'>
        {children}
      </div>
      {title && <Divider orientation='left'>{title}</Divider>}
      {description && <div className='px-4 pb-4'>{description}</div>}
      <div className='h-10 border-t border-gray-300 dark:border-gray-600 flex items-center justify-center'>
        <Button type='text' onClick={toggleCodeShow} icon={<CodeOutlined />}>
          {codeShow ? '收起代码' : '显示代码'}
        </Button>
      </div>
      <Activity mode={codeShow ? 'visible' : 'hidden'}>
        <MdRender md={`\`\`\` ${type}\n${code}\n\`\`\``} className='border-t border-gray-300 dark:border-gray-600' />
        <div className='h-10 flex items-center justify-center border-t border-gray-300 dark:border-gray-600 sticky left-0 right-0 bottom-0 z-10 bg-white dark:bg-gray-800 rounded-b-md'>
          <Button type='text' onClick={toggleCodeShow} icon={<UpOutlined />}>
            {codeShow ? '收起代码' : '显示代码'}
          </Button>
        </div>
      </Activity>
    </div>
  )
}

export default Playground
