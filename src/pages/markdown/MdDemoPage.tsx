import { useLocale } from '@/Hooks/useLocale'
import Playground from '@/components/Playground'
import MdDemo from './MdDemo'
import MdDemoRaw from './MdDemo.tsx?raw'

function MdDemoPage() {
  const locale = useLocale()
  return (
    <div className='px-4 pb-4'>
      <Playground code={MdDemoRaw} title={locale === 'zh' ? 'Markdown 演示示例' : 'Markdown Demo'} description={locale === 'zh' ? 'Markdown 组件的演示示例，展示了如何使用 Markdown 组件渲染 Markdown 内容。' : 'Demo of Markdown component, showing how to use Markdown component to render Markdown content.'}>
        <MdDemo />
      </Playground>
    </div>
  )
}

export default MdDemoPage
