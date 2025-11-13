import MDXRender from '@/components/MDXRender'
import CopyToClipboardMdx from '@/mdx/CopyToClipboard/CopyToClipboard.mdx'
import CopyToClipboardMdxEn from '@/mdx/en/CopyToClipboard/CopyToClipboard.mdx'
import { useLocale } from '@/Hooks/useLocale'

function CopyToClipboardPage() {
  const locale = useLocale()

  return (
    <div className='px-4 pb-4'>
      <MDXRender>
        {locale === 'zh' ? <CopyToClipboardMdx /> : <CopyToClipboardMdxEn />}
      </MDXRender>
    </div>
  )
}

export default CopyToClipboardPage
