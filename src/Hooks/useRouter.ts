import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { type NavigateOptions, type To } from 'react-router'
import { useRouteLoading } from '../storeHooks/useRouteLoading'

const BASE_URL = import.meta.env.BASE_URL

/**
 * 自定义路由Hook，封装React Router的useNavigate功能
 * 提供更便捷的导航方法，支持添加基础URL前缀
 */
export function useRouter() {
  const navigate = useNavigate()
  const { changeRouteLoading } = useRouteLoading()
  const navigateCallback = useCallback((path: To, options?: NavigateOptions) => {
    changeRouteLoading(true)
    if (typeof path === 'string') {
      // 判断路径类型，如果是字符串则添加基础URL前缀
      navigate(`${BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`, options)
    } else if (typeof path === 'number') {
      // 如果是数字则直接使用（通常用于导航到历史记录中的特定位置）
      navigate(path)
    } else if (typeof path === 'object') {
      // 如果是对象则直接使用（通常用于导航到特定位置）
      navigate({
        ...path,
        pathname: `${BASE_URL}${path.pathname?.startsWith('/') ? path.pathname.slice(1) : path.pathname}`
      }, options)
    } else {
      throw new Error('Invalid path type')
    }
  }, [navigate, changeRouteLoading])
  return navigateCallback
}

/**
 * 自定义路由Hook，用于获取当前路径并移除基础URL前缀
 */
export function useRoute() {
  const { pathname } = useLocation()
  return pathname.replace(BASE_URL, '')
}

export function useNavigateFn() {
  const { changeRouteLoading } = useRouteLoading()
  const navigate = useNavigate()
  const navigateCallback = useCallback((path: To, options?: NavigateOptions) => {
    changeRouteLoading(true)
    navigate(path, options)
  }, [navigate, changeRouteLoading])
  return navigateCallback
}
