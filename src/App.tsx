import { useEffect, useState } from 'react'
import zhCN from 'antd/es/locale/zh_CN'
import enUS from 'antd/es/locale/en_US'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider, App as AntdApp, theme as antdTheme } from 'antd'
import { useTheme } from './storeHooks/useTheme'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import { useLocale } from './Hooks/useLocale'
import LocaleContext from './context/LocaleContext'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ErrorFallback'
import { useRouteLoading } from './storeHooks/useRouteLoading'
import NProgressUI from './components/NProgressUI'
import { useLayoutState } from './storeHooks/useLayoutState'
import { useTranslation } from 'react-i18next'
import { routersList } from './router'
import config from './config'
import { useActivitys } from './storeHooks/useActivitys'

function App() {
  const { theme } = useTheme()
  const locale = useLocale()
  const { pathname } = useLocation()
  const { isRouteLoading, changeRouteLoading } = useRouteLoading()
  const { changeHeadShow, changeMenuShow, changeMenuCollapsed, changeFooterShow, changeBreadcrumbShow } = useLayoutState()
  const { t } = useTranslation()
  const [title, setTitle] = useState('')
  const { addActivitys } = useActivitys()

  useEffect(() => {
    changeRouteLoading(false)
  }, [pathname])

  useEffect(() => {
      const location = routersList.find(item => item.path === pathname)
      if (location) {
        // @ts-ignore
        setTitle(`${t(`Menu.${location.meta.key}`, { defaultValue: location.meta.label })} | react-components`)

        if (location.meta?.activity) {
          addActivitys(location.path!)
        }

        if (location.meta?.hideHead) {
          changeHeadShow(false)
        } else {
          changeHeadShow(true)
        }
  
        if (location.meta?.hideMenu) {
          changeMenuShow(false)
        } else {
          changeMenuShow(true)
        }
  
        if (location.meta?.collapseMenu) {
          changeMenuCollapsed(true)
        } else {
          changeMenuCollapsed(false)
        }
  
        if (location.meta?.hideFooter) {
          changeFooterShow(false)
        } else {
          changeFooterShow(true)
        }

        if (config.breadcrumb) {
          if (location.meta?.hideBreadcrumb) {
            changeBreadcrumbShow(false)
          } else {
            changeBreadcrumbShow(true)
          }
        }
      }
    }, [pathname, t])

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <title>{title}</title>
      <StyleProvider layer>
        <ConfigProvider
          locale={locale === 'zh' ? zhCN : enUS}
          theme={{
            algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
          }}
          >
          <LocaleContext value={locale}>
            <AntdApp>
              <NProgressUI isAnimating={isRouteLoading} />
              <ScrollRestoration />
              <Outlet />
            </AntdApp>
          </LocaleContext>
        </ConfigProvider>
      </StyleProvider>
    </ErrorBoundary>
  )
}

export default App
