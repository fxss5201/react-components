import MDXRender from '@/components/MDXRender'
import FileHashMdx from '@/mdx/FileHash/FileHash.mdx'
import FileHashMdxEn from '@/mdx/en/FileHash/FileHash.mdx'
import { useLocale } from '@/Hooks/useLocale'

function FileHash() {
  const locale = useLocale()

  return (
    <div className='px-4 pb-4'>
      <MDXRender>
        {locale === 'zh' ? <FileHashMdx /> : <FileHashMdxEn />}
      </MDXRender>
    </div>
  )
}

export default FileHash
