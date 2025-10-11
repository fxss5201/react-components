import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '../store'
import { changeRouteLoading } from '../store/routeLoadingSlice'

export function useRouteLoading() {
  const isRouteLoading = useSelector((state: RootState) => state.routeLoading.value)

  const dispatch = useDispatch<AppDispatch>()
  const changeRouteLoadingCallback = useCallback((value: boolean) => dispatch(changeRouteLoading(value)), [dispatch])

  return {
    isRouteLoading, changeRouteLoading: changeRouteLoadingCallback
  }
}
