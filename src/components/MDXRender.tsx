import { MDXProvider } from '@mdx-js/react'
import cn from 'classnames'

function MDXRender({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn('markdown-body', className)}>
      <MDXProvider>
        {children}
      </MDXProvider>
    </div>
  )
}

export default MDXRender
