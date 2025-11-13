import MDXRender from '@/components/MDXRender'
import MdRenderMdx from '@/mdx/MdRender/MdRender.mdx'
import MdRenderMdxEn from '@/mdx/en/MdRender/MdRender.mdx'
import { useLocale } from '@/Hooks/useLocale'

function MdRenderPage() {
  const locale = useLocale()

  return (
    <div className='px-4 pb-4'>
      <MDXRender>
        {locale === 'zh' ? <MdRenderMdx /> : <MdRenderMdxEn />}
      </MDXRender>
    </div>
  )
}

export default MdRenderPage
