import { Descriptions, Image, Button } from 'antd'
import type { DescriptionsProps } from 'antd'
import { useUser } from '@/storeHooks/useUser'
import { useTranslation } from 'react-i18next'

function UserInfoPage() {
  const { t } = useTranslation()
  const { id, name, img, badge, permissionList, changeUserInfo } = useUser()
  const items: DescriptionsProps['items'] = [
    {
      label: 'Id',
      children: id,
    },
    {
      label: t('userInfo.name', { defaultValue: '用户名' }),
      children: name,
      span: 'filled',
    },
    {
      label: t('userInfo.badge', { defaultValue: '用户消息' }),
      children: badge,
    },
    {
      label: t('userInfo.permissionList', { defaultValue: '权限列表' }),
      children: permissionList?.join(', ') || '',
      span: 'filled',
    },
    {
      label: t('userInfo.img', { defaultValue: '用户头像' }),
      children: <Image width={80} alt={name} src={img} />,
      span: 'filled',
    }
  ]

  return (
    <div className='px-4 pb-4'>
      <Descriptions
        bordered
        title={t('userInfo.title', { defaultValue: '用户信息' })}
        items={items}
        extra={
          <Button type='primary' onClick={() => {
            changeUserInfo({ id, name: name === 'admin' ? 'user' : 'admin', img, badge, permissionList: name === 'admin' ? ['01', '02'] : ['01', '02', '03', '09'] })
          }}>{t('userInfo.edit', { defaultValue: '编辑权限' })}</Button>
        }
      />
    </div>
  )
}

export default UserInfoPage
