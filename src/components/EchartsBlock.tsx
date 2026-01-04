import { useEffect, useRef, useImperativeHandle, useCallback } from 'react'
import * as echarts from 'echarts'
import cn from 'classnames'
import { useSize, useDocumentVisibility, useUpdateEffect, useInViewport } from 'ahooks'
import { useTheme } from '@/storeHooks/useTheme'
import merge from 'lodash/merge'
import { useTranslation } from 'react-i18next'

export type EchartsType = 'line' | 'bar' | 'pie'
export type EchartsDataLeafItem = {
  /**
   * @description 数据项名称。|| Data item name.
   */
  name?: string
  /**
   * @description 数据项值。|| Data item value.
   */
  value: number
}
export type EchartsDataItem = {
  /**
   * @description 数据项名称。|| Data item name.
   */
  name?: string
  /**
   * @description 数据项值。|| Data item value.
   */
  data: EchartsDataLeafItem[] | number[]
}
export type EchartsData = EchartsDataItem[]

export type EchartsBlockProps = {
  /**
   * @description 自定义类名。|| Custom class name.
   */
  className?: string
  /**
   * @description 图表宽度。|| Chart width.
   */
  width?: string | number
  /**
   * @description 图表高度。|| Chart height.
   */
  height?: string | number
  /**
   * @description 图表样式。|| Chart style.
   */
  style?: React.CSSProperties
  /**
   * @description 图表初始化选项。|| Chart init options.
   * @default { renderer: 'svg' }
   */
  opts?: echarts.EChartsInitOpts
  /**
   * @description 图表选项。|| Chart option.
   */
  option: echarts.EChartsOption
  /**
   * @description 加载状态。|| Loading state.
   * @default false
   */
  loading?: boolean
  /**
   * @description 图表主题。|| Chart theme.
   * @default 'light'
   */
  theme?: 'dark' | 'light'
  /**
   * @description 图表实例引用。|| Chart instance ref.
   */
  ref?: React.Ref<{
    /**
     * @description 图表实例。|| Chart instance.
     */
    echartsInstance: echarts.ECharts
  }>
  /**
   * @description 图表类型, 当 echartsType 和 echartsData 设置之后会覆盖 option 中的 series 数据，提供数据和option分离的设置方法。|| Chart type, when echartsType and echartsData are set, they will override the series data in option, providing a method to set data and option separately.
   */
  echartsType?: EchartsType
  /**
   * @description 图表 X 轴数据, 当 echartsXAxisData 设置之后会覆盖 option 中的 xAxis 数据，echartsType 为 line 或 bar 时生效。|| Chart X axis data, when echartsXAxisData is set, it will override the xAxis data in option, which is effective when echartsType is line or bar.
   */
  echartsXAxisData?: string[]
  /**
   * @description 图表数据。|| Chart data.
   */
  echartsData?: EchartsData
  /**
   * @description 自动播放。|| Auto play.
   * @default false
   */
  autoPlay?: boolean | {
    /**
     * @description 自动播放间隔。|| Auto play interval.
     * @default 2000
     */
    interval?: number
  }
}

function EchartsBlock({
  className = '',
  width = '',
  height = '',
  style = {},
  opts = { renderer: 'svg' },
  option = {},
  loading = false,
  theme,
  ref,
  echartsType,
  echartsXAxisData,
  echartsData,
  autoPlay = false,
}: EchartsBlockProps) {
  const { t } = useTranslation()
  const { theme: parentTheme } = useTheme()
  const currentTheme = theme || parentTheme || 'light'

  const echartsRef = useRef<HTMLDivElement>(null)
  const echartsInstance = useRef<echarts.ECharts>(null)
  const playIntervalRef = useRef<number>(null)
  const playIndex = useRef<number>(-1)
  const defaultAutoPlayInterval = 2000

  let widthStyle = {}
  if (typeof width === 'number') {
    widthStyle = { width: `${width}px` }
  } else {
    widthStyle = width ? { width } : {}
  }
  let heightStyle = {}
  if (typeof height === 'number') {
    heightStyle = { height: `${height}px` }
  } else {
    heightStyle = height ? { height } : {}
  }

  const echartsSetOption = useCallback((option: echarts.EChartsOption) => {
    echartsInstance.current?.setOption(option)
  }, [echartsInstance])
  const echartsDispose = useCallback(() => {
    echartsInstance.current?.dispose()
    echartsInstance.current = null
  }, [echartsInstance])
  const echartsResize = useCallback(() => {
    echartsInstance.current?.resize()
  }, [echartsInstance])
  const echartsLoading = useCallback((loading: boolean) => {
    if (loading) {
      echartsInstance.current?.showLoading('default', {
        text: t('components.EchartsBlock.loading', { defaultValue: '加载中...' }),
        fontSize: 14,
      })
    } else {
      echartsInstance.current?.hideLoading()
    }
  }, [echartsInstance, t])
  const echartsSetData = useCallback((echartsType: EchartsType, echartsXAxisData?: string[], echartsData?: EchartsData) => {
    if (!echartsInstance.current) {
      return
    }
    if (!echartsType || !echartsData) {
      return
    }
    const optionData: echarts.EChartsOption = {}
    if (echartsType === 'line' || echartsType === 'bar') {
      if (echartsXAxisData) {
        optionData.xAxis = {
          type: 'category',
          data: echartsXAxisData,
        }
      }
      optionData.tooltip = {
        trigger: 'axis',
        axisPointer: {
          type: echartsType === 'line' ? 'line' : 'shadow',
        },
      }
    }
    if (echartsType === 'pie') {
      optionData.tooltip = {
        trigger: 'item',
      }
    }
    optionData.series = echartsData.map((item) => ({
      ...item,
      type: echartsType,
    }))
    echartsSetOption(merge(option, optionData))
  }, [echartsSetOption, option])
  const echartsPlay = useCallback(() => {
    if (playIntervalRef.current) {
      return
    }
    const option = echartsInstance.current?.getOption() || {}
    const series: any = option.series || []
    if (series.length === 0) {
      return
    }
    // 暂时只提供 line, bar, pie 三种图表类型的播放
    if (!['line', 'bar', 'pie'].includes(series[0].type)) {
      return
    }
    playIntervalRef.current = window.setInterval(() => {
      const dataLen = series[0].data.length
      echartsInstance.current?.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: playIndex.current
      })
      playIndex.current = (playIndex.current + 1) % dataLen
      // 高亮当前图形
      echartsInstance.current?.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: playIndex.current
      })
      // 显示 tooltip
      echartsInstance.current?.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: playIndex.current
      })
    }, typeof autoPlay === 'object' ? autoPlay.interval || defaultAutoPlayInterval : defaultAutoPlayInterval)
  }, [autoPlay])
  const echartsPause = useCallback(() => {
    if (playIntervalRef.current) {
      window.clearInterval(playIntervalRef.current)
      playIntervalRef.current = null
    }
  }, [])
  const echartsAddEvents = useCallback(() => {
    echartsInstance.current?.on('mouseover', 'series', (event: any) => {
      playIndex.current = event.dataIndex
    })
    echartsInstance.current?.getZr().on('mousemove', () => {
      echartsPause()
    })
    echartsInstance.current?.getZr().on('mouseout', () => {
      echartsPlay()
    })
  }, [echartsInstance, echartsPause, echartsPlay])
  const echartsRemoveEvents = useCallback(() => {
    echartsInstance.current?.off('mouseover')
    echartsInstance.current?.getZr().off('mousemove')
    echartsInstance.current?.getZr().off('mouseout')
  }, [echartsInstance])
  const echartsInit = useCallback(() => {
    if (echartsInstance.current) {
      echartsDispose()
    }
    echartsInstance.current = echarts.init(echartsRef.current!, currentTheme === 'dark' ? 'dark' : 'light', opts)
    echartsLoading(loading)
    if (echartsType) {
      echartsSetData(echartsType, echartsXAxisData, echartsData)
    } else {
      echartsSetOption(option)
    }
    if (autoPlay) {
      echartsPlay()
      echartsAddEvents()
    }
  }, [currentTheme, echartsRef, opts, loading, echartsType, echartsXAxisData, echartsData, option, autoPlay,
    echartsDispose, echartsLoading, echartsSetData, echartsSetOption, echartsPlay, echartsAddEvents])

  useEffect(() => {
    echartsInit()
    return () => {
      echartsDispose()
      if (autoPlay) {
        echartsPause()
        echartsRemoveEvents()
      }
    }
  }, [autoPlay, echartsInit, echartsDispose, echartsPause, echartsRemoveEvents])
  useEffect(() => {
    echartsInit()
  }, [opts, echartsInit])
  useEffect(() => {
    if (echartsType) {
      echartsSetData(echartsType, echartsXAxisData, echartsData)
    } else {
      echartsSetOption(option)
    }
  }, [option, echartsType, echartsXAxisData, echartsData, echartsSetData, echartsSetOption])
  useEffect(() => {
    echartsLoading(loading)
  }, [loading, echartsLoading])
  const size = useSize(echartsRef)
  useEffect(() => {
    echartsResize()
  }, [size, echartsResize])
  useImperativeHandle(ref, () => ({
    echartsInstance: echartsInstance.current!,
  }))
  const documentVisibility = useDocumentVisibility()
  useUpdateEffect(() => {
    if (documentVisibility === 'visible') {
      if (autoPlay) echartsPlay()
    } else {
      if (autoPlay) echartsPause()
    }
  }, [documentVisibility, autoPlay, echartsPlay, echartsPause])
  const [inViewport] = useInViewport(echartsRef)
  useUpdateEffect(() => {
    if (inViewport) {
      if (autoPlay) echartsPlay()
    } else {
      if (autoPlay) echartsPause()
    }
  }, [inViewport, autoPlay, echartsPlay, echartsPause])

  return (
    <div ref={echartsRef} className={cn('echarts-block w-full h-full', className)} style={{ ...style, ...widthStyle, ...heightStyle }} />
  )
}

export default EchartsBlock
