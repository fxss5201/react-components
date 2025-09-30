import { useEffect, useMemo, useState } from 'react'
import { Menu } from 'antd'
import { useTranslation } from 'react-i18next'
import { useRouter, useRoute } from '../Hooks/useRouter'
import { useTheme } from '../storeHooks/useTheme'
import { routers } from '../router'

function LayoutSider() {
  const { theme } = useTheme()
  const router = useRouter()
  const route = useRoute()
  const { t } = useTranslation()

  const [selectedKey, setSelectedKey] = useState(route)
  const [title, setTitle] = useState('')
  useEffect(() => {
    if (route === '') {
      setSelectedKey('home')
      setTitle(`${t('Menu.home')} | react-components`)
    } else {
      const location = routers.find(item => item.path === route)
      if (location) {
        setSelectedKey(location.meta.key)
        setTitle(`${t(`Menu.${location.meta.key}`)} | react-components`)
      }
    }
  }, [route, t])

  const menuItems = useMemo(() => {
    return routers.map(item => {
      return {
        key: item.meta.key,
        label: t(`Menu.${item.meta.key}`),
        icon: item.meta.icon,
      }
    })
  }, [t])

  function menuClickFn({ key }: { key: string }) {
    if (key === 'home') {
      router('')
    } else {
      const location = routers.find(item => item.meta.key === key)
      router(location?.path || '')
    }
  }

  return (
    <>
      <title>{title}</title>
      <Menu theme={theme} items={menuItems} selectedKeys={[selectedKey]} onClick={menuClickFn} />
    </>
  )
}

export default LayoutSider
