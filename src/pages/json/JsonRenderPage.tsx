import MDXRender from '@/components/MDXRender'
import JsonRenderMdx from '@/mdx/JsonRender/JsonRender.mdx'
import JsonRenderMdxEn from '@/mdx/en/JsonRender/JsonRender.mdx'
import { useLocale } from '@/Hooks/useLocale'

function JsonRenderPage() {
  const locale = useLocale()

  return (
    <div className='px-4 pb-4'>
      <MDXRender>
        {locale === 'zh' ? <JsonRenderMdx /> : <JsonRenderMdxEn />}
      </MDXRender>
    </div>
  )
}

export default JsonRenderPage
