import { useEffect, useMemo } from 'react'
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
import { useUser } from './storeHooks/useUser'
import { useNavigateFn } from '@/Hooks/useNavigateFn'

function App() {
  const { theme } = useTheme()
  const locale = useLocale()
  const { pathname } = useLocation()
  const { isRouteLoading, changeRouteLoading } = useRouteLoading()
  const { changeHeadShow, changeMenuShow, changeMenuCollapsed, changeFooterShow, changeBreadcrumbShow, changeTabsShow } = useLayoutState()
  const { t } = useTranslation()
  const { addActivitys } = useActivitys()
  const { addLayoutTabs } = useLayoutTabs()
  const [searchParams] = useSearchParams()
  const { changeUserInfo } = useUser()
  const navigate = useNavigateFn()

  useEffect(() => {
    changeRouteLoading(false)
  }, [pathname, changeRouteLoading])

  const matchedRoute = useMemo(() => {
    return routersList.find(item => item.path === pathname)
  }, [pathname])

  useEffect(() => {
    if (config.isNeedLogin) {
      const userInfo = localStorage.getItem(config.loginLocalStorageKey)
      if (userInfo) {
        const userObj = JSON.parse(userInfo)
        changeUserInfo(userObj)
        if (matchedRoute?.meta?.permission && !userObj.permissionList?.includes(matchedRoute.meta.permission)) {
          navigate('/not-authorized')
        }
      }
    }
  }, [changeUserInfo, matchedRoute, navigate])

  useEffect(() => {
    if (matchedRoute) {
      document.title = `${t(`menu.${matchedRoute.meta.key}`, { defaultValue: matchedRoute.meta.label })} | ${config.logoText}`
    } else {
      document.title = config.logoText
    }
  }, [matchedRoute, t])

  useEffect(() => {
    if (!matchedRoute) return

    if (matchedRoute.meta?.activity && matchedRoute.element) {
      addActivitys(matchedRoute.path!)
    }

    if (config.layoutTabs) {
      if (!(matchedRoute.meta?.hideInTabs || !!searchParams.get('hideInTabs'))) {
        addLayoutTabs({ value: matchedRoute.path!, activeTab: matchedRoute.path! })
      }
    }
  }, [matchedRoute, addActivitys, addLayoutTabs, searchParams])

  useEffect(() => {
    if (matchedRoute) {
      changeHeadShow(!(matchedRoute.meta?.hideHead || !!searchParams.get('hideHead')))

      changeMenuShow(!(matchedRoute.meta?.hideMenu || !!searchParams.get('hideMenu')))

      changeFooterShow(!(matchedRoute.meta?.hideFooter || !!searchParams.get('hideFooter')))

      changeMenuCollapsed(!!(matchedRoute.meta?.collapseMenu || !!searchParams.get('collapseMenu')))

      if (config.breadcrumb) {
        changeBreadcrumbShow(!(matchedRoute.meta?.hideBreadcrumb || !!searchParams.get('hideBreadcrumb')))
      }

      if (config.layoutTabs) {
        changeTabsShow(!(matchedRoute.meta?.hideTabs || !!searchParams.get('hideTabs')))
      }
    }
  }, [matchedRoute, changeHeadShow, changeMenuShow, changeMenuCollapsed, changeFooterShow, changeBreadcrumbShow, changeTabsShow, searchParams])

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
