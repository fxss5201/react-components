import { useRouter } from '../Hooks/useRouter'
import MdRender from '../components/MdRender'
import homeMd from '../md/homeMd.md?raw'
import { routers } from '../router/index'
import type { RoutersType } from '../router/index'

const noShowFunctionList = ['home']

function Home() {
  const router = useRouter()
  const functionItems: RoutersType[] = routers.filter((item) => !noShowFunctionList.includes(item.meta.key))

  return (
    <div className='px-4 markdown-body'>
      <MdRender markdown={homeMd} />
      <ul className='my-2!'>
        {functionItems.map((item) => (
          <li key={item.meta.key}>
            <a href={item.meta.key} className='inline-flex items-center' onClick={(e) => {
              e.preventDefault()
              router(item.path!)
            }}>
              {item.meta.icon}
              <span className='ml-2'>{item.meta.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
