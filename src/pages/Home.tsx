import { useNavigate } from 'react-router'
import MdRender from './../components/MdRender'
import homeMd from './../md/homeMd.md?raw'
import { routers } from './../router/index'
import type { RoutersType } from './../router/index'

const noShowFunctionList = ['home']

function Home() {
  const navigate = useNavigate()
  const functionItems: RoutersType[] = routers.filter((item) => !noShowFunctionList.includes(item.meta.key))

  return (
    <div className='px-4 markdown-body'>
      <MdRender markdown={homeMd} />
      <ul className='my-2!' style={{ listStyle: 'disc outside' }}>
        {functionItems.map((item) => (
          <li key={item.meta.key} className='flex items-center cursor-pointer hover:text-blue-600' onClick={() => navigate(item.path!)}>
            {item.meta.icon}
            <span className='ml-2'>{item.meta.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
