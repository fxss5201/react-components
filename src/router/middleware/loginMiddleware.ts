import type { MiddlewareFunction } from 'react-router'
import { redirect } from 'react-router'
import config from '@/config'
import store from '@/store'
import { changeUserInfo } from '@/store/userSlice'

const BASE_URL = import.meta.env.BASE_URL

export const loginMiddleware: MiddlewareFunction = async ({ request }, next) => {
  const userInfo = store.getState().user.value
  let isLogin = !!userInfo.id
  if (!isLogin) {
    const userLocal = localStorage.getItem(config.loginLocalStorageKey)
    if (userLocal) {
      const userObj = JSON.parse(userLocal)
      store.dispatch(changeUserInfo(userObj))
      isLogin = true
    }
  }
  
  if (!isLogin) {
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
    
    if (config.whiteList.includes(currentPath)) {
      await next()
    } else {
      throw redirect('/login')
    }
  } else {
    await next()
  }
}
