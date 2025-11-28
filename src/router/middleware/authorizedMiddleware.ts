import type { MiddlewareFunction } from 'react-router'
import { redirect } from 'react-router'
import { routersList } from '@/router'
import store from '@/store'

const BASE_URL = import.meta.env.BASE_URL

export const authorizedMiddleware: MiddlewareFunction = async ({ request }, next) => {
  const url = new URL(request.url)
  let currentPath = url.pathname
  // 处理 BASE_URL
  if (BASE_URL && currentPath.startsWith(BASE_URL)) {
    currentPath = currentPath.slice(BASE_URL.length)
  }
  if (currentPath.startsWith('/')) {
    currentPath = currentPath.slice(1)
  }

  const userInfo = store.getState().user.value
  const permissionList = userInfo.permissionList || []

  const pathList = currentPath.split('/')
  for (let idx = 0; idx < pathList.length; idx++) {
    const item = pathList[idx]
    const router = routersList.find(router => router.path === `/${item}`)
    if (router?.meta?.permission && !permissionList.includes(router.meta.permission)) {
      throw redirect('/not-authorized')
    }
  }
  
  await next()
}
