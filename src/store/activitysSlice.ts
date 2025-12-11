import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import config from '@/config'

type ActivitysItem = {
  value: string
  time: number
}
type ActivitysInitialState = {
  value: ActivitysItem[]
}

const initialState: ActivitysInitialState = {
  value: []
}

export const activitysSlice = createSlice({
  name: 'activitys',
  initialState,
  reducers: {
    addActivitys: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex(item => item.value === action.payload)
      if (index !== -1) {
        state.value[index].time = Date.now()
        return
      }
      state.value.push({
        value: action.payload,
        time: Date.now()
      })
      // 超过最大数量，删除最近最少使用的
      if (config.activitysMax && state.value.length > config.activitysMax) {
        state.value.sort((a, b) => b.time - a.time)
        state.value = state.value.slice(0, config.activitysMax)
      }
    },
    removeActivitys: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(item => item.value !== action.payload)
    },
    clearActivitys: (state) => {
      state.value = []
    }
  }
})

export const { addActivitys, removeActivitys, clearActivitys } = activitysSlice.actions

export default activitysSlice.reducer
