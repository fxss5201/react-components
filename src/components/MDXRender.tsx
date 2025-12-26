import { MDXProvider } from '@mdx-js/react'
import cn from 'classnames'
import CodeRender from './CodeRender'
import ALink from './ALink'
import { useTheme } from '@/storeHooks/useTheme'
import { useMarkdownBodyStyles } from '@/Hooks/useStyles'

export type MDXRenderProps = {
  /**
   * @description 初始值。|| Initial value.
   */
  children: React.ReactNode
  /**
   * @description 自定义类名。|| Custom class name.
   */
  className?: string
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

function MDXRender({ children, className, enableCopy = true }: MDXRenderProps) {
  const { theme } = useTheme()
  const { styles } = useMarkdownBodyStyles()

  return (
    <div className={cn('markdown-body', className, styles.markdownBody)}>
      <MDXProvider components={{
        a(props) {
          const { href, children } = props
          return (
            <ALink href={href || ''}>{children}</ALink>
          )
        },
        code(props) {
          return (
            <CodeRender {...props} theme={theme} enableCopy={enableCopy}></CodeRender>
          )
        }
      }}>
        {children}
      </MDXProvider>
    </div>
  )
}

export default MDXRender
