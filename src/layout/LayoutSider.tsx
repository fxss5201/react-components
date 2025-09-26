import { useEffect, useMemo, useState } from 'react'
import { Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router'
import { useTheme } from './../storeHooks/useTheme'
import { routers } from './../router'

function LayoutSider() {
  const { theme } = useTheme()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [selectedKey, setSelectedKey] = useState(pathname)
  const [title, setTitle] = useState('')
  useEffect(() => {
    if (pathname === '/') {
      setSelectedKey('home')
      setTitle('首页 | react-components')
    } else {
      const location = routers.find(item => item.path === pathname)
      if (location) {
        setSelectedKey(location.meta.key)
        setTitle(`${location.meta.label} | react-components`)
      }
    }
  }, [pathname])

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
    if (key === 'home') {
      navigate('/')
    } else {
      navigate(key)
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
