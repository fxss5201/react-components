import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import i18n from './locales/index'
import { RouterProvider } from 'react-router/dom'
import router from './router'
import store from './store/index'
import { Provider } from 'react-redux'
import { setupProdMockServer } from './mockProdServer'
import TabCommunication from '@/utils/TabCommunication'
import { onlyChangeTheme } from './store/themeSlice'
import { type ThemeType, themeList, type LocaleType, localeList } from './config'
import { changeHtmlLang } from '@/utils/changeHtmlLang'

if (import.meta.env.PROD) setupProdMockServer()

TabCommunication.onMessage((data) => {
  console.log('TabCommunication', data)
  if (data.type === 'theme_channel') {
    if (themeList.includes(data.data)) {
      store.dispatch(onlyChangeTheme(data.data as ThemeType))
    }
  } else if (data.type === 'locales_channel') {
    if (localeList.includes(data.data)) {
      i18n.changeLanguage(data.data as LocaleType)
      changeHtmlLang(data.data as LocaleType)
    }
  }
})
window.addEventListener('unload', () => {
  TabCommunication.close()
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
