import type { RouteObject } from 'react-router'
import type { WatermarkProps } from '@/configDefault'

/**
 * @description RoutersBaseType 是路由配置的基础类型，用于规范 routers 配置。|| RoutersBaseType is the base type of router configuration, used to specify routers configuration.
 */
export type RoutersBaseType = Omit<RouteObject, 'meta' | 'Component' | 'element'> & {
  /**
   * @description 路由元素。|| Route element.
   */
  element?: React.ReactNode
  meta: {
    /**
     * @description index 为 true 的时候，需要指定 key，否则会报错。|| When index is true, you need to specify key, otherwise an error will be reported.
     */
    key?: string
    /**
     * @description 菜单label，如果是多语言，根据 path （index 为 true 时，则根据 key ） 去配置。|| Menu label, if it is multi-language, it will be configured according to path (if index is true, it will be configured according to key).
     */
    label: string
    /**
     * @description 菜单图表。|| Menu icon.
     */
    icon?: React.ReactNode
    /**
     * @description 当前路由是否需要使用 Activity 组件保存路由状态，默认 false （仅在 element 存在时生效）。|| Whether the current route needs to use Activity component to save route state, default is false (only effective when element exists).
     * @default false
     */
    activity?: boolean
    /**
     * @description 是否隐藏在菜单中，父路由为 true 时，子路由也会被隐藏。|| Whether to hide in menu, if parent route is true, child routes will also be hidden.
     * @default false
     */
    hideInMenu?: boolean
    /**
     * @description 进入该路由时是否隐藏头部，默认 false || Whether to hide header when entering the route, default is false.
     * @default false
     */
    hideHead?: boolean
    /**
     * @description 进入该路由时是否隐藏菜单，默认 false || Whether to hide menu when entering the route, default is false.
     * @default false
     */
    hideMenu?: boolean
    /**
     * @description 进入该路由时是否收起菜单，默认 false || Whether to collapse menu when entering the route, default is false.
     * @default false
     */
    collapseMenu?: boolean,
    /**
     * @description 进入该路由时是否隐藏底部，默认 false || Whether to hide footer when entering the route, default is false.
     * @default false
     */
    hideFooter?: boolean
    /**
     * @description 进入该路由时是否隐藏面包屑导航，默认 false || Whether to hide breadcrumb when entering the route, default is false.
     * @default false
     */
    hideBreadcrumb?: boolean
    /**
     * @description 进入该路由时是否隐藏标签页，默认 false || Whether to hide tabs when entering the route, default is false.
     * @default false
     */
    hideTabs?: boolean
    /**
     * @description 在标签页中是否隐藏该路由，默认 false || Whether to hide the route in tabs, default is false.
     * @default false
     */
    hideInTabs?: boolean
    /**
     * @description 路由权限，不设置的时候默认所有用户都可以访问，设置的时候根据用户的权限判断是否显示该路由。|| Route permission, if not set, default is all users can access, if set, it will be judged according to user permission.
     */
    permission?: string
    /**
     * @description 水印配置。|| Watermark configuration.
     */
    watermark?: WatermarkProps
  },
  /**
   * @description 子路由。|| Child routes.
   */
  children?: RoutersBaseType[]
}

/**
 * @description RoutersType 是生成的 routersTree 或 routersList 的类型，主要是保证每个节点都有 key 属性。|| RoutersType is the type of generated routersTree or routersList, mainly to ensure that each node has a key attribute.
 */
export type RoutersType = Omit<RoutersBaseType, 'meta' | 'children'> & {
  meta: Omit<RoutersBaseType['meta'], 'key'> & {
    key: string
  },
  children?: RoutersType[]
}
