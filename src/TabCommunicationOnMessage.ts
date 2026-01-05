import store from './store/index'
import i18n from './locales/index'
import TabCommunication from '@/utils/TabCommunication'
import { onlyChangeTheme } from './store/themeSlice'
import { onlyChangeSystemSet } from './store/systemSetSlice'
import { type ThemeType, themeList, type LocaleType, localeList } from './config'
import { changeHtmlLang } from '@/utils/changeHtmlLang'
import { onlyLoginFn, onlyLogoutFn } from './store/index'

TabCommunication.onMessage((data) => {
  if (data.type === 'theme_channel') {
    if (themeList.includes(data.data)) {
      store.dispatch(onlyChangeTheme(data.data as ThemeType))
    }
  } else if (data.type === 'locales_channel') {
    if (localeList.includes(data.data)) {
      i18n.changeLanguage(data.data as LocaleType)
      changeHtmlLang(data.data as LocaleType)
    }
  } else if (data.type === 'system_set_channel') {
    store.dispatch(onlyChangeSystemSet(data.data))
  } else if (data.type === 'user_channel') {
    if (data.data.id) {
      onlyLoginFn(data.data)
    } else {
      onlyLogoutFn()
    }
  }
})
window.addEventListener('unload', () => {
  TabCommunication.close()
})
