import { useMemo } from 'react'
import { useMatches } from 'react-router'
import { Breadcrumb } from 'antd'
import { routersList } from '../router'
import { useTranslation } from 'react-i18next'
import { useNavigateFn } from '../Hooks/useRouter'
import cn from 'classnames'

const BASE_URL = import.meta.env.BASE_URL

function LayoutBreadcrumb() {
  const { t, i18n } = useTranslation()
  const matches = useMatches()
  const navigate = useNavigateFn()

  const routes = [...new Set(matches.map(item => item.pathname))].filter(item => item.startsWith(BASE_URL))

  function getBreadcrumbItems(routers: string[]) {
    return routers.map((item, index) => {
      const location = routersList.find(x => x.path === item)
      const isLastItem = index === routers.length - 1
      return {
        title: (
          <a href={location!.path!} onClick={(e) => {
            e.preventDefault()
            if ((location!.element || location!.Component) && !isLastItem) {
              navigate(location!.path!)
            }
          }} className={cn('py-1 px-2 h-[24px] inline', { 'cursor-text hover:bg-transparent': !(location!.element || location!.Component) || isLastItem, 'text-inherit': isLastItem })}>
            {location!.meta?.icon && <span className='mr-1'>{ location!.meta?.icon }</span>}
            {/* @ts-ignore */}
            { t(`Menu.${location!.meta?.key}`, { defaultValue: location.meta?.label }) }
          </a>
        ),
        className: isLastItem ? '' : 'cursor-pointer'
      }
    })
  }

  const breadcrumbItems = useMemo(() => {
    return getBreadcrumbItems(routes)
  }, [i18n.language, routes])

  return (
    <Breadcrumb items={breadcrumbItems} className='p-4'></Breadcrumb>
  )
}

export default LayoutBreadcrumb
