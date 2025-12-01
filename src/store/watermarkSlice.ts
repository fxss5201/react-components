import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { WatermarkProps } from '@/configDefault'

type WatermarkSliceInitialState = {
  enabled: boolean
  props: WatermarkProps
}

const initialState: WatermarkSliceInitialState = {
  enabled: false,
  props: {}
}

export const watermarkSlice = createSlice({
  name: 'watermarkSlice',
  initialState,
  reducers: {
    setWatermarkEnabled: (state, action: PayloadAction<boolean>) => {
      state.enabled = action.payload
    },
    setWatermarkProps: (state, action: PayloadAction<WatermarkProps>) => {
      state.props = action.payload
    }
  }
})

export const { setWatermarkEnabled, setWatermarkProps } = watermarkSlice.actions

export default watermarkSlice.reducer
