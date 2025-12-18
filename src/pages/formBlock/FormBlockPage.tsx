import MDXRender from '@/components/MDXRender'
import FormBlockMdx from '@/mdx/FormBlock/FormBlock.mdx'

function FormBlockPage() {
  return (
    <div className='px-4 pb-4'>
      <MDXRender>
        <FormBlockMdx />
      </MDXRender>
    </div>
  )
}

export default FormBlockPage
