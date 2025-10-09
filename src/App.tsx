import { useRef, useState } from 'react'
import zhCN from 'antd/es/locale/zh_CN'
import enUS from 'antd/es/locale/en_US'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider, App as AntdApp, theme as antdTheme, Layout, FloatButton } from 'antd'
import { useTheme } from './storeHooks/useTheme'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import cn from 'classnames'
import LayoutHead from './layout/LayoutHead'
import LayoutSider from './layout/LayoutSider'
import { useLocale } from './Hooks/useLocale'
import LocaleContext from './context/LocaleContext'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ErrorFallback'

const { Header, Footer, Sider, Content } = Layout

function App() {
  const { theme } = useTheme()
  const [collapsed, setCollapsed] = useState(false)
  const locale = useLocale()
  const contentRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <StyleProvider layer>
        <ConfigProvider
          locale={locale === 'zh' ? zhCN : enUS}
          theme={{
            algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
          }}
          >
          <LocaleContext value={locale}>
            <AntdApp>
              <Layout>
                <Header className={cn('border-b border-gray-200 dark:border-gray-700 sticky top-0 z-1000', theme === 'dark' ? 'bg-[#002140]' : 'bg-white')}>
                  <LayoutHead />
                </Header>
                <Layout>
                  <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme={theme} className={cn('sticky top-[64px] z-999 h-[calc(100vh-64px)]', theme === 'dark' ? 'bg-[#002140]' : 'bg-white')}>
                    <LayoutSider />
                  </Sider>
                  <Layout className='border-l border-gray-200 dark:border-gray-700'>
                    <Content className={cn(theme === 'dark' ? 'bg-[#002140]' : 'bg-white')} ref={contentRef}>
                      <ScrollRestoration />
                      <ErrorBoundary key={location.pathname} FallbackComponent={ErrorFallback}>
                        <Outlet />
                      </ErrorBoundary>
                      <FloatButton.BackTop target={() => contentRef.current!} />
                    </Content>
                    <Footer className={cn('border-t border-gray-200 dark:border-gray-700', theme === 'dark' ? 'bg-[#002140]' : 'bg-white')}>Footer</Footer>
                  </Layout>
                </Layout>
              </Layout>
            </AntdApp>
          </LocaleContext>
        </ConfigProvider>
      </StyleProvider>
    </ErrorBoundary>
  )
}

export default App
