import { useLocation } from 'react-router'
import { useNavigateFn } from '../Hooks/useNavigateFn'
import OutLinkIcon from './OutLinkIcon'
import cn from 'classnames'

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
        ? href
        : `/${href}`
        
  return (
    <a href={lastHref}
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
