import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import config from '@/config'

export interface SystemSetState {
  colorPrimary: string | undefined
}

let initialValue: SystemSetState = {
  colorPrimary: config.systemSet?.colorPrimary || undefined
}
if (localStorage.getItem(config.systemSet?.localStorageKey)) {
  initialValue = JSON.parse(localStorage.getItem(config.systemSet?.localStorageKey)!) as SystemSetState
}

export const systemSetSlice = createSlice({
  name: 'systemSet',
  initialState: {
    value: initialValue
  },
  reducers: {
    changeSystemSet: (state, action: PayloadAction<SystemSetState>) => {
      state.value = action.payload
      localStorage.setItem(config.systemSet?.localStorageKey || 'react-components-system-set', JSON.stringify(state.value))
    }
  }
})

export const { changeSystemSet } = systemSetSlice.actions

export default systemSetSlice.reducer
