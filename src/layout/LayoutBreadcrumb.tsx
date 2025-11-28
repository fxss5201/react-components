import { useMatches } from 'react-router'
import { Breadcrumb } from 'antd'
import { routersList } from '@/router'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import cn from 'classnames'

function LayoutBreadcrumb({ className }: { className?: string }) {
  const { t } = useTranslation()
  const matches = useMatches()
  const navigate = useNavigate()

  const routes = [...new Set(matches.map(item => item.pathname))]

  function getBreadcrumbItems(routers: string[]) {
    return routers.map((item, index) => {
      const location = routersList.find(x => x.path === item)
      const isLastItem = index === routers.length - 1
      return {
        title: (
          <a href={location!.path!} onClick={(e) => {
            e.preventDefault()
            if (location!.element && !isLastItem) {
              navigate(location!.path!)
            }
          }} className={cn('py-1 px-2 h-[24px] inline', { 'cursor-text hover:bg-transparent': !location!.element || isLastItem, 'text-inherit': isLastItem })}>
            {location!.meta?.icon && <span className='mr-1'>{ location!.meta?.icon }</span>}
            { t(`menu.${location!.meta?.key}`, { defaultValue: location!.meta?.label }) }
          </a>
        ),
        className: isLastItem ? '' : 'cursor-pointer'
      }
    })
  }

  return (
    <Breadcrumb items={getBreadcrumbItems(routes)} className={cn('p-4', className)}></Breadcrumb>
  )
}

export default LayoutBreadcrumb
