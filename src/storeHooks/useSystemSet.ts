import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '@/store'
import { changeSystemSet, type SystemSetState } from '@/store/systemSetSlice'

export function useSystemSet() {
  const systemSet = useSelector((state: RootState) => state.systemSet.value)

  const dispatch = useDispatch<AppDispatch>()
  const changeSystemSetCallback = (value: SystemSetState) => dispatch(changeSystemSet(value))

  return {
    systemSet, changeSystemSet: changeSystemSetCallback
  }
}