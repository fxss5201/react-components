import { Flex } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { useNavigateFn } from '@/Hooks/useNavigateFn'
import cn from 'classnames'
import config from '@/config'
import LayoutTheme from './LayoutTheme'
import LayoutLocale from './LayoutLocale'
import LayoutUser from './LayoutUser'

function LayoutHead({ className }: { className?: string }) {
  const navigate = useNavigateFn()

  return (
    <Flex justify='space-between' align='center' className={cn(className, 'h-full')}>
      <div className='text-[24px] cursor-pointer flex items-center' onClick={() => navigate('/')}>
        {config.logoImg && <img src={config.logoImg} alt={config.logoText} title={config.logoText} className='w-6 h-6' />}
        {config.logoText && <span className='ml-2 leading-[24px]'>{config.logoText}</span>}
      </div>
      <div className='flex items-center leading-[24px]'>
        <LayoutTheme />
        <LayoutLocale className='ml-8' />
        {config.githubLink && (
          <a href={config.githubLink} target='_blank' rel='noopener noreferrer'
            className='text-[24px] ml-8 text-[#000000e0]! dark:text-[#ffffffd9]! hover:text-[#1677ff]!'>
            <GithubOutlined />
          </a>
        )}
        {config.isNeedLogin && <LayoutUser className='ml-8' />}
      </div>
    </Flex>
  )
}

export default LayoutHead
