import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useTheme } from '../storeHooks/useTheme'
import ALink from './ALink'
import cn from 'classnames'
import CodeRender from './CodeRender'

function MdRender({md, className}: {md: string; className?: string}) {
  const { theme } = useTheme()

  return (
    <div className={cn('markdown-body', className)}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        children={md}
        components={{
          a(props) {
            const { href, children } = props
            return (
              <ALink href={href || ''}>{children}</ALink>
            )
          },
          code(props) {
            return (
              <CodeRender {...props} theme={theme}></CodeRender>
            )
          }
        }}
      />
    </div>
  )
}

export default MdRender
