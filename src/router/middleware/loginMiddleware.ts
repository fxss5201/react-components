import type { MiddlewareFunction } from 'react-router'
import { redirect } from 'react-router'
import config from '@/config'

const BASE_URL = import.meta.env.BASE_URL

export const loginMiddleware: MiddlewareFunction = async ({ request }, next) => {
  // 获取当前路径，避免登录页面无限重定向
  const url = new URL(request.url)
  let currentPath = url.pathname
  
  // 处理 BASE_URL
  if (BASE_URL && currentPath.startsWith(BASE_URL)) {
    currentPath = currentPath.slice(BASE_URL.length)
  }
  
  // 确保路径以 / 开头
  if (!currentPath.startsWith('/')) {
    currentPath = '/' + currentPath
  }
  
  // 检查登录状态
  const isLogin = localStorage.getItem(config.loginLocalStorageKey) !== null
  
  // 如果是登录页面
  if (config.whiteList.includes(currentPath)) {
    // if (!isLogin && config.isNeedLogin) {
    //   return true
    // } else {
    //   throw redirect('/')
    // }
    return await next()
  }
  
  // 如果需要登录且未登录，则重定向到登录页面
  if (!isLogin && config.isNeedLogin) {
    throw redirect(`/login`)
  } else {
    return await next()
  }
}
