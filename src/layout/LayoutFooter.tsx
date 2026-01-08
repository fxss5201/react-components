import cn from 'classnames'
import config from '@/config'
import { useTranslation } from 'react-i18next'
import ALink from '@/components/ALink'
// import { useAClassStyles } from '@/Hooks/useStyles'

function LayoutFooter({ className }: { className?: string }) {
  const { t } = useTranslation()
  // const { styles: aClassStyles } = useAClassStyles()

  return (
    <div className={cn('flex justify-between items-start', className)}>
      {config.footer?.links?.length && <div className='flex flex-wrap flex-auto mr-10'>
        {config.footer.links.map(item => (
          <ALink key={item.key} href={item.link} className={cn('mr-4', 'text-text-color hover:text-primary')}>
            {t(item.key || item.label, { defaultValue: item.label })}
          </ALink>
        ))}
      </div>}
      {config.footer?.recordInfo && <div className='flex-shrink-0'>
        <a href={config.footer.recordInfo.recordLink} target='_blank' rel='noreferrer' className='a-primary'>
          {config.footer.recordInfo.recordNumber}
        </a>
      </div>}
    </div>
  )
}

export default LayoutFooter
