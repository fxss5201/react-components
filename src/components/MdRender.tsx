import Markdown from 'react-markdown'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import { useTheme } from '@/storeHooks/useTheme'
import ALink from './ALink'
import cn from 'classnames'
import CodeRender from './CodeRender'

export type MdRenderProps = {
  /**
   * @description 初始值。|| Initial value.
   */
  children: string
  /**
   * @description 自定义类名。|| Custom class name.
   */
  className?: string
  /**
   * @description 自定义样式。|| Custom style.
   */
  style?: React.CSSProperties
  /**
   * @description 代码块自定义类名。|| Code block custom class name.
   */
  codeClassName?: string
  /**
   * @description 是否启用复制。|| Whether to enable copy.
   * @default true
   */
  enableCopy?: boolean
}
function MdRender({children, className, style, codeClassName, enableCopy = true}: MdRenderProps) {
  const { theme } = useTheme()

  return (
    <div className={cn('markdown-body', className)} style={style}>
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
