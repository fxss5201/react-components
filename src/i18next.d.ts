import { type LangResourcesType } from './locales/index'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation',
    resources: LangResourcesType
  }
}
