import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import zh from './zh.json'
import config, { type LocaleType } from '../config'

export const resources = { 
  en: {
    translation: en
  },
  zh: {
    translation: zh
  }
} as const

export type LangResourcesType = (typeof resources)[keyof typeof resources]

let initLocale = config.defaultLocale
const htmlElement = document.documentElement
if (config.locales) {
  initLocale = (localStorage.getItem(config.localeLocalStorageKey) as LocaleType) || config.defaultLocale
  htmlElement.setAttribute('lang', initLocale === 'zh' ? 'zh-CN' : 'en-US')
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initLocale,
    fallbackLng: 'zh',

    interpolation: {
      escapeValue: false
    }
  })

// 在非组件中获取多语言值
// console.log(i18n.t('Menu.files-upload'))

export default i18n
