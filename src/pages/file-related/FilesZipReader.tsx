import MDXRender from '@/components/MDXRender'
import FilesZipReaderMdx from '@/mdx/FilesZipReader/FilesZipReader.mdx'

function FilesZipReader() {
  return (
    <div className='px-4 pb-4'>
      <MDXRender>
        <FilesZipReaderMdx />
      </MDXRender>
    </div>
  )
}

export default FilesZipReader
