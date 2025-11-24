import { useEffect, useRef, useContext, useImperativeHandle } from 'react'
import * as echarts from 'echarts'
import cn from 'classnames'
import { useSize } from 'ahooks'
import LocaleContext from '@/context/LocaleContext'
import { type LocaleType } from '@/config'
import { useTheme } from '@/storeHooks/useTheme'
import merge from 'lodash/merge'

export type EchartsType = 'line' | 'bar' | 'pie'
export type EchartsDataLeafItem = {
  name?: string
  value: number
}
export type EchartsDataItem = {
  name?: string
  data: EchartsDataLeafItem[] | number[]
}
export type EchartsData = EchartsDataItem[]

export type EchartsBlockProps = {
  className?: string
  width?: string | number
  height?: string | number
  style?: React.CSSProperties
  opts?: echarts.EChartsInitOpts
  option: echarts.EChartsOption
  loading?: boolean
  locale?: LocaleType
  theme?: 'dark' | 'light'
  ref?: React.Ref<{
    echartsInstance: echarts.ECharts
  }>
  // echartsType 和 echartsData 设置之后会覆盖 option 中的 series 数据，提供数据和option分离的设置方法
  echartsType?: EchartsType
  // echartsXAxisData 设置之后会覆盖 option 中的 xAxis 数据，echartsType 为 line 或 bar 时生效
  echartsXAxisData?: string[]
  echartsData?: EchartsData
  autoPlay?: boolean | {
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
  locale,
  theme,
  ref,
  echartsType,
  echartsXAxisData,
  echartsData,
  autoPlay = false,
}: EchartsBlockProps) {
  const localeContext = useContext(LocaleContext)
  const currentLocale = locale || localeContext || 'zh'
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

  function echartsInit () {
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
  }
  function echartsSetOption (option: echarts.EChartsOption) {
    echartsInstance.current?.setOption(option)
  }
  function echartsDispose () {
    echartsInstance.current?.dispose()
    echartsInstance.current = null
  }
  function echartsResize () {
    echartsInstance.current?.resize()
  }
  function echartsLoading (loading: boolean) {
    if (loading) {
      echartsInstance.current?.showLoading('default', {
        text: currentLocale === 'zh' ? '加载中...' : 'Loading...',
        fontSize: 14,
      })
    } else {
      echartsInstance.current?.hideLoading()
    }
  }
  function echartsSetData (echartsType: EchartsType, echartsXAxisData?: string[], echartsData?: EchartsData) {
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
  }
  function echartsPlay () {
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
  }
  function echartsPause () {
    if (playIntervalRef.current) {
      window.clearInterval(playIntervalRef.current)
      playIntervalRef.current = null
    }
  }
  function echartsAddEvents () {
    echartsInstance.current?.on('mouseover', 'series', (event: any) => {
      playIndex.current = event.dataIndex
    })
    echartsInstance.current?.getZr().on('mousemove', () => {
      echartsPause()
    })
    echartsInstance.current?.getZr().on('mouseout', () => {
      echartsPlay()
    })
  }
  function echartsRemoveEvents () {
    echartsInstance.current?.off('mouseover')
    echartsInstance.current?.getZr().off('mousemove')
    echartsInstance.current?.getZr().off('mouseout')
  }

  useEffect(() => {
    echartsInit()
    return () => {
      echartsDispose()
      if (autoPlay) {
        echartsPause()
        echartsRemoveEvents()
      }
    }
  }, [])
  useEffect(() => {
    echartsInit()
  }, [opts])
  useEffect(() => {
    if (echartsType) {
      echartsSetData(echartsType, echartsXAxisData, echartsData)
    } else {
      echartsSetOption(option)
    }
  }, [option])
  useEffect(() => {
    echartsLoading(loading)
  }, [loading])
  const size = useSize(echartsRef)
  useEffect(() => {
    echartsResize()
  }, [size])
  useImperativeHandle(ref, () => ({
    echartsInstance: echartsInstance.current!,
  }))

  return (
    <div ref={echartsRef} className={cn('echarts-block w-full h-full', className)} style={{ ...style, ...widthStyle, ...heightStyle }} />
  )
}

export default EchartsBlock
