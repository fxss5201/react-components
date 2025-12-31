import MDXRender from '@/components/MDXRender'
import FilesZipWriterMdx from '@/mdx/FilesZipWriter/FilesZipWriter.mdx'

function FilesZipWriter() {
  return (
    <div className='px-4 pb-4'>
      <MDXRender>
        <FilesZipWriterMdx />
      </MDXRender>
    </div>
  )
}

export default FilesZipWriter
