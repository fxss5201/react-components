import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type UserState = {
  value: {
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
    },
    changeBadge: (state, action: PayloadAction<number>) => {
      state.value.badge = action.payload
    },
    changePermissionList: (state, action: PayloadAction<string[]>) => {
      state.value.permissionList = action.payload
    }
  }
})

export const { changeUserInfo, changeBadge, changePermissionList } = userSlice.actions

export default userSlice.reducer