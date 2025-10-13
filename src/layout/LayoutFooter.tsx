import cn from 'classnames'
import config from '../config'
import OutLinkIcon from '../components/OutLinkIcon'
import { useRouter, useRoute } from '../Hooks/useRouter'
import { useTranslation } from 'react-i18next'

const BASE_URL = import.meta.env.BASE_URL

function LayoutFooter({ className }: { className?: string }) {
  const router = useRouter()
  const route = useRoute()
  const { t } = useTranslation()

  return (
    <div className={cn('flex justify-between items-start', className)}>
      {config.footer.links?.length && <div className='flex flex-wrap flex-auto mr-10'>
        {config.footer.links.map(item => {
          const href = item.link
          const isExternal = /^https?:\/\//.test(href)
            // 统一处理链接，外部链接则不动，内部链接需要去掉 BASE_URL 前缀
            const lastHref = isExternal
              ? href
              : href?.startsWith(BASE_URL)
                ? href?.substring(BASE_URL.length)
                : href?.startsWith(BASE_URL.substring(1))
                  ? href?.substring(BASE_URL.substring(1).length)
                  : href
          return (
            <a key={item.key}
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
              className='text-inherit hover:text-blue-600 mr-4'>
              {t(item.key, { defaultValue: item.label })}{isExternal ? <OutLinkIcon /> : ''}
            </a>
          )
        })}
      </div>}
      {config.footer.recordInfo && <div className='flex-shrink-0'>
        <a href={config.footer.recordInfo.recordLink} target='_blank' rel='noreferrer' className='text-inherit hover:text-blue-600'>
          {config.footer.recordInfo.recordNumber}
        </a>
      </div>}
    </div>
  )
}

export default LayoutFooter
