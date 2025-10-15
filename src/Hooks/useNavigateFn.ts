import { useCallback } from 'react'
import { useNavigate } from 'react-router'
import { type NavigateOptions, type To } from 'react-router'
import { useRouteLoading } from '../storeHooks/useRouteLoading'

export function useNavigateFn() {
  const { changeRouteLoading } = useRouteLoading()
  const navigate = useNavigate()
  const navigateCallback = useCallback((path: To, options?: NavigateOptions) => {
    changeRouteLoading(true)
    navigate(path, options)
  }, [navigate, changeRouteLoading])
  return navigateCallback
}
