export type ThemeType = 'system' | 'light' | 'dark'
export type LocaleType = 'zh' | 'en'

const config = {
  // 是否开启主题切换功能，默认开启
  theme: true,
  // 默认主题，如果未开启主题切换功能，则直接显示该主题
  defaultTheme: 'dark' as ThemeType,
  // 系统主题切换时，是否自动切换主题
  autoChangeTheme: true,
  // 主题保存在 localStorage 中的 key，防止被其他覆盖
  themeLocalStorageKey: 'theme',

  // 是否开启多语言功能，默认开启
  locales: true,
  // 默认语言
  defaultLocale: 'zh' as LocaleType,
  // 语言保存在 localStorage 中的 key，防止被其他覆盖
  localeLocalStorageKey: 'locale',

  // 顶部导航栏github链接
  githubLink: 'https://github.com/fxss5201/react-components',
}

export default config
