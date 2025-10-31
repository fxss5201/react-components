import MDXRender from '../../components/MDXRender'
import FilesUploadDrawerMdx from '../../mdx/FilesUploadDrawer/FilesUploadDrawer.mdx'
import FilesUploadDrawerMdxEn from '../../mdx/en/FilesUploadDrawer/FilesUploadDrawer.mdx'
import { useLocale } from '../../Hooks/useLocale'

function FilesUpload() {
  const locale = useLocale()

  return (
    <div className='px-4 pb-4'>
      <MDXRender>
        {locale === 'zh' ? <FilesUploadDrawerMdx /> : <FilesUploadDrawerMdxEn />}
      </MDXRender>
    </div>
  )
}

export default FilesUpload
