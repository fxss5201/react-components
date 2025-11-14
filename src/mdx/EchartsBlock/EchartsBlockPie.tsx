import EchartsPlayground from '@/components/EchartsPlayground'
import { type EchartsBlockProps } from '@/components/EchartsBlock'

function EchartsBlockPie() {
  const echartsData: EchartsBlockProps = {
    option: {
      title: {
        text: 'Echarts 饼图示例',
      },
      series: [],
    },
    echartsType: 'pie',
    echartsData: [
      {
        name: '销量',
        data: [
          { name: '周一', value: 150 },
          { name: '周二', value: 230 },
          { name: '周三', value: 224 },
          { name: '周四', value: 218 },
          { name: '周五', value: 135 },
          { name: '周六', value: 147 },
          { name: '周日', value: 260 },
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
