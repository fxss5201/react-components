import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '@/store'
import { changeUserInfo, changeBadge , type UserState } from '@/store/userSlice'

export function useUser() {
  const user = useSelector((state: RootState) => state.user.value)

  const dispatch = useDispatch<AppDispatch>()
  const changeUserInfoCallback = (value: UserState['value']) => dispatch(changeUserInfo(value))
  const changeBadgeCallback = (value: number) => dispatch(changeBadge(value))

  return {
    name: user.name,
    img: user.img,
    badge: user.badge,
    changeUserInfo: changeUserInfoCallback,
    changeBadge: changeBadgeCallback
  }
}
