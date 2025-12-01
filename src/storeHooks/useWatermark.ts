import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '@/store'
import { setWatermarkEnabled, setWatermarkProps } from '@/store/watermarkSlice'
import type { WatermarkProps } from '@/configDefault'

export function useWatermark() {
  const { enabled: watermarkEnabled, props: watermarkProps } = useSelector((state: RootState) => state.watermark)

  const dispatch = useDispatch<AppDispatch>()
  const setWatermarkEnabledCallback = (enabled: boolean) => dispatch(setWatermarkEnabled(enabled))
  const setWatermarkPropsCallback = (props: WatermarkProps) => dispatch(setWatermarkProps(props))

  return {
    watermarkEnabled,
    watermarkProps,
    setWatermarkEnabled: setWatermarkEnabledCallback,
    setWatermarkProps: setWatermarkPropsCallback
  }
}
