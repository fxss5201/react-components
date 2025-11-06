import MDXRender from '../../components/MDXRender'
import JsonEditorMdx from '../../mdx/JsonEditor/JsonEditor.mdx'
import JsonEditorMdxEn from '../../mdx/en/JsonEditor/JsonEditor.mdx'
import { useLocale } from '../../Hooks/useLocale'

function JsonEditorPage() {
  const locale = useLocale()

  return (
    <div className='px-4 pb-4'>
      <MDXRender>
        {locale === 'zh' ? <JsonEditorMdx /> : <JsonEditorMdxEn />}
      </MDXRender>
    </div>
  )
}

export default JsonEditorPage
