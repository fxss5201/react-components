import type { RouteObject } from 'react-router'
import type { WatermarkProps } from '@/configDefault'

// RoutersBaseType 是路由配置的基础类型，用于规范 routers 配置
export type RoutersBaseType = Omit<RouteObject, 'meta' | 'Component' | 'element'> & {
  element?: React.ReactNode
  meta: {
    // index 为 true 的时候，需要指定 key，否则会报错
    key?: string
    // 菜单label，如果是多语言，根据 path （index 为 true 时，则根据 key ） 去配置
    label: string
    // 菜单图表
    icon?: React.ReactNode
    // 当前路由是否需要使用 Activity 组件保存路由状态，默认 false （仅在 element 存在时生效）
    activity?: boolean
    // 是否隐藏在菜单中，父路由为 true 时，子路由也会被隐藏
    hideInMenu?: boolean
    // 进入该路由时是否隐藏头部，默认 false
    hideHead?: boolean
    // 进入该路由时是否隐藏菜单，默认 false
    hideMenu?: boolean
    // 进入该路由时是否收起菜单，默认 false
    collapseMenu?: boolean,
    // 进入该路由时是否隐藏底部，默认 false
    hideFooter?: boolean
    // 进入该路由时是否隐藏面包屑导航，默认 false
    hideBreadcrumb?: boolean
    // 进入该路由时是否隐藏标签页，默认 false
    hideTabs?: boolean
    // 在标签页中是否隐藏该路由，默认 false
    hideInTabs?: boolean
    // 路由权限，不设置的时候默认所有用户都可以访问，设置的时候根据用户的权限判断是否显示该路由
    permission?: string
    // 水印配置
    watermark?: WatermarkProps
  },
  children?: RoutersBaseType[]
}

// RoutersType 是生成的 routersTree 或 routersList 的类型，主要是保证每个节点都有 key 属性
export type RoutersType = Omit<RoutersBaseType, 'meta' | 'children'> & {
  meta: Omit<RoutersBaseType['meta'], 'key'> & {
    key: string
  },
  children?: RoutersType[]
}
