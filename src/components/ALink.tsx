import { useRouter, useRoute } from '../Hooks/useRouter'
import OutLinkIcon from './OutLinkIcon'

const BASE_URL = import.meta.env.BASE_URL

function ALink({
  href, children,
}: {
  href: string
  children: React.ReactNode
}) {
  const router = useRouter()
  const route = useRoute()

  const isExternal = /^https?:\/\//.test(href)
    // 统一处理链接，外部链接则不动，内部链接需要去掉 BASE_URL 前缀
    // 内部链接支持 相对路径（相对于 location.pathname 去除 BASE_URL ）和绝对路径（ location.pathname ）
    const lastHref = isExternal
      ? href
      : href?.startsWith(BASE_URL)
        ? href?.substring(BASE_URL.length)
        : href?.startsWith(BASE_URL.substring(1))
          ? href?.substring(BASE_URL.substring(1).length)
          : href
  return (
    <a href={lastHref}
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
      className='text-inherit hover:text-blue-600 mr-4'>
      {children}{isExternal ? <OutLinkIcon /> : ''}
    </a>
  )
}

export default ALink
