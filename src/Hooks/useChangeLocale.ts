import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import config, { type LocaleType } from '@/config'

const htmlElement = document.documentElement
const langMap = {
  zh: 'zh-CN',
  en: 'en-US'
}

export function useChangeLocale() {
  const { i18n } = useTranslation()

  const changeLocale = useCallback((locale: LocaleType) => {
    localStorage.setItem(config.localeLocalStorageKey, locale)
    i18n.changeLanguage(locale)
    htmlElement.setAttribute('lang', langMap[locale])
  }, [i18n])

  return changeLocale
}
