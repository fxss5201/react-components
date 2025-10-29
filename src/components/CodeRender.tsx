import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CopyToClipboard from './CopyToClipboard'
import cn from 'classnames'
import type { ClassAttributes, HTMLAttributes } from 'react'
import type { ExtraProps } from 'react-markdown'

type CodeRenderProps = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps & {
  theme?: 'dark' | 'light',
  boxClassName?: string,
}
function CodeRender({ children, className, theme = 'light', boxClassName, ...rest }: CodeRenderProps) {
  const match = /language-(\w+)/.exec(className || '')
  return match ? (
    <div className={cn('relative', boxClassName)}>
      <div className='absolute top-[-24px] left-[0] leading-6 z-10 text-gray-400 dark:text-gray-500'>{match[1]}</div>
      <div className='absolute top-[-24px] right-[-16px] z-10'>
        <CopyToClipboard text={String(children).replace(/\n$/, '')}></CopyToClipboard>
      </div>
      <SyntaxHighlighter
        PreTag="div"
        className="code-block"
        children={String(children).replace(/\n$/, '')}
        language={match[1]}
        showLineNumbers={true}
        style={theme === 'dark' ? dark : undefined}
      />
    </div>
  ) : (
    <code {...rest} className={cn(className, boxClassName)}>
      {children}
    </code>
  )
}

export default CodeRender
