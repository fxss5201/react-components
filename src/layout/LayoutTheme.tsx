import { Popover } from 'antd'
import { SyncOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons'
import { useTheme } from '../storeHooks/useTheme'
import cn from 'classnames'
import config, { type ThemeType } from '../config'

function LayoutTheme({ className }: { className?: string }) {
  const { storeTheme, changeTheme } = useTheme()

  return config.theme && (
    <Popover content={
      [
        ...(config.autoChangeTheme ? [{ type: 'system', label: '跟随系统', icon: <SyncOutlined /> }] : []) ,
        { type: 'light', label: '亮色模式', icon: <SunOutlined /> },
        { type: 'dark', label: '暗黑模式', icon: <MoonOutlined /> },
      ].map(item => (
        <div className={cn('cursor-pointer text-[14px] leading-[32px] px-2 hover:bg-blue-100 dark:hover:bg-gray-600 rounded-sm', { 'text-[#1677ff]': storeTheme === item.type })}
          key={item.type} onClick={() => changeTheme(item.type as ThemeType)}>
          {item.icon}
          <span className='ml-2'>{item.label}</span>
        </div>
      ))
    } classNames={{
      body: 'p-2'
    }}>
      <div className={cn('text-[24px] cursor-pointer hover:text-[#1677ff]', className)}>
        {
          storeTheme === 'dark' ? <MoonOutlined /> : storeTheme === 'light' ? <SunOutlined /> : <SyncOutlined />
        }
      </div>
    </Popover>
  )
}

export default LayoutTheme
