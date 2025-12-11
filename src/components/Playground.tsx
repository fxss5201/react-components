import { Activity, useState } from 'react'
import MdRender from './MdRender'
import { CodeOutlined, UpOutlined } from '@ant-design/icons'
import { Button, Divider } from 'antd'
import { useTranslation } from 'react-i18next'
import { theme as antdTheme } from 'antd'

export type PlaygroundProps = {
  code: string
  type?: string
  title?: string
  description?: string
  children: React.ReactNode
}

function Playground({ code, type = 'tsx', title, description, children }: PlaygroundProps) {
  const { token } = antdTheme.useToken()
  const { t } = useTranslation()
  
  const displayCode = t('components.Playground.Show Code', { defaultValue: '显示代码' })
  const collapseCode = t('components.Playground.Collapse Code', { defaultValue: '收起代码' })
  
  const [codeShow, setCodeShow] = useState(false)
  function toggleCodeShow() {
    setCodeShow(!codeShow)
  }

  return (
    <div className='w-full border rounded-md'
      style={{ borderColor: token.colorBorder }}>
      <div className='px-4 pt-4'>
        {children}
      </div>
      {title && <Divider titlePlacement='left'>
        <MdRender>{title}</MdRender>
      </Divider>}
      {description && <div className='px-4 pb-4'>
        <MdRender>{description}</MdRender>
      </div>}
      <div className='h-10 border-t flex items-center justify-center'
        style={{ borderColor: token.colorBorder }}>
        <Button type='text' onClick={toggleCodeShow} icon={<CodeOutlined />}>
          {codeShow ? collapseCode : displayCode}
        </Button>
      </div>
      <Activity mode={codeShow ? 'visible' : 'hidden'}>
        <MdRender className='border-t pre-no-border-radius'
          style={{ borderColor: token.colorBorder }}>
          {`\`\`\` ${type}\n${code}\n\`\`\``}
        </MdRender>
        <div className='h-10 flex items-center justify-center border-t sticky left-0 right-0 bottom-0 z-10 rounded-b-md'
          style={{
            borderColor: token.colorBorder,
            backgroundColor: token.colorBgContainer
          }}>
          <Button type='text' onClick={toggleCodeShow} icon={<UpOutlined />}>
            {codeShow ? collapseCode : displayCode}
          </Button>
        </div>
      </Activity>
    </div>
  )
}

export default Playground
