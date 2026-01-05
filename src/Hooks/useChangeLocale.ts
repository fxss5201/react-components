import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import config, { type LocaleType } from '@/config'
import TabCommunication from '@/utils/TabCommunication'
import { changeHtmlLang } from '@/utils/changeHtmlLang'

export function useChangeLocale() {
  const { i18n } = useTranslation()

  const changeLocale = useCallback((locale: LocaleType) => {
    localStorage.setItem(config.localeLocalStorageKey, locale)
    i18n.changeLanguage(locale)
    changeHtmlLang(locale)
    TabCommunication.postMessage({
      type: 'locales_channel',
      data: locale
    })
  }, [i18n])

  return changeLocale
}
