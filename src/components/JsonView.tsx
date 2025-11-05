import { JsonEditor, githubDarkTheme, githubLightTheme } from 'json-edit-react'
import cn from 'classnames'
import { useTheme } from '../storeHooks/useTheme'

export type JsonViewProps = {
  children: object
  className?: string
}

function JsonView({ children, className }: JsonViewProps) {
  const { theme } = useTheme()

  const jsonTheme = theme === 'dark' ? githubDarkTheme : githubLightTheme
  return (
    <JsonEditor
      data={children}
      theme={jsonTheme}
      viewOnly={true}
      className={cn('w-full bg-gray-50! dark:bg-gray-950!', className)}
      maxWidth='100%'
    />
  )
}

export default JsonView
