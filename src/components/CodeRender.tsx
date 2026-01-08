import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CopyToClipboard from './CopyToClipboard'
import cn from 'classnames'
import type { ClassAttributes, HTMLAttributes } from 'react'
import type { ExtraProps } from 'react-markdown'

type CodeRenderProps = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps & {
  /**
   * @description 代码块主题，'dark' | 'light'。|| Code block theme, 'dark' | 'light'.
   * @default 'light'
   */
  theme?: 'dark' | 'light',
  /**
   * @description 代码块容器类名。|| Code block container class name.
   */
  codeBoxClassName?: string,
  /**
   * @description 代码类名。|| Code class name.
   */
  codeClassName?: string,
  /**
   * @description 是否启用复制按钮。|| Whether to enable the copy button.
   * @default true
   */
  enableCopy?: boolean,
}
function CodeRender({ children, className, theme = 'light', codeBoxClassName, codeClassName, enableCopy = true, ...rest }: CodeRenderProps) {
  const match = /language-(\w+)/.exec(className || '')
  const content = children === undefined ? '' : String(children).replace(/\n$/, '')
  return match ? (
    <div className={cn('relative', codeBoxClassName)}>
      <div className='absolute top-[-24px] left-[0] leading-6 z-10 text-gray-400 dark:text-gray-500'>{match[1]}</div>
      {enableCopy && (
        <div className='absolute top-[-24px] right-[-16px] z-10'>
          <CopyToClipboard text={content}></CopyToClipboard>
        </div>
      )}
      <SyntaxHighlighter
        PreTag='div'
        className={cn('code-block', codeClassName)}
        children={content}
        language={match[1]}
        showLineNumbers={true}
        style={theme === 'dark' ? dark : undefined}
      />
    </div>
  ) : (
    <code {...rest} className={cn(className, codeBoxClassName)}>
      {content}
    </code>
  )
}

export default CodeRender
