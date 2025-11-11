import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '../store'
import { changeRouteLoading } from '../store/routeLoadingSlice'

export function useRouteLoading() {
  const isRouteLoading = useSelector((state: RootState) => state.routeLoading.value)

  const dispatch = useDispatch<AppDispatch>()
  const changeRouteLoadingCallback = (value: boolean) => dispatch(changeRouteLoading(value))

  return {
    isRouteLoading, changeRouteLoading: changeRouteLoadingCallback
  }
}
