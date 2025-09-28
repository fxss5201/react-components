import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router'

const BASE_URL = import.meta.env.BASE_URL

/**
 * 自定义路由Hook，封装React Router的useNavigate功能
 * 提供更便捷的导航方法，支持添加基础URL前缀
 */
export function useRouter() {
  const navigate = useNavigate()
  const navigateCallback = useCallback((path: string | number) => {
    // 判断路径类型，如果是字符串则添加基础URL前缀
    if (typeof path === 'string') {
      navigate(`${BASE_URL}${path}`)
    } else {
      // 如果是数字则直接使用（通常用于导航到历史记录中的特定位置）
      navigate(path)
    }
  }, [navigate])
  return navigateCallback
}

/**
 * 自定义路由Hook，用于获取当前路径并移除基础URL前缀
 */
export function useRoute() {
  const { pathname } = useLocation()
  return pathname.replace(BASE_URL, '')
}
