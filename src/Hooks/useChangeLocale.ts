import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import config, { type LocaleType } from '@/config'
import { CrossTabCommunication } from '@/utils/CrossTabCommunication'
import { changeHtmlLang } from '@/utils/changeHtmlLang'

const localesComn = new CrossTabCommunication('locales_channel')

export function useChangeLocale() {
  const { i18n } = useTranslation()

  const changeLocale = useCallback((locale: LocaleType) => {
    localStorage.setItem(config.localeLocalStorageKey, locale)
    i18n.changeLanguage(locale)
    changeHtmlLang(locale)
    localesComn.postMessage(locale)
  }, [i18n])

  return changeLocale
}

export {
  localesComn
}
