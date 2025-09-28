import { useRouter } from '../Hooks/useRouter'
import MdRender from '../components/MdRender'
import homeMd from '../md/homeMd.md?raw'
import homeMdEn from '../md/en/homeMd.md?raw'
import { routers } from '../router/index'
import type { RoutersType } from '../router/index'
import { useTranslation } from 'react-i18next'
import { useLocale } from '../Hooks/useLocale'

const noShowFunctionList = ['home']

function Home() {
  const router = useRouter()
  const functionItems: RoutersType[] = routers.filter((item) => !noShowFunctionList.includes(item.meta.key))
  const { t } = useTranslation()
  const locale = useLocale()

  return (
    <div className='px-4 markdown-body'>
      <MdRender markdown={locale === 'zh' ? homeMd : homeMdEn} />
      <ul className='my-2!'>
        {functionItems.map((item) => (
          <li key={item.meta.key}>
            <a href={item.meta.key} className='inline-flex items-center' onClick={(e) => {
              e.preventDefault()
              router(item.path!)
            }}>
              {item.meta.icon}
              <span className='ml-2'>{t(`Menu.${item.meta.key}`)}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
