import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from './../storeHooks/useTheme'
import { useNavigate } from 'react-router'

function MdRender({markdown}: {markdown: string}) {
  const { theme } = useTheme()
  const navigate = useNavigate()

  return (
    <div className='markdown-body'>
      <Markdown
        remarkPlugins={[remarkGfm]}
        children={markdown}
        components={{
          a(props) {
            const { href, children } = props
            // 判断是否为外部链接：以 http:// 或 https:// 开头
            const isExternal = /^https?:\/\//.test(href!)

            return (
              <a
                href={href}
                onClick={(e) => {
                  if (!isExternal) {
                    e.preventDefault()
                    navigate(href!)
                  }
                }}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {children}
              </a>
            )
          },
          code(props) {
            const {children, className, ...rest} = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={theme === 'dark' ? dark : undefined}
              />
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
