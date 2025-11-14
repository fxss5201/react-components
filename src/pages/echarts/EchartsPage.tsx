import MDXRender from '@/components/MDXRender'
import EchartsBlockMdx from '@/mdx/EchartsBlock/EchartsBlock.mdx'
import EchartsBlockMdxEn from '@/mdx/en/EchartsBlock/EchartsBlock.mdx'
import { useLocale } from '@/Hooks/useLocale'

function EchartsPage() {
  const locale = useLocale()

  return (
    <div className='px-4 pb-4'>
      <MDXRender>
        {locale === 'zh' ? <EchartsBlockMdx /> : <EchartsBlockMdxEn />}
      </MDXRender>
    </div>
  )
}

export default EchartsPage
