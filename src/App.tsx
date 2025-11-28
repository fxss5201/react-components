import { useEffect } from 'react'
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
import i18n from '@/locales'
import { useTranslation } from 'react-i18next'
import { routersList } from './router'
import config from './config'

function App() {
  const { theme } = useTheme()
  const locale = useLocale()
  const { pathname } = useLocation()
  const { isRouteLoading, changeRouteLoading } = useRouteLoading()
  const { t } = useTranslation()

  useEffect(() => {
    changeRouteLoading(false)
  }, [pathname, changeRouteLoading])

  useEffect(() => {
    function updateTitle() {
      const matchedRoute = routersList.find(item => item.path === pathname)
      if (matchedRoute) {
        document.title = `${t(`menu.${matchedRoute.meta.key}`, { defaultValue: matchedRoute.meta.label })} | ${config.logoText}`
      } else {
        document.title = config.logoText
      }
    }
    i18n.on('languageChanged', updateTitle)
    return () => {
      i18n.off('languageChanged', updateTitle)
    }
  }, [pathname, t])

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
