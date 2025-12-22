import { useNavigate } from 'react-router'
import OutLinkIcon from './OutLinkIcon'
import cn from 'classnames'

const BASE_URL = import.meta.env.BASE_URL

export type ALinkProps = {
  /**
   * @description 链接地址。|| Link address.
   */
  href: string
  /**
   * @description 链接文本。|| Link text.
   */
  children: React.ReactNode
  /**
   * @description 自定义类名。|| Custom class name.
   */
  className?: string
}

function ALink({
  href, children, className,
}: ALinkProps) {
  const navigate = useNavigate()
  
  const isExternal = /^https?:\/\//.test(href)
  const lastHref = isExternal
    ? href
    : (!href.startsWith('#/') && href.startsWith('#'))
      ? href
      : href?.startsWith('/')
        ? href?.startsWith(BASE_URL)
          ? `/${href.replace(BASE_URL, '')}`
          : href
        : (BASE_URL !== '/' && href?.startsWith(BASE_URL.slice(1)))
          ? `/${href.replace(BASE_URL.slice(1), '')}`
          : `/${href}`
  const showHref = isExternal
    ? href
    : (!href.startsWith('#/') && href.startsWith('#'))
      ? href
      : href?.startsWith('/')
        ? href?.startsWith(BASE_URL)
          ? href
          : `${BASE_URL}${href.slice(1)}`
        : (BASE_URL !== '/' && href?.startsWith(BASE_URL.slice(1)))
          ? `/${href}`
          : `${BASE_URL}${href}`
        
  return (
    <a href={showHref}
      onClick={(e) => {
        if (!isExternal) {
          e.preventDefault()
          if (!href.startsWith('#/') && href.startsWith('#')) {
            // 先更新URL但不触发完整的路由导航
            window.history.replaceState({}, '', lastHref)
            // 然后执行滚动操作
            document.querySelector(decodeURIComponent(lastHref))?.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' })
          } else {
            navigate(lastHref)
          }
        }
      }}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn(className)}>
      {children}{isExternal ? <OutLinkIcon /> : ''}
    </a>
  )
}

export default ALink
