import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from '../storeHooks/useTheme'
import CopyToClipboard from './CopyToClipboard'
import ALink from './ALink'
import cn from 'classnames'

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
            const {children, className, ...rest} = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <div className='relative'>
                <div className='absolute top-[-24px] right-[-16px] z-10'>
                  <CopyToClipboard text={children as string}></CopyToClipboard>
                </div>
                <SyntaxHighlighter
                  PreTag="div"
                  className="code-block"
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  showLineNumbers={true}
                  style={theme === 'dark' ? dark : undefined}
                />
              </div>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          }
        }}
      />
    </div>
  )
}

export default MdRender
