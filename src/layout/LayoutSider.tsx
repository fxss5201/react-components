import { useEffect, useMemo, useState } from 'react'
import { Menu } from 'antd'
import { useRouter, useRoute } from '../Hooks/useRouter'
import { useTheme } from '../storeHooks/useTheme'
import { routers } from '../router'

function LayoutSider() {
  const { theme } = useTheme()
  const router = useRouter()
  const route = useRoute()

  const [selectedKey, setSelectedKey] = useState(route)
  const [title, setTitle] = useState('')
  useEffect(() => {
    if (route === '') {
      setSelectedKey('home')
      setTitle('首页 | react-components')
    } else {
      const location = routers.find(item => item.path === route)
      if (location) {
        setSelectedKey(location.meta.key)
        setTitle(`${location.meta.label} | react-components`)
      }
    }
  }, [route])

  const menuItems = useMemo(() => {
    return routers.map(item => {
      return {
        key: item.meta.key,
        label: item.meta.label,
        icon: item.meta.icon,
      }
    })
  }, [])

  function menuClickFn({ key }: { key: string }) {
    console.log(key)
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
