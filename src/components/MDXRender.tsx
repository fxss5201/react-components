import { MDXProvider } from '@mdx-js/react'
import cn from 'classnames'
import CodeRender from './CodeRender'
import ALink from './ALink'

function MDXRender({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn('markdown-body', className)}>
      <MDXProvider components={{
        a(props) {
          const { href, children } = props
          return (
            <ALink href={href || ''}>{children}</ALink>
          )
        },
        code: CodeRender,
      }}>
        {children}
      </MDXProvider>
    </div>
  )
}

export default MDXRender
