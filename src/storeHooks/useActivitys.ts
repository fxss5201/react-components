import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '../store'
import { addActivitys, removeActivitys, clearActivitys } from '../store/activitysSlice'

export function useActivitys() {
  const activitys = useSelector((state: RootState) => state.activitys.value)

  const dispatch = useDispatch<AppDispatch>()
  const addActivitysCallback = useCallback((value: string) => dispatch(addActivitys(value)), [dispatch])
  const removeActivitysCallback = useCallback((value: string) => dispatch(removeActivitys(value)), [dispatch])
  const clearActivitysCallback = useCallback(() => dispatch(clearActivitys()), [dispatch])

  return {
    activitys, addActivitys: addActivitysCallback, removeActivitys: removeActivitysCallback, clearActivitys: clearActivitysCallback
  }
}
