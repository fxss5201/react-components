import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router'
import { useNavigateFn } from '../Hooks/useRouter'
import { Menu } from 'antd'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../storeHooks/useTheme'
import { routersTree, routersList } from '../router'
import type { RoutersType } from '../router'
import type { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

function LayoutSider() {
  const { theme } = useTheme()
  const navigate = useNavigateFn()
  const { pathname } = useLocation()
  const { t, i18n } = useTranslation()

  const [selectedKey, setSelectedKey] = useState(pathname)
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [title, setTitle] = useState('')
  useEffect(() => {
    const location = routersList.find(item => item.path === pathname)
    if (location) {
      setSelectedKey(location.path as string)
      // @ts-ignore
      setTitle(`${t(`Menu.${location.meta.key}`, { defaultValue: location.meta.label })} | react-components`)
    }
  }, [pathname, t])

  useEffect(() => {
    const openKeyList = pathname.split('/').filter(item => item !== '')
    const openKeyArray: string[] = []
    openKeyList.forEach((_, index) => {
      if (index < openKeyList.length) {
        openKeyArray.push(`/${openKeyList.slice(0, index).join('/')}`)
      }
    })
    setOpenKeys(openKeyArray)
  }, [pathname])

  function onOpenChange(keys: string[]) {
    setOpenKeys(keys)
  }

  function getMenuItems(routersTree: RoutersType[]): MenuItem[] {
    return routersTree.map(item => {
      return {
        key: item.path || '',
        // @ts-ignore
        label: t(`Menu.${item.meta?.key || item.path}`, { defaultValue: item.meta?.label }) || item.path || '',
        icon: item.meta?.icon,
        ...(
          item.children
            ? {
              children: getMenuItems(item.children),
            }
            : {}
        )
      }
    })
  }

  const menuItems = useMemo(() => {
    return getMenuItems(routersTree)
  }, [i18n.language])

  function menuClickFn({ key }: { key: string }) {
    if (key !== selectedKey) {
      const location = routersList.find(item => item.path === key)
      navigate(location!.path!)
    }
  }

  return (
    <>
      <title>{title}</title>
      <Menu theme={theme} items={menuItems} selectedKeys={[selectedKey]} openKeys={openKeys} onClick={menuClickFn} onOpenChange={onOpenChange} mode='inline' />
    </>
  )
}

export default LayoutSider
