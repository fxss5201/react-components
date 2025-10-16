import { useLocation } from 'react-router'
import { useNavigateFn } from '../Hooks/useNavigateFn'
import MdRender from '../components/MdRender'
import homeMd from '../md/homeMd.md?raw'
import homeMdEn from '../md/en/homeMd.md?raw'
import { routersTree } from '../router/index'
import type { RoutersType } from '../router/index'
import { useLocale } from '../Hooks/useLocale'
import HomeMenuList from '../components/HomeMenuList'

const noShowFunctionList = ['/']

function Home() {
  const navigate = useNavigateFn()
  const functionItems: RoutersType[] = routersTree.filter((item) => !noShowFunctionList.includes(item.path!))
  const locale = useLocale()
  const { pathname } = useLocation()

  function handleLinkClick(item: RoutersType) {
    if (item.children) {
      return
    }
    if (pathname !== item.path) {
      navigate(item.path!)
    }
  }

  return (
    <div className='px-4 pb-4 markdown-body'>
      <MdRender md={locale === 'zh' ? homeMd : homeMdEn} />
      <HomeMenuList items={functionItems} linkClick={handleLinkClick}></HomeMenuList>
    </div>
  )
}

export default Home
