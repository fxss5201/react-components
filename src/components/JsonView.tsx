import JsonEditor from './JsonEditor'

export type JsonViewProps = {
  /**
   * @description 初始值。|| Initial value.
   */
  children: object
  /**
   * @description 是否启用复制。|| Whether to enable copy.
   * @default true
   */
  enableCopy?: boolean
  /**
   * @description 是否启用搜索。|| Whether to enable search.
   * @default true
   */
  enableSearch?: boolean
  /**
   * @description 自定义类名。|| Custom class name.
   */
  className?: string
  /**
   * @description 搜索框自定义类名。|| Search box custom class name.
   */
  searchClassName?: string
  /**
   * @description JSON 内容自定义类名。|| JSON content custom class name.
   */
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
