import JsonEditor from './JsonEditor'

export type JsonViewProps = {
  children: object
  enableCopy?: boolean
  enableSearch?: boolean
  className?: string
  searchClassName?: string
  jsonClassName?: string
}

function JsonView({
  children,
  enableCopy = true,
  enableSearch = true,
  className,
  searchClassName,
  jsonClassName,
}: JsonViewProps) {
  return (
    <JsonEditor
      viewOnly={true}
      enableCopy={enableCopy}
      enableSearch={enableSearch}
      className={className}
      searchClassName={searchClassName}
      jsonClassName={jsonClassName}
    >{children}</JsonEditor>
  )
}

export default JsonView
