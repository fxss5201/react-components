import MDXRender from '@/components/MDXRender'
import TablePageMdx from '@/mdx/TablePage/TablePage.mdx'

function TablePage() {
  return (
    <div className='px-4 pb-4'>
      <MDXRender>
        <TablePageMdx />
      </MDXRender>
    </div>
  )
}

export default TablePage
