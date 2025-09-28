import { useState } from 'react'
import zhCN from 'antd/es/locale/zh_CN'
import enUS from 'antd/es/locale/en_US'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider, App as AntdApp, theme as antdTheme, Layout } from 'antd'
import { useTheme } from './storeHooks/useTheme'
import { Outlet } from 'react-router'
import { ScrollRestoration } from 'react-router'
import cn from 'classnames'
import LayoutHead from './layout/LayoutHead'
import LayoutSider from './layout/LayoutSider'
import { useLocale } from './Hooks/useLocale'

const { Header, Footer, Sider, Content } = Layout

function App() {
  const { theme } = useTheme()
  const [collapsed, setCollapsed] = useState(false)
  const locale = useLocale()

  return (
    <StyleProvider layer>
      <ConfigProvider
        locale={locale === 'zh' ? zhCN : enUS}
        theme={{
          algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        }}
        >
        <AntdApp>
          <Layout className='h-screen'>
            <Header className={cn('border-b border-gray-200 dark:border-gray-700', theme === 'dark' ? 'bg-[#002140]' : 'bg-white')}>
              <LayoutHead />
            </Header>
            <Layout>
              <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme={theme} className={cn(theme === 'dark' ? 'bg-[#002140]' : 'bg-white')}>
                <LayoutSider />
              </Sider>
              <Layout className='border-l border-gray-200 dark:border-gray-700'>
                <Content className={cn('overflow-auto', theme === 'dark' ? 'bg-[#002140]' : 'bg-white')}>
                  <ScrollRestoration />
                  <Outlet />
                </Content>
                <Footer className={cn('border-t border-gray-200 dark:border-gray-700', theme === 'dark' ? 'bg-[#002140]' : 'bg-white')}>Footer</Footer>
              </Layout>
            </Layout>
          </Layout>
        </AntdApp>
      </ConfigProvider>
    </StyleProvider>
  )
}

export default App
