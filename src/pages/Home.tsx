import { useNavigateFn } from '../Hooks/useRouter'
import MdRender from '../components/MdRender'
import homeMd from '../md/homeMd.md?raw'
import homeMdEn from '../md/en/homeMd.md?raw'
import { routersTree } from '../router/index'
import type { RoutersType } from '../router/index'
import { useLocale } from '../Hooks/useLocale'
import HomeMenuList from '../components/HomeMenuList'

const noShowFunctionList = ['/react-components/']

function Home() {
  const navigate = useNavigateFn()
  const functionItems: RoutersType[] = routersTree.filter((item) => !noShowFunctionList.includes(item.path!))
  const locale = useLocale()

  function handleLinkClick(item: RoutersType) {
    if (item.children) {
      return
    }
    navigate(item.path!)
  }

  return (
    <div className='px-4 markdown-body pt-2'>
      <MdRender md={locale === 'zh' ? homeMd : homeMdEn} />
      <HomeMenuList items={functionItems} linkClick={handleLinkClick}></HomeMenuList>
    </div>
  )
}

export default Home
