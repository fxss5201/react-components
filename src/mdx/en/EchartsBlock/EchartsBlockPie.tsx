import EchartsPlayground from '@/components/EchartsPlayground'
import { type EchartsBlockProps } from '@/components/EchartsBlock'

function EchartsBlockPie() {
  const echartsData: EchartsBlockProps = {
    option: {
      title: {
        text: 'Echarts Pie Chart Example',
      },
      series: [],
    },
    echartsType: 'pie',
    echartsData: [
      {
        name: 'Sales',
        data: [
          { name: 'Monday', value: 150 },
          { name: 'Tuesday', value: 230 },
          { name: 'Wednesday', value: 224 },
          { name: 'Thursday', value: 218 },
          { name: 'Friday', value: 135 },
          { name: 'Saturday', value: 147 },
          { name: 'Sunday', value: 260 },
        ],
      }
    ],
    autoPlay: true,
  }

  return (
    <EchartsPlayground>
      {echartsData}
    </EchartsPlayground>
  )
}

export default EchartsBlockPie
