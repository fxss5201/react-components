import EchartsPlayground from '@/components/EchartsPlayground'
import { type EchartsBlockProps } from '@/components/EchartsBlock'

function EchartsBlockDemo() {
  const echartsData: EchartsBlockProps = {
    option: {
      title: {
        text: 'Echarts 图表示例',
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
