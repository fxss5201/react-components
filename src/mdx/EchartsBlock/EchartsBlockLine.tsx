import EchartsPlayground from '@/components/EchartsPlayground'
import { type EchartsBlockProps } from '@/components/EchartsBlock'

function EchartsBlockLine() {
  const echartsData: EchartsBlockProps = {
    option: {
      title: {
        text: 'Echarts 折线图示例',
      },
      yAxis: {
        type: 'value',
      },
      series: [],
    },
    echartsType: 'line',
    echartsXAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    echartsData: [
      {
        name: '销量',
        data: [150, 230, 224, 218, 135, 147, 260],
      },
      {
        name: '销售额',
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
