import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import config from '@/config'
import TabCommunication from '@/utils/TabCommunication'

export type UserState = {
  value: {
    // 用户ID
    id: string | number
    // 用户名
    name: string
    // 头像
    img?: string
    // 消息数量
    badge?: number
    // 路由权限
    permissionList?: string[]
  }
}

const initialState: UserState = {
  value: {
    id: '',
    name: '',
    img: '',
    badge: 0,
    permissionList: []
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserInfo: (state, action: PayloadAction<UserState['value']>) => {
      state.value = action.payload
      localStorage.setItem(config.loginLocalStorageKey, JSON.stringify(state.value))
      TabCommunication.postMessage({
        type: 'user_channel',
        data: state.value
      })
    },
    onlyChangeUserInfo: (state, action: PayloadAction<UserState['value']>) => {
      state.value = action.payload
    },
    changeBadge: (state, action: PayloadAction<number>) => {
      state.value.badge = action.payload
      localStorage.setItem(config.loginLocalStorageKey, JSON.stringify(state.value))
    },
    changePermissionList: (state, action: PayloadAction<string[]>) => {
      state.value.permissionList = action.payload
      localStorage.setItem(config.loginLocalStorageKey, JSON.stringify(state.value))
    }
  }
})

export const { changeUserInfo, onlyChangeUserInfo, changeBadge, changePermissionList } = userSlice.actions

export default userSlice.reducer