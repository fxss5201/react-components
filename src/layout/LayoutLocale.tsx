import { Popover } from 'antd'
import config, { type LocaleType } from '../config'
import { useLocale } from '../Hooks/useLocale'
import { useChangeLocale } from '../Hooks/useChangeLocale'
import IconFont from '../components/IconFont'
import cn from 'classnames'

function LayoutLocale({ className }: { className?: string }) {
  const locale = useLocale()
  const changeLocale = useChangeLocale()

  return config.locales &&  (
    <Popover content={
      [
        { type: 'zh', label: '中文', icon: <IconFont type='icon-zh' /> },
        { type: 'en', label: 'English', icon: <IconFont type='icon-en' /> },
      ].map(item => (
        <div className={cn('cursor-pointer text-[14px] leading-[32px] px-2 hover:bg-blue-100 dark:hover:bg-gray-600 rounded-sm', { 'text-[#1677ff]': item.type === locale })}
          key={item.type} onClick={() => changeLocale(item.type as LocaleType)}>
          {item.icon}
          <span className='ml-2'>{item.label}</span>
        </div>
      ))
    } classNames={{
      body: 'p-2'
    }}>
      <div className={cn('text-[24px] cursor-pointer hover:text-[#1677ff]', className)}>
        {
          locale === 'zh' ? <IconFont type='icon-zh' /> : <IconFont type='icon-en' />
        }
      </div>
    </Popover>
  )
}

export default LayoutLocale
