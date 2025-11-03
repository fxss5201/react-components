import ReactJsonView from '@microlink/react-json-view'
import cn from 'classnames'
import CopyToClipboard from './CopyToClipboard'
import { useTheme } from '../storeHooks/useTheme'

export type JsonViewProps = {
  children: object
  className?: string
}

function JsonView({ children, className }: JsonViewProps) {
  const { theme } = useTheme()

  const jsonTheme = theme === 'dark' ? 'apathy' : 'apathy:inverted'
  return (
    <div className={cn('react-json-view relative', className)}>
      <div className='absolute left-4 leading-6 z-10 text-[14px] text-gray-400 dark:text-gray-500'>JSON</div>
      <div className='absolute right-0 z-10'>
        <CopyToClipboard text={JSON.stringify(children, null, 2)}></CopyToClipboard>
      </div>
      <ReactJsonView
        src={children}
        theme={jsonTheme}
        displayDataTypes={false}
        enableClipboard={false}
        style={{
          padding: '24px 16px 16px',
        }}
      />
    </div>
  )
}

export default JsonView
