import { useRef, Activity } from 'react'
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
import LayoutFooter from '../layout/LayoutFooter'
import { useActivitys } from '../storeHooks/useActivitys'
import { routersList } from '../router'

const { Header, Footer, Sider, Content } = Layout

function PageLayout() {
  const { theme } = useTheme()
  const contentRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const { headShow, menuShow, menuCollapsed, footerShow, breadcrumbShow, changeMenuCollapsed } = useLayoutState()
  const { t } = useTranslation()
  const { activitys } = useActivitys()

  const bgClassName = theme === 'dark' ? 'bg-[#002140]' : 'bg-white'

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout className='min-h-screen'>
        <Activity mode={headShow ? 'visible' : 'hidden'}>
          <Header className={cn('border-b border-gray-200 dark:border-gray-700 sticky top-0 z-1000', bgClassName)}>
            <LayoutHead />
          </Header>
        </Activity>
        <Layout>
          <Activity mode={menuShow ? 'visible' : 'hidden'}>
            <Sider collapsible collapsed={menuCollapsed} onCollapse={(value) => changeMenuCollapsed(value)}
              theme={theme}
              className={cn('sticky z-999', bgClassName, headShow ? 'top-[64px] h-[calc(100vh-64px)]' : 'top-0 h-screen')}
              trigger={
                <Tooltip title={menuCollapsed ? t('Expand Menu', { defaultValue: 'Expand Menu' }) : t('Collapse Menu', { defaultValue: 'Collapse Menu' })}>
                  <Button type="text" icon={ menuCollapsed ? <RightOutlined /> : <LeftOutlined />} block />
                </Tooltip>
              }>
              <LayoutSider />
            </Sider>
          </Activity>
          <Layout className='border-l border-gray-200 dark:border-gray-700'>
            <Content className={cn(bgClassName)} ref={contentRef}>
              <div className='flex flex-col items-stretch h-full'>
                <Activity mode={config.breadcrumb && breadcrumbShow ? 'visible' : 'hidden'}>
                  <LayoutBreadcrumb className={cn('flex-shrink-0 sticky z-999', bgClassName, headShow ? 'top-[64px]' : 'top-0')} />
                </Activity>
                <div className='flex-auto'>
                  {!activitys.includes(pathname) && <ErrorBoundary key={pathname} FallbackComponent={ErrorFallback}>
                    <Outlet />
                  </ErrorBoundary>}
                  {activitys.map(item => (
                    <Activity key={item} mode={item === pathname ? 'visible' : 'hidden'}>
                      <ErrorBoundary key={item} FallbackComponent={ErrorFallback}>
                        {routersList.find(router => router.path === item)?.element}
                      </ErrorBoundary>
                    </Activity>
                  ))}
                </div>
              </div>
              <FloatButton.BackTop target={() => contentRef.current!} />
            </Content>
            <Activity mode={footerShow ? 'visible' : 'hidden'}>
              <Footer className={cn('border-t border-gray-200 dark:border-gray-700', bgClassName)}>
                {config.footer && <LayoutFooter />}
              </Footer>
            </Activity>
          </Layout>
        </Layout>
      </Layout>
    </ErrorBoundary>
  )
}

export default PageLayout
