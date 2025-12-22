import MdRender from './MdRender'

export type JsonRenderProps = {
  /**
   * @description 要渲染的 JSON 数据。|| JSON data to render.
   */
  children: object | string
  /**
   * @description 自定义类名。|| Custom class name.
   */
  className?: string
  /**
   * @description JSON 内容自定义类名。|| JSON content custom class name.
   */
  codeClassName?: string
  /**
   * @description 是否启用复制。|| Whether to enable copy.
   * @default true
   */
  enableCopy?: boolean
}

function JsonRender({ children, className, codeClassName, enableCopy = true }: JsonRenderProps) {
  let jsonData = ''
  if (typeof children === 'string') {
    jsonData = children
  } else {
    jsonData = JSON.stringify(children, null, 2)
  }
  return (
    <MdRender className={className} enableCopy={enableCopy} codeClassName={codeClassName}>{`\`\`\`json\n${jsonData}\n\`\`\``}</MdRender>
  )
}

export default JsonRender
