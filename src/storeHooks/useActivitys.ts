import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '@/store'
import { addActivitys, removeActivitys, clearActivitys } from '@/store/activitysSlice'

export function useActivitys() {
  const value = useSelector((state: RootState) => state.activitys.value)
  const activitys = value.map(item => item.value)

  const dispatch = useDispatch<AppDispatch>()
  const addActivitysCallback = (value: string) => dispatch(addActivitys(value))
  const removeActivitysCallback = (value: string) => dispatch(removeActivitys(value))
  const clearActivitysCallback = () => dispatch(clearActivitys())

  return {
    activitys, addActivitys: addActivitysCallback, removeActivitys: removeActivitysCallback, clearActivitys: clearActivitysCallback
  }
}
