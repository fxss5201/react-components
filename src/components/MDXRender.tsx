import { MDXProvider } from '@mdx-js/react'
import cn from 'classnames'
import CodeRender from './CodeRender'
import ALink from './ALink'
import { useTheme } from '../storeHooks/useTheme'

export type MDXRenderProps = {
  children: React.ReactNode
  className?: string
  codeClassName?: string
  enableCopy?: boolean
}

function MDXRender({ children, className, enableCopy = true }: MDXRenderProps) {
  const { theme } = useTheme()

  return (
    <div className={cn('markdown-body', className)}>
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
