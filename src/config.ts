import type { ConfigType } from './configDefault'
import { configDefault } from './configDefault'

// 自定义配置
const config: ConfigType = {
}

export const themeList = ['system', 'light', 'dark'] as const
export type ThemeType = (typeof themeList)[number]
export const localeList = ['zh', 'en'] as const
export type LocaleType = (typeof localeList)[number]

export default {
  ...configDefault,
  ...config
}
