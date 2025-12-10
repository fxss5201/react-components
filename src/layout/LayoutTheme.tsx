import { Popover } from 'antd'
import { SyncOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons'
import { useTheme } from '@/storeHooks/useTheme'
import cn from 'classnames'
import config, { themeList, type ThemeType } from '@/config'
import { useTranslation } from 'react-i18next'
import { useAClassStyles, usePopoverItemStyles } from '@/Hooks/useStyles'

function LayoutTheme({ className }: { className?: string }) {
  const { storeTheme, changeTheme } = useTheme()
  const { t } = useTranslation()
  const { styles: aClassStyles } = useAClassStyles()
  const { styles: popoverItemStyles } = usePopoverItemStyles()
  
  const themeMap = {
    system: {
      label: t('system.Follow system', { defaultValue: '跟随系统' }),
      icon: <SyncOutlined />
    },
    light: {
      label: t('system.Light mode', { defaultValue: '亮色模式' }),
      icon: <SunOutlined />
    },
    dark: {
      label: t('system.Dark mode', { defaultValue: '暗黑模式' }),
      icon: <MoonOutlined />
    }
  }
  const list = config.autoChangeTheme ? themeList : themeList.filter(item => item !== 'system')
  const themeItems = list.map(item => ({
    ...themeMap[item],
    type: item
  }))

  return config.theme && (
    <Popover content={
      themeItems.map(item => (
        <div className={cn('cursor-pointer text-[14px] leading-[32px] px-2 rounded-sm', popoverItemStyles.popoverItem, { [popoverItemStyles.popoverItemActive]: storeTheme === item.type })}
          key={item.type} onClick={() => changeTheme(item.type as ThemeType)}>
          {item.icon}
          <span className='ml-2'>{item.label}</span>
        </div>
      ))
    } classNames={{
      container: 'p-2'
    }}>
      <div className={cn('text-[24px] cursor-pointer', aClassStyles.aClass, className)}>
        {
          storeTheme === 'dark' ? <MoonOutlined /> : storeTheme === 'light' ? <SunOutlined /> : <SyncOutlined />
        }
      </div>
    </Popover>
  )
}

export default LayoutTheme
