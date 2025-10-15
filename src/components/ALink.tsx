import { useLocation } from 'react-router'
import { useNavigateFn } from '../Hooks/useNavigateFn'
import OutLinkIcon from './OutLinkIcon'
import cn from 'classnames'

const BASE_URL = import.meta.env.BASE_URL

function ALink({
  href, children, className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const navigate = useNavigateFn()
  const { pathname } = useLocation()
  
  const isExternal = /^https?:\/\//.test(href)
  const lastHref = isExternal
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
          if (pathname !== lastHref) {
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
