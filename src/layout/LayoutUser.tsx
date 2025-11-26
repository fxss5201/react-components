import { Avatar, Badge, Popover } from 'antd'
import cn from 'classnames'
import { LogoutOutlined } from '@ant-design/icons'
import { useUser } from '@/storeHooks/useUser'
import { useNavigateFn } from '@/Hooks/useNavigateFn'
import config from '@/config'
import { useTheme } from '@/storeHooks/useTheme'
import { useTranslation } from 'react-i18next'

function LayoutUser({ className }: { className?: string }) {
  const { name, img, badge, changeUserInfo } = useUser()
  const { theme } = useTheme()
  const navigate = useNavigateFn()
  const { t } = useTranslation()

  const clickFn = (type: string) => {
    if (type === 'logout') {
      logoutFn()
    }
  }

  const logoutFn = () => {
    localStorage.removeItem(config.loginLocalStorageKey)
    changeUserInfo({ id: '', name: '', img: '', badge: 0, permissionList: [] })
    navigate('/login')
  }

  return (
    <Popover content={
      [
        { type: 'logout', label: t('system.Logout', { defaultValue: '退出登录' }), icon: <LogoutOutlined /> }
      ].map(item => (
        <div className={cn('cursor-pointer text-[14px] leading-[32px] px-2 hover:bg-blue-100 dark:hover:bg-gray-600 rounded-sm')}
          key={item.type} onClick={() => clickFn(item.type)}>
          {item.icon}
          <span className='ml-2'>{item.label}</span>
        </div>
      ))
    } classNames={{
      body: 'p-2'
    }}>
      <div className={cn('cursor-pointer hover:text-[#1677ff]', className)}>
        <Badge count={badge} size="small">
          <Avatar
            src={img || undefined}
            alt={name}
            size={24}
            shape='square'
            gap={1}
            style={{ color: theme === 'dark' ? 'rgba(255, 255, 255, 0.85)' : '#fff', backgroundColor: !img ? '#1677ff' : 'unset' }}
          >{name}</Avatar>
        </Badge>
      </div>
    </Popover>
  )
}

export default LayoutUser
