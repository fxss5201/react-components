import Markdown from 'react-markdown'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import { useTheme } from '../storeHooks/useTheme'
import ALink from './ALink'
import cn from 'classnames'
import CodeRender from './CodeRender'

export type MdRenderProps = {
  children: string
  className?: string
  codeClassName?: string
  enableCopy?: boolean
}
function MdRender({children, className, codeClassName, enableCopy = true}: MdRenderProps) {
  const { theme } = useTheme()

  return (
    <div className={cn('markdown-body', className)}>
      <Markdown
        remarkPlugins={[remarkFrontmatter, remarkGfm, [remarkToc, { heading: 'TOC|目录' }]]}
        rehypePlugins={[rehypeSlug]}
        children={children}
        components={{
          a(props) {
            const { href, children } = props
            return (
              <ALink href={href || ''}>{children}</ALink>
            )
          },
          code(props) {
            return (
              <CodeRender {...props} theme={theme} enableCopy={enableCopy} codeClassName={codeClassName}></CodeRender>
            )
          }
        }}
      />
    </div>
  )
}

export default MdRender
