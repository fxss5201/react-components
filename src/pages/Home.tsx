import { useNavigate } from 'react-router'
import MdRender from '@/components/MdRender'
import homeMd from '@/md/homeMd.md?raw'
import homeMdEn from '@/md/en/homeMd.md?raw'
import { routersTree } from '@/router/index'
import type { RoutersType } from '@/router/types'
import { useLocale } from '@/Hooks/useLocale'
import HomeMenuList from '@/components/HomeMenuList'

const noShowFunctionList = ['/']

function Home() {
  const navigate = useNavigate()
  const functionItems: RoutersType[] = routersTree.filter((item) => !noShowFunctionList.includes(item.path!))
  const locale = useLocale()

  function handleLinkClick(item: RoutersType) {
    if (item.children) {
      return
    }
    navigate(item.path!)
  }

  return (
    <div className='px-4 pb-4 markdown-body'>
      <MdRender>{locale === 'zh' ? homeMd : homeMdEn}</MdRender>
      <HomeMenuList items={functionItems} linkClick={handleLinkClick}></HomeMenuList>
    </div>
  )
}

export default Home
