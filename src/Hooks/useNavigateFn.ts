import { useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { type NavigateOptions, type To } from 'react-router'
import { useRouteLoading } from '../storeHooks/useRouteLoading'

// 自定义 navigate 函数，用于在路由变化时更新 NProgress loading 状态，并且避免重复更新（相同路由不触发更新）
export function useNavigateFn() {
  const { changeRouteLoading } = useRouteLoading()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const navigateCallback = useCallback((path: To, options?: NavigateOptions) => {
    if (pathname === path) return
    changeRouteLoading(true)
    navigate(path, options)
  }, [navigate, changeRouteLoading, pathname])
  return navigateCallback
}
