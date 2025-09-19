import zhCN from 'antd/es/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider, App as AntdApp, theme as antdTheme, Layout, Flex, Popover } from 'antd'
import { GithubOutlined, SyncOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons'
import { useTheme } from './storeHooks/useTheme'
import { Outlet } from 'react-router'
import { type ThemeType } from './store/themeSlice'

const { Header, Footer, Sider, Content } = Layout

function App() {
  const { theme, storeTheme, changeTheme } = useTheme()
  
  type ThemeOption = {
    type: ThemeType
    label: string
    icon: React.ReactNode
  }
  const themeOptions: ThemeOption[] = [
    { type: 'system', label: '跟随系统', icon: <SyncOutlined /> },
    { type: 'light', label: '亮色模式', icon: <SunOutlined /> },
    { type: 'dark', label: '暗黑模式', icon: <MoonOutlined /> },
  ]

  return (
    <StyleProvider layer>
      <ConfigProvider
        locale={zhCN}
        theme={{
          algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        }}
        >
        <AntdApp>
          <Layout>
            <Header className={`${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
              <Flex justify='space-between'>
                <div className='text-[24px]'>react-components</div>
                <div className='flex items-center leading-[24px]'>
                  <Popover content={
                    themeOptions.map(item => (
                      <div className={`cursor-pointer text-[14px] leading-[32px] px-2 hover:bg-blue-100 dark:hover:bg-gray-600 rounded-sm ${storeTheme === item.type ? 'text-blue-600' : ''}`} key={item.type} onClick={() => changeTheme(item.type)}>
                        {item.icon}
                        <span className='ml-2'>{item.label}</span>
                      </div>
                    ))
                  } classNames={{
                    body: 'p-2'
                  }}>
                    <div className='text-[24px] cursor-pointer'>
                      {
                        storeTheme === 'system' ? <SyncOutlined /> : storeTheme === 'dark' ? <MoonOutlined /> : <SunOutlined />
                      }
                    </div>
                  </Popover>
                  <a href='https://github.com/fxss5201/react-components' target='_blank' rel='noopener noreferrer'
                    className='text-[24px] ml-8'>
                    <GithubOutlined />
                  </a>
                </div>
              </Flex>
            </Header>
            <Layout>
              <Sider className='bg-white' width="25%">
                Sider
              </Sider>
              <Layout>
                <Content>
                  <Outlet />
                </Content>
                <Footer>Footer</Footer>
              </Layout>
            </Layout>
          </Layout>
        </AntdApp>
      </ConfigProvider>
    </StyleProvider>
  )
}

export default App
