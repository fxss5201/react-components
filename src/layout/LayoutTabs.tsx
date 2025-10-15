import cn from 'classnames'
import React, { useMemo, useState } from 'react'
import { useLocation } from 'react-router'
import type { DragEndEvent } from '@dnd-kit/core'
import { closestCenter, DndContext, PointerSensor, useSensor } from '@dnd-kit/core'
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Tabs } from 'antd'
import { useLayoutTabs } from '../storeHooks/useLayoutTabs'
import { routersList } from '../router'
import { useTranslation } from 'react-i18next'
import { useNavigateFn } from '../Hooks/useNavigateFn'
import { Menu, Item, useContextMenu } from 'react-contexify'
import { type ItemParams } from 'react-contexify'
import 'react-contexify/dist/ReactContexify.css'
import { useTheme } from '../storeHooks/useTheme'
import { CloseOutlined, LeftSquareOutlined, RightSquareOutlined, CloseSquareOutlined } from '@ant-design/icons'

const MENU_ID = 'layout-tabs-context-menu'

interface DraggableTabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  'data-node-key': string
}

type TargetKey = React.MouseEvent | React.KeyboardEvent | string

type ItemProps = {
  key: string
}

const DraggableTabNode: React.FC<Readonly<DraggableTabPaneProps>> = ({ className, ...props }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props['data-node-key'],
  })

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    cursor: 'default',
  }

  return React.cloneElement(props.children as React.ReactElement<any>, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners,
  })
}

function LayoutTabs({ className }: { className?: string }) {
  const { layoutTabs, layoutActiveTab, removeLayoutTabs, clearLayoutTabs, setLayoutTabs } = useLayoutTabs()
  const { t, i18n } = useTranslation()
  const navigate = useNavigateFn()
  const { theme } = useTheme()

  function getItems(tabs: string[]) {
    return tabs.map((item) => {
      const router = routersList.find((r) => r.path === item)
      return {
        key: item,
        label: t(`Menu.${router!.meta?.key || router!.path}`, { defaultValue: router!.meta?.label }) || router!.path || '',
        icon: router!.meta?.icon,
        closable: item !== '/',
      }
    })
  }

  const tabsItems = useMemo(() => {
    return getItems(layoutTabs)
  }, [i18n.language, layoutTabs])

  const sensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      const activeIndex = tabsItems.findIndex((i) => i.key === active.id)
      const overIndex = tabsItems.findIndex((i) => i.key === over?.id)
      setLayoutTabs(arrayMove(tabsItems, activeIndex, overIndex).map((i) => i.key))
    }
  }

  const { pathname } = useLocation()
  function goToPath(path: string) {
    if (path !== pathname) {
      navigate(path)
    }
  }
  function onTabClick(key: string) {
    goToPath(key)
  }

  function onEdit(targetKey: TargetKey, action: 'add' | 'remove') {
    if (action === 'remove') {
      removeTabsItem(targetKey as string)
    }
  }
  function removeTabsItem(targetKey: string) {
    const targetIndex = tabsItems.findIndex((x) => x.key === targetKey)
    const newPanes = tabsItems.filter((x) => x.key !== targetKey)
    if (newPanes.length && targetKey === layoutActiveTab) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex]
      removeLayoutTabs({ value: targetKey, activeTab: key })
      goToPath(key)
    } else if (newPanes.length) {
      removeLayoutTabs(targetKey)
    } else {
      clearLayoutTabs()
      goToPath('/')
    }
  }

  const { show } = useContextMenu({
    id: MENU_ID,
  })
  const [menuKey, setMenuKey] = useState('')
  const [menuShow, setMenuShow] = useState(true)
  function handleContextMenu(event: React.MouseEvent, key: string) {
    setMenuKey(key)
    show({
      event,
      props: {
        key
      }
    })
  }

  const handleItemClick = ({ id, props }: ItemParams<ItemProps, any>) => {
    setMenuShow(false)
    setTimeout(() => {
      setMenuShow(true)
    }, 0)
    switch (id) {
      case 'close':
        removeTabsItem(props!.key)
        break
      case 'closeLeft':
        closeLeftFn(props!.key)
        break
      case 'closeRight':
        closeRightFn(props!.key)
        break
      case 'closeOther':
        closeOtherFn(props!.key)
        break
    }
  }

  function closeLeftFn(key: string) {
    const tabIndex = layoutTabs.indexOf(key)
    if (tabIndex !== -1) {
      const activeTabIndex = layoutTabs.indexOf(layoutActiveTab)
      setLayoutTabs(layoutTabs.slice(tabIndex))
      if (activeTabIndex !== -1 && activeTabIndex < tabIndex) {
        goToPath(key)
      }
    }
  }
  function closeRightFn(key: string) {
    const tabIndex = layoutTabs.indexOf(key)
    if (tabIndex !== -1) {
      const activeTabIndex = layoutTabs.indexOf(layoutActiveTab)
      setLayoutTabs(layoutTabs.slice(0, tabIndex + 1))
      if (activeTabIndex !== -1 && activeTabIndex > tabIndex) {
        goToPath(key)
      }
    }
  }
  function closeOtherFn(key: string) {
    setLayoutTabs([key])
    if (key !== layoutActiveTab) {
      goToPath(key)
    }
  }

  return (
    <>
      <Tabs 
        className={cn('layout-tabs', className)}
        items={tabsItems}
        activeKey={layoutActiveTab}
        onTabClick={onTabClick}
        onEdit={onEdit}
        type='editable-card'
        hideAdd
        renderTabBar={(tabBarProps, DefaultTabBar) => (
          <DndContext sensors={[sensor]} onDragEnd={onDragEnd} collisionDetection={closestCenter}>
            <SortableContext items={tabsItems.map((i) => i.key)} strategy={horizontalListSortingStrategy}>
              <DefaultTabBar {...tabBarProps}>
                {(node) => (
                  <DraggableTabNode
                    {...(node as React.ReactElement<DraggableTabPaneProps>).props}
                    key={node.key}
                  >
                    <div onContextMenu={(e) => handleContextMenu(e, node.key!)}>
                      {node}
                    </div>
                  </DraggableTabNode>
                )}
              </DefaultTabBar>
            </SortableContext>
          </DndContext>
        )}
      />
      {menuShow &&(menuKey !== '/' || layoutTabs.length > 1) && (
        <Menu id={MENU_ID} theme={theme} style={{ zIndex: 1000 }}>
          {menuKey !== '/' && (
            <Item id='close' onClick={handleItemClick}>
              <CloseOutlined className='mr-2' />
              {t('LayoutTabs.Close', { defaultValue: '关闭标签页' })}
            </Item>
          )}
          {layoutTabs.indexOf(menuKey) !== 0 && (
            <Item id='closeLeft' onClick={handleItemClick}>
              <LeftSquareOutlined className='mr-2' />
              {t('LayoutTabs.CloseLeft', { defaultValue: '关闭左侧标签页' })}
            </Item>
          )}
          {layoutTabs.length > 1 && layoutTabs.indexOf(menuKey) !== layoutTabs.length - 1 && (
            <Item id='closeRight' onClick={handleItemClick}>
              <RightSquareOutlined className='mr-2' />
              {t('LayoutTabs.CloseRight', { defaultValue: '关闭右侧标签页' })}
            </Item>
          )}
          {layoutTabs.length > 1 && (
            <Item id='closeOther' onClick={handleItemClick}>
              <CloseSquareOutlined className='mr-2' />
              {t('LayoutTabs.CloseOther', { defaultValue: '关闭其他标签页' })}
            </Item>
          )}
        </Menu>
      )}
    </>
  )
}

export default LayoutTabs
