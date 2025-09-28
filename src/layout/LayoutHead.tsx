import { Flex, Popover } from 'antd'
import { GithubOutlined, SyncOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons'
import { useRouter } from '../Hooks/useRouter'
import { type ThemeType } from '../store/themeSlice'
import { useTheme } from '../storeHooks/useTheme'
import cn from 'classnames'
import config from '../config'

type ThemeOption = {
  type: ThemeType
  label: string
  icon: React.ReactNode
}
const themeOptions: ThemeOption[] = [
  ...(config.autoChangeTheme ? [{ type: 'system', label: '跟随系统', icon: <SyncOutlined /> } as ThemeOption] : []) ,
  { type: 'light', label: '亮色模式', icon: <SunOutlined /> },
  { type: 'dark', label: '暗黑模式', icon: <MoonOutlined /> },
]

function LayoutHead() {
  const router = useRouter()
  const { storeTheme, changeTheme } = useTheme()

  return (
    <Flex justify='space-between'>
      <div className='text-[24px] cursor-pointer' onClick={() => router('')}>react-components</div>
      <div className='flex items-center leading-[24px]'>
        {config.theme && (
          <Popover content={
            themeOptions.map(item => (
              <div className={cn('cursor-pointer text-[14px] leading-[32px] px-2 hover:bg-blue-100 dark:hover:bg-gray-600 rounded-sm', { 'text-blue-600': storeTheme === item.type })}
                key={item.type} onClick={() => changeTheme(item.type)}>
                {item.icon}
                <span className='ml-2'>{item.label}</span>
              </div>
            ))
          } classNames={{
            body: 'p-2'
          }}>
            <div className='text-[24px] cursor-pointer hover:text-blue-600'>
              {
                storeTheme === 'dark' ? <MoonOutlined /> : storeTheme === 'light' ? <SunOutlined /> : <SyncOutlined />
              }
            </div>
          </Popover>
        )}
        {config.githubLink && (
          <a href={config.githubLink} target='_blank' rel='noopener noreferrer'
            className='text-[24px] ml-8 text-inherit hover:text-blue-600'>
            <GithubOutlined />
          </a>
        )}
      </div>
    </Flex>
  )
}

export default LayoutHead
