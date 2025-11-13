import type { RoutersType } from '@/router/index'
import { useTranslation } from 'react-i18next'

const BASE_URL = import.meta.env.BASE_URL

function HomeMenuList({ items, linkClick }: { items: RoutersType[]; linkClick: (item: RoutersType) => void }) {
  const { t } = useTranslation()

  return (
    <ul className='my-2!'>
      {items.map((item) => (
        <li key={item.path!}>
          <a href={`${BASE_URL}${item.path!.startsWith('/') ? item.path!.slice(1) : item.path!}`} className='inline-flex items-center' onClick={(e) => {
            e.preventDefault()
            linkClick(item)
          }}>
            {item.meta.icon}
            <span className='ml-2'>{t(`Menu.${item.meta?.key || item.path}`, { defaultValue: item.meta?.label }) || item.path || ''}</span>
          </a>
          {item.children && (
            <HomeMenuList items={item.children} linkClick={linkClick}></HomeMenuList>
          )}
        </li>
      ))}
    </ul>
  )
}

export default HomeMenuList
