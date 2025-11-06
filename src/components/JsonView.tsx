import JsonEditor from './JsonEditor'
import { type LocaleType } from '../config'

export type JsonViewProps = {
  children: object
  enableCopy?: boolean
  enableSearch?: boolean
  className?: string
  searchClassName?: string
  jsonClassName?: string
  locale?: LocaleType
}

function JsonView({
  children,
  enableCopy = true,
  enableSearch = true,
  className,
  searchClassName,
  jsonClassName,
  locale
}: JsonViewProps) {
  return (
    <JsonEditor
      viewOnly={true}
      enableCopy={enableCopy}
      enableSearch={enableSearch}
      className={className}
      searchClassName={searchClassName}
      jsonClassName={jsonClassName}
      locale={locale}
    >{children}</JsonEditor>
  )
}

export default JsonView
