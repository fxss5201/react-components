import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type activitysInitialState = {
  value: string[]
}

const initialState: activitysInitialState = {
  value: []
}

export const activitysSlice = createSlice({
  name: 'activitys',
  initialState,
  reducers: {
    addActivitys: (state, action: PayloadAction<string>) => {
      if (state.value.includes(action.payload)) {
        return
      }
      state.value.push(action.payload)
    },
    removeActivitys: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(item => item !== action.payload)
    },
    clearActivitys: (state) => {
      state.value = []
    }
  }
})

export const { addActivitys, removeActivitys, clearActivitys } = activitysSlice.actions

export default activitysSlice.reducer
