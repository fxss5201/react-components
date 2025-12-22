import type { ThemeType, LocaleType } from './config'
import type { GetProps } from 'antd'
import { Watermark } from 'antd'

export type WatermarkProps = GetProps<typeof Watermark>

export const configDefault = {
  isNeedLogin: false,

  loginLocalStorageKey: 'react-components-login',
  whiteList: ['/login', '/reset-password'],

  logoText: 'react-components',
  logoImg: '/react-components/vite.svg',
  theme: true,
  defaultTheme: 'system',
  autoChangeTheme: true,
  themeLocalStorageKey: 'react-components-theme',

  locales: true,
  defaultLocale: 'zh',
  localeLocalStorageKey: 'react-components-locale',

  githubLink: 'https://github.com/fxss5201/react-components',

  breadcrumb: true,

  layoutTabs: true,

  footer: {
    links: [
      {
        key: 'system.footer.blog',
        label: '个人博客',
        link: 'https://blog.fxss.work/'
      },
      {
        key: 'system.footer.author',
        label: '作者github',
        link: 'https://github.com/fxss5201'
      },
      {
        key: 'system.footer.md',
        label: 'Markdown',
        link: 'markdown/md-demo-page'
      }
    ],
    // recordInfo 备案信息配置
    recordInfo: {
      // 备案号
      recordNumber: '备案号',
      // 备案链接
      recordLink: 'https://beian.miit.gov.cn/'
    }
  },

  watermark: {
    width: 120,
    height: 64,
    inherit: true,
    rotate: -22,
    zIndex: 99999,
    content: 'react-components',
    gap: [100, 100],
    font: {
      color: 'rgba(0, 0, 0, 0.15)',
      fontSize: 16,
      fontWeight: 'normal',
      fontFamily: 'sans-serif',
      fontStyle: 'normal',
      textAlign: 'center'
    }
  },
  watermarkLayout: 'layout',
  activitysMax: 10
} as ConfigDefaultType

/**
 * @description 默认配置，可以用自定义配置覆盖（仅浅层覆盖）。|| Default configuration, can be overwritten by custom configuration (shallow overwrite only).
 */
export type ConfigDefaultType = {
  /**
   * @description 是否需要登录才能访问。|| Whether login is required to access.
   * @default false
   */
  isNeedLogin: boolean
  /**
   * @description 登录状态保存在 localStorage 中的 key，防止被其他覆盖。|| Login status localStorage key, to prevent being overwritten by other.
   * @default 'react-components-login'
   */
  loginLocalStorageKey: string
  /**
   * @description 白名单，登录页面和重置密码页面不需要登录。|| White list, login page and reset password page do not need login.
   * @default ['/login', '/reset-password']
   */
  whiteList: string[]
  /**
   * @description 页头左侧 logo 文本，在 logoText 和 logoImg 都配置时，页头左侧 logoImg 优先级更高。|| Page header left logo text, when both logoText and logoImg are configured, logoImg has higher priority.
   * @default 'react-components'
   */
  logoText: string
  /**
   * @description 页头左侧 logo 图片，在 logoText 和 logoImg 都配置时，页头左侧 logoImg 优先级更高。|| Page header left logo image, when both logoText and logoImg are configured, logoImg has higher priority.
   * @default '/react-components/vite.svg'
   */
  logoImg: string
  /**
   * @description 是否开启主题切换功能。|| Whether to enable theme switch function.
   * @default true
   */
  theme: boolean
  /**
   * @description 默认主题，如果未开启主题切换功能，则直接显示该主题。|| Default theme, if theme switch function is not enabled, then display this theme directly.
   * @default 'system'
   */
  defaultTheme: ThemeType
  /**
   * @description 系统主题切换时，是否自动切换主题。|| Whether to automatically switch theme when system theme changes.
   * @default true
   */
  autoChangeTheme: boolean
  /**
   * @description 主题保存在 localStorage 中的 key，防止被其他覆盖。|| Theme localStorage key, to prevent being overwritten by other.
   * @default 'react-components-theme'
   */
  themeLocalStorageKey: string
  /**
   * @description 是否开启多语言功能。|| Whether to enable multi-language function.
   * @default true
   */
  locales: boolean
  /**
   * @description 默认语言。|| Default language.
   * @default 'zh'
   */
  defaultLocale: LocaleType
  /**
   * @description 语言保存在 localStorage 中的 key，防止被其他覆盖。|| Locale localStorage key, to prevent being overwritten by other.
   * @default 'react-components-locale'
   */
  localeLocalStorageKey: string
  /**
   * @description 顶部导航栏github链接。|| Top navigation bar github link.
   * @default 'https://github.com/fxss5201/react-components'
   */
  githubLink: string
  /**
   * @description 是否开启面包屑导航。|| Whether to enable breadcrumb navigation.
   * @default true
   */
  breadcrumb: boolean
  /**
   * @description 是否开启 tabs 导航。|| Whether to enable tabs navigation.
   * @default true
   */
  layoutTabs: boolean
  /**
   * @description 页脚配置。|| Footer configuration.
   */
  footer: null | {
    /**
     * @description 页脚链接配置。|| Footer link configuration.
     */
    links: Array<{
      /**
       * @description key 用于唯一标识，防止重复，并且作为多语言配置的 key。|| Key used to uniquely identify, to prevent duplication, and as the key for multi-language configuration.
       */
      key?: string
      /**
       * @description label 用于多语言的默认显示或标题。|| Label is used for default display or title in multiple languages.
       */
      label: string
      /**
       * @description link 用于跳转的链接，支持站内和外部链接区分。|| Link for jump, supports internal and external links.
       */
      link: string
    }>
    /**
     * @description 页脚备案信息配置。|| Footer record information configuration.
     */
    recordInfo: {
      /**
       * @description 备案号。|| Record number.
       * @default '备案号'
       */
      recordNumber: string
      /**
       * @description 备案链接。|| Record link.
       * @default 'https://beian.miit.gov.cn/'
       */
      recordLink: string
    }
  }
  /**
   * @description 水印配置。|| Watermark configuration.
   */
  watermark: WatermarkProps | null
  /**
   * @description 水印布局，layout 表示水印在全局中显示，page 表示水印在页面中显示。|| Watermark layout, layout means watermark is displayed in layout, page means watermark is displayed in page.
   * @default 'layout'
   */
  watermarkLayout: 'layout' | 'page',
  /**
   * @description 活动最大数量。|| Maximum number of activities.
   * @default 10
   */
  activitysMax: number
}
export type ConfigType = Partial<ConfigDefaultType>
