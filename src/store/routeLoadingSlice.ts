import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export const routeLoadingSlice = createSlice({
  name: 'routeLoading',
  initialState: {
    value: true
  },
  reducers: {
    changeRouteLoading: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    }
  }
})

export const { changeRouteLoading } = routeLoadingSlice.actions

export default routeLoadingSlice.reducer