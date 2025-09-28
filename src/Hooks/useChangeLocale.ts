import { useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import config, { type LocaleType } from '../config'

export function useChangeLocale() {
  const { i18n } = useTranslation()

  const i18nNext = useMemo(() => i18n, [i18n])
  const changeLocale = useCallback((locale: LocaleType) => {
    localStorage.setItem(config.localeLocalStorageKey, locale)
    i18nNext.changeLanguage(locale)
  }, [i18nNext])

  return changeLocale
}
