import MDXRender from '@/components/MDXRender'
import DropElementMdx from '@/mdx/DropElement/DropElement.mdx'
import DropElementMdxEn from '@/mdx/en/DropElement/DropElement.mdx'
import { useLocale } from '@/Hooks/useLocale'

function DropUploadMdx() {
  const locale = useLocale()

  return (
    <div className='px-4 pb-4'>
      <MDXRender>
        {locale === 'zh' ? <DropElementMdx /> : <DropElementMdxEn />}
      </MDXRender>
    </div>
  )
}

export default DropUploadMdx
