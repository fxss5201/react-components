import cn from 'classnames'
import React, { useMemo } from 'react'
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
import { useNavigateFn } from '../Hooks/useRouter'

const BASE_URL = import.meta.env.BASE_URL

interface DraggableTabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  'data-node-key': string
}

type TargetKey = React.MouseEvent | React.KeyboardEvent | string

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

  function getItems(tabs: string[]) {
    return tabs.map((item) => {
      const router = routersList.find((r) => r.path === item)
      return {
        key: item,
        label: t(`Menu.${router!.meta?.key || router!.path}`, { defaultValue: router!.meta?.label }) || router!.path || '',
        icon: router!.meta?.icon,
        closable: item !== BASE_URL
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

  function onTabClick(key: string) {
    navigate(key)
  }

  function onEdit(targetKey: TargetKey, action: 'add' | 'remove') {
    if (action === 'remove') {
      const targetIndex = tabsItems.findIndex((x) => x.key === targetKey)
      const newPanes = tabsItems.filter((x) => x.key !== targetKey)
      if (newPanes.length && targetKey === layoutActiveTab) {
        const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex]
        console.log('targetKey', targetKey, 'key', key)
        removeLayoutTabs({ value: targetKey, activeTab: key })
        navigate(key)
      } else if (newPanes.length) {
        removeLayoutTabs(targetKey as string)
      } else {
        clearLayoutTabs()
        navigate(BASE_URL)
      }
    }
  }

  return (
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
                  {node}
                </DraggableTabNode>
              )}
            </DefaultTabBar>
          </SortableContext>
        </DndContext>
      )}
    />
  )
}

export default LayoutTabs
