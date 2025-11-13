import MDXRender from '@/components/MDXRender'
import FilesSelectMdx from '@/mdx/FilesSelect/FilesSelect.mdx'
import FilesSelectMdxEn from '@/mdx/en/FilesSelect/FilesSelect.mdx'
import { useLocale } from '@/Hooks/useLocale'

function FilesUploadMdx() {
  const locale = useLocale()

  return (
    <div className='px-4 pb-4'>
      <MDXRender>
        {locale === 'zh' ? <FilesSelectMdx /> : <FilesSelectMdxEn />}
      </MDXRender>
    </div>
  )
}

export default FilesUploadMdx
