import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from '../storeHooks/useTheme'
import { useRouter, useRoute } from '../Hooks/useRouter'
import CopyToClipboard from './CopyToClipboard'
import { LinkOutlined } from '@ant-design/icons'

const BASE_URL = import.meta.env.BASE_URL

// 内部链接支持 相对路径（相对于 location.pathname 去除 BASE_URL ）和绝对路径（ location.pathname ）
function MdRender({md}: {md: string}) {
  const { theme } = useTheme()
  const router = useRouter()
  const route = useRoute()

  return (
    <div className='markdown-body'>
      <Markdown
        remarkPlugins={[remarkGfm]}
        children={md}
        components={{
          a(props) {
            const { href, children } = props
            // 判断是否为外部链接：以 http:// 或 https:// 开头
            const isExternal = /^https?:\/\//.test(href!)
            // 统一处理链接，外部链接则不动，内部链接需要去掉 BASE_URL 前缀
            const lastHref = isExternal
              ? href
              : href?.startsWith(BASE_URL)
                ? href?.substring(BASE_URL.length)
                : href?.startsWith(BASE_URL.substring(1))
                  ? href?.substring(BASE_URL.substring(1).length)
                  : href

            return (
              <a
                href={lastHref}
                onClick={(e) => {
                  if (!isExternal) {
                    e.preventDefault()
                    if (route !== lastHref) {
                      router(lastHref!)
                    }
                  }
                }}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {isExternal ? <LinkOutlined /> : null}{children}
              </a>
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
