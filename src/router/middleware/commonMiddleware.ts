import type { MiddlewareFunction } from 'react-router'
import { routersList } from '@/router'
import store from '@/store'
import { changeRouteLoading } from '@/store/routeLoadingSlice'
import config from '@/config'
import { addActivitys } from '@/store/activitysSlice'
import { addLayoutTabs } from '@/store/layoutTabsSlice'
import { changeHeadShow, changeMenuShow, changeMenuCollapsed, changeFooterShow, changeBreadcrumbShow, changeTabsShow } from '@/store/layoutStateSlice'
import { setWatermarkEnabled, setWatermarkProps } from '@/store/watermarkSlice'
import i18n from '@/locales'
import { replaceWatermarkContent } from '@/router/utils'
import merge from 'lodash.merge'

const BASE_URL = import.meta.env.BASE_URL

export const commonMiddleware: MiddlewareFunction = async ({ request }, next) => {
  store.dispatch(changeRouteLoading(true))
  await next()
  const url = new URL(request.url)
  let currentPath = url.pathname
  const searchParams = url.searchParams
  if (BASE_URL && currentPath.startsWith(BASE_URL)) {
    currentPath = currentPath.slice(BASE_URL.length)
  }
  if (!currentPath.startsWith('/')) {
    currentPath = '/' + currentPath
  }
  const matchedRoute = routersList.find(router => router.path === currentPath)
  if (matchedRoute) {
    document.title = `${i18n.t(`menu.${matchedRoute.meta.key}`, { defaultValue: matchedRoute.meta.label })} | ${config.logoText}`
    if (matchedRoute.meta?.activity && matchedRoute.element) {
      store.dispatch(addActivitys(matchedRoute.path!))
    }
    
    if (config.layoutTabs) {
      if (!(matchedRoute.meta?.hideInTabs || !!searchParams.get('hideInTabs'))) {
        store.dispatch(addLayoutTabs({ value: matchedRoute.path!, activeTab: matchedRoute.path! }))
      }
    }

    store.dispatch(changeHeadShow(!(matchedRoute.meta?.hideHead || !!searchParams.get('hideHead'))))
    
    store.dispatch(changeMenuShow(!(matchedRoute.meta?.hideMenu || !!searchParams.get('hideMenu'))))

    store.dispatch(changeFooterShow(!(matchedRoute.meta?.hideFooter || !!searchParams.get('hideFooter'))))

    store.dispatch(changeMenuCollapsed(!!(matchedRoute.meta?.collapseMenu || !!searchParams.get('collapseMenu'))))

    if (config.breadcrumb) {
      store.dispatch(changeBreadcrumbShow(!(matchedRoute.meta?.hideBreadcrumb || !!searchParams.get('hideBreadcrumb'))))
    }

    if (config.layoutTabs) {
      store.dispatch(changeTabsShow(!(matchedRoute.meta?.hideTabs || !!searchParams.get('hideTabs'))))
    }

    if (config.watermark) {
      const watermarkEnabled = !!matchedRoute.meta.watermark
      if (watermarkEnabled) {
        const watermarkProps = matchedRoute.meta.watermark || {}
        if (watermarkProps.content) {
          const userValue = store.getState().user.value
          if (typeof watermarkProps.content === 'string') {
            watermarkProps.content = replaceWatermarkContent(watermarkProps.content, userValue)
          } else if (typeof watermarkProps.content === 'object') {
            watermarkProps.content =  watermarkProps.content.map(item => replaceWatermarkContent(item, userValue))
          }
        }
        store.dispatch(setWatermarkProps(merge(config.watermark, watermarkProps)))
        store.dispatch(setWatermarkEnabled(true))
      } else {
        store.dispatch(setWatermarkEnabled(false))
      }
    }
  } else {
    document.title = config.logoText
  }
}
