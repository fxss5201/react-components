import MDXRender from '@/components/MDXRender'
import FilesDropSelectMdx from '@/mdx/FilesDropSelect/FilesDropSelect.mdx'
import FilesDropSelectMdxEn from '@/mdx/en/FilesDropSelect/FilesDropSelect.mdx'
import { useLocale } from '@/Hooks/useLocale'

function FilesDropSelect() {
  const locale = useLocale()

  return (
    <div className='px-4 pb-4'>
      <MDXRender>
        {locale === 'zh' ? <FilesDropSelectMdx /> : <FilesDropSelectMdxEn />}
      </MDXRender>
    </div>
  )
}

export default FilesDropSelect
