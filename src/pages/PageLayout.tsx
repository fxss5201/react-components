import { useRef } from 'react'
import { Layout, FloatButton, Button, Tooltip } from 'antd'
import { useTheme } from '../storeHooks/useTheme'
import { Outlet, useLocation } from 'react-router'
import cn from 'classnames'
import LayoutHead from '../layout/LayoutHead'
import LayoutSider from '../layout/LayoutSider'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../ErrorFallback'
import { useLayoutState } from '../storeHooks/useLayoutState'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import LayoutBreadcrumb from '../layout/LayoutBreadcrumb'
import config from '../config'

const { Header, Footer, Sider, Content } = Layout

function App() {
  const { theme } = useTheme()
  const contentRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const { headShow, menuShow, menuCollapsed, footerShow, breadcrumbShow, changeMenuCollapsed } = useLayoutState()
  const { t } = useTranslation()

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout>
        {headShow && <Header className={cn('border-b border-gray-200 dark:border-gray-700 sticky top-0 z-1000', theme === 'dark' ? 'bg-[#002140]' : 'bg-white')}>
          <LayoutHead />
        </Header>}
        <Layout>
          {menuShow && <Sider collapsible collapsed={menuCollapsed} onCollapse={(value) => changeMenuCollapsed(value)}
            theme={theme}
            className={cn('sticky top-[64px] z-999 h-[calc(100vh-64px)]', theme === 'dark' ? 'bg-[#002140]' : 'bg-white')}
            trigger={
              <Tooltip title={menuCollapsed ? t('Expand Menu', { defaultValue: 'Expand Menu' }) : t('Collapse Menu', { defaultValue: 'Collapse Menu' })}>
                <Button type="text" icon={ menuCollapsed ? <RightOutlined /> : <LeftOutlined />} block />
              </Tooltip>
            }>
            <LayoutSider />
          </Sider>}
          <Layout className='border-l border-gray-200 dark:border-gray-700'>
            <Content className={cn(theme === 'dark' ? 'bg-[#002140]' : 'bg-white')} ref={contentRef}>
              { config.breadcrumb && breadcrumbShow && <LayoutBreadcrumb />}
              <ErrorBoundary key={location.pathname} FallbackComponent={ErrorFallback}>
                <Outlet />
              </ErrorBoundary>
              <FloatButton.BackTop target={() => contentRef.current!} />
            </Content>
            {footerShow && <Footer className={cn('border-t border-gray-200 dark:border-gray-700', theme === 'dark' ? 'bg-[#002140]' : 'bg-white')}>Footer</Footer>}
          </Layout>
        </Layout>
      </Layout>
    </ErrorBoundary>
  )
}

export default App
