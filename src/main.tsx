import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import i18n from './locales/index'
import { RouterProvider } from 'react-router/dom'
import router from './router'
import store from './store/index'
import { Provider } from 'react-redux'
import { setupProdMockServer } from './mockProdServer'
import { themeComn } from './store/themeSlice'
import { onlyChangeTheme } from './store/themeSlice'
import { type ThemeType, themeList, type LocaleType, localeList } from './config'
import { localesComn } from './Hooks/useChangeLocale'
import { changeHtmlLang } from '@/utils/changeHtmlLang'

if (import.meta.env.PROD) setupProdMockServer()

themeComn.onMessage((data) => {
  if (themeList.includes(data)) {
    store.dispatch(onlyChangeTheme(data as ThemeType))
  }
})
localesComn.onMessage((data) => {
  if (localeList.includes(data)) {
    i18n.changeLanguage(data as LocaleType)
    changeHtmlLang(data as LocaleType)
  }
})
window.addEventListener('unload', () => {
  themeComn.close()
  localesComn.close()
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
