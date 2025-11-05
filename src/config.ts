// 自定义配置
const config = {
} as ConfigType

// 默认配置，可以用自定义配置覆盖（仅浅层覆盖）
const defaultonfig = {
  // 是否需要登录才能访问，默认不需要
  isNeedLogin: false,
  // 登录状态保存在 localStorage 中的 key，防止被其他覆盖
  loginLocalStorageKey: 'react-components-login',

  // logoText 配置，在 logoText 和 logoImg 都配置时，页头左侧 logoImg 优先级更高
  logoText: 'react-components',
  // logoImg 配置
  logoImg: '/react-components/vite.svg',
  // 是否开启主题切换功能，默认开启
  theme: true,
  // 默认主题，如果未开启主题切换功能，则直接显示该主题
  defaultTheme: 'dark',
  // 系统主题切换时，是否自动切换主题
  autoChangeTheme: true,
  // 主题保存在 localStorage 中的 key，防止被其他覆盖
  themeLocalStorageKey: 'react-components-theme',

  // 是否开启多语言功能，默认开启
  locales: true,
  // 默认语言
  defaultLocale: 'zh',
  // 语言保存在 localStorage 中的 key，防止被其他覆盖
  localeLocalStorageKey: 'react-components-locale',

  // 顶部导航栏github链接
  githubLink: 'https://github.com/fxss5201/react-components',

  // 是否开启面包屑导航
  breadcrumb: true,

  // 是否开启 tabs
  layoutTabs: true,

  // 页脚配置
  footer: {
    // links 数组中每个对象的 key 用于唯一标识，防止重复，并且作为多语言配置的 key，label 用于多语言的默认显示或标题，link 用于链接跳转，支持站内和外部链接区分
    links: [
      {
        key: 'footer.blog',
        label: '个人博客',
        link: 'https://blog.fxss.work/'
      },
      {
        key: 'footer.author',
        label: '作者github',
        link: 'https://github.com/fxss5201'
      },
      {
        key: 'footer.md',
        label: 'Markdown',
        link: 'md-page'
      }
    ],
    // recordInfo 备案信息配置
    recordInfo: {
      // 备案号
      recordNumber: '备案号',
      // 备案链接
      recordLink: 'https://beian.miit.gov.cn/'
    }
  }
} as DefaultConfigType

export type ThemeType = 'system' | 'light' | 'dark'
export type LocaleType = 'zh' | 'en'
export type DefaultConfigType = {
  isNeedLogin: boolean
  loginLocalStorageKey: string
  logoText: string
  logoImg: string
  theme: boolean
  defaultTheme: ThemeType
  autoChangeTheme: boolean
  themeLocalStorageKey: string
  locales: boolean
  defaultLocale: LocaleType
  localeLocalStorageKey: string
  githubLink: string
  breadcrumb: boolean
  layoutTabs: boolean
  footer: null | {
    links: Array<{
      key?: string
      label: string
      link: string
    }>
    recordInfo: {
      recordNumber: string
      recordLink: string
    }
  }
}
export type ConfigType = Partial<DefaultConfigType>

export default {
  ...defaultonfig,
  ...config
}
