import { useTranslation } from 'react-i18next'
import { type LocaleType } from '../config'

export function useLocale() {
  const { i18n } = useTranslation()

  return i18n.language as LocaleType
}
