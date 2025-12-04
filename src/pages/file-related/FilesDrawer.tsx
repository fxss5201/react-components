import MDXRender from '@/components/MDXRender'
import FilesDrawerMdx from '@/mdx/FilesDrawer/FilesDrawer.mdx'
import FilesDrawerMdxEn from '@/mdx/en/FilesDrawer/FilesDrawer.mdx'
import { useLocale } from '@/Hooks/useLocale'

function FilesDrawer() {
  const locale = useLocale()

  return (
    <div className='px-4 pb-4'>
      <MDXRender>
        {locale === 'zh' ? <FilesDrawerMdx /> : <FilesDrawerMdxEn />}
      </MDXRender>
    </div>
  )
}

export default FilesDrawer
