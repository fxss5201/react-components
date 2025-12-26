import { Flex } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router'
import cn from 'classnames'
import config from '@/config'
import LayoutTheme from './LayoutTheme'
import LayoutLocale from './LayoutLocale'
import LayoutUser from './LayoutUser'
import LayoutSet from './LayoutSet'
import { useAClassStyles } from '@/Hooks/useStyles'

function LayoutHead({ className }: { className?: string }) {
  const navigate = useNavigate()
  const { styles: aClassStyles } = useAClassStyles()

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
            className={cn('text-[24px] ml-8', aClassStyles.aClass)}>
            <GithubOutlined />
          </a>
        )}
        {config.isNeedLogin && <LayoutUser className='ml-8' />}
        <LayoutSet className='ml-8' />
      </div>
    </Flex>
  )
}

export default LayoutHead
