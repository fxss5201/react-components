import EchartsPlayground from '@/components/EchartsPlayground'
import { type EchartsBlockProps } from '@/components/EchartsBlock'

function EchartsBlockLine() {
  const echartsData: EchartsBlockProps = {
    option: {
      title: {
        text: 'Echarts Line Chart Example',
      },
      yAxis: {
        type: 'value',
      },
      series: [],
    },
    echartsType: 'line',
    echartsXAxisData: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    echartsData: [
      {
        name: 'Sales',
        data: [150, 230, 224, 218, 135, 147, 260],
      },
      {
        name: 'Revenue',
        data: [120, 200, 150, 230, 224, 218, 135],
      },
    ],
    autoPlay: true,
  }

  return (
    <EchartsPlayground>
      {echartsData}
    </EchartsPlayground>
  )
}

export default EchartsBlockLine
