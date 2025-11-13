import { useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import config, { type LocaleType } from '@/config'

const htmlElement = document.documentElement

export function useChangeLocale() {
  const { i18n } = useTranslation()

  const i18nNext = useMemo(() => i18n, [i18n])
  const changeLocale = useCallback((locale: LocaleType) => {
    localStorage.setItem(config.localeLocalStorageKey, locale)
    i18nNext.changeLanguage(locale)
    htmlElement.setAttribute('lang', locale === 'zh' ? 'zh-CN' : 'en-US')
  }, [i18nNext])

  return changeLocale
}
