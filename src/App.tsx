import { useEffect, useState } from 'react'
import zhCN from 'antd/es/locale/zh_CN'
import enUS from 'antd/es/locale/en_US'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider, App as AntdApp, theme as antdTheme } from 'antd'
import { useTheme } from './storeHooks/useTheme'
import { Outlet, ScrollRestoration, useLocation, useSearchParams } from 'react-router'
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
import { useLayoutTabs } from './storeHooks/useLayoutTabs'

function App() {
  const { theme } = useTheme()
  const locale = useLocale()
  const { pathname } = useLocation()
  const { isRouteLoading, changeRouteLoading } = useRouteLoading()
  const { changeHeadShow, changeMenuShow, changeMenuCollapsed, changeFooterShow, changeBreadcrumbShow, changeTabsShow } = useLayoutState()
  const { t } = useTranslation()
  const [title, setTitle] = useState('')
  const { addActivitys } = useActivitys()
  const { addLayoutTabs } = useLayoutTabs()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    changeRouteLoading(false)
  }, [pathname])

  useEffect(() => {
    const location = routersList.find(item => item.path === pathname)
    if (location) {
      setTitle(`${t(`Menu.${location.meta.key}`, { defaultValue: location.meta.label })} | ${config.logoText}`)

      if (location.meta?.activity && location.element) {
        addActivitys(location.path!)
      }

      if (location.meta?.hideHead || !!searchParams.get('hideHead')) {
        changeHeadShow(false)
      } else {
        changeHeadShow(true)
      }

      if (location.meta?.hideMenu || !!searchParams.get('hideMenu')) {
        changeMenuShow(false)
      } else {
        changeMenuShow(true)
      }

      if (location.meta?.collapseMenu || !!searchParams.get('collapseMenu')) {
        changeMenuCollapsed(true)
      } else {
        changeMenuCollapsed(false)
      }

      if (location.meta?.hideFooter || !!searchParams.get('hideFooter')) {
        changeFooterShow(false)
      } else {
        changeFooterShow(true)
      }

      if (config.breadcrumb) {
        if (location.meta?.hideBreadcrumb || !!searchParams.get('hideBreadcrumb')) {
          changeBreadcrumbShow(false)
        } else {
          changeBreadcrumbShow(true)
        }
      }

      if (config.layoutTabs) {
        addLayoutTabs({ value: location.path!, activeTab: location.path! })
        if (location.meta?.hideTabs || !!searchParams.get('hideTabs')) {
          changeTabsShow(false)
        } else {
          changeTabsShow(true)
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
              <ScrollRestoration getKey={location => location.pathname} />
              <Outlet />
            </AntdApp>
          </LocaleContext>
        </ConfigProvider>
      </StyleProvider>
    </ErrorBoundary>
  )
}

export default App
