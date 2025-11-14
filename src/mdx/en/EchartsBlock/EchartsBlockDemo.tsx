import EchartsPlayground from '@/components/EchartsPlayground'
import { type EchartsBlockProps } from '@/components/EchartsBlock'

function EchartsBlockDemo() {
  const echartsData: EchartsBlockProps = {
    option: {
      title: {
        text: 'Echarts Chart Example',
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      },
      yAxis: {
        type: 'value',
      },
      series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      }],
    },
  }

  return (
    <EchartsPlayground>
      {echartsData}
    </EchartsPlayground>
  )
}

export default EchartsBlockDemo
