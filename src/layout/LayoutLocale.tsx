import { Popover } from 'antd'
import config, { localeList, type LocaleType } from '@/config'
import { useLocale } from '@/Hooks/useLocale'
import { useChangeLocale } from '@/Hooks/useChangeLocale'
import IconFont from '@/components/IconFont'
import cn from 'classnames'
import { useAClassStyles, usePopoverItemStyles } from '@/Hooks/useStyles'

const langMap = {
  zh: {
    label: '中文',
    icon: <IconFont type='icon-zh' />
  },
  en: {
    label: 'English',
    icon: <IconFont type='icon-en' />
  }
}
const localeItems = localeList.map(item => ({
  ...langMap[item],
  type: item
}))

function LayoutLocale({ className }: { className?: string }) {
  const locale = useLocale()
  const changeLocale = useChangeLocale()
  const { styles: aClassStyles } = useAClassStyles()
  const { styles: popoverItemStyles } = usePopoverItemStyles()

  return config.locales &&  (
    <Popover content={
      localeItems.map(item => (
        <div className={cn('cursor-pointer text-[14px] leading-[32px] px-2 rounded-sm', popoverItemStyles.popoverItem, { [popoverItemStyles.popoverItemActive]: item.type === locale })}
          key={item.type} onClick={() => changeLocale(item.type as LocaleType)}>
          {item.icon}
          <span className='ml-2'>{item.label}</span>
        </div>
      ))
    } classNames={{
      container: 'p-2'
    }}>
      <div className={cn('text-[24px] cursor-pointer', aClassStyles.aClass, className)}>
        {
          locale === 'zh' ? <IconFont type='icon-zh' /> : <IconFont type='icon-en' />
        }
      </div>
    </Popover>
  )
}

export default LayoutLocale
