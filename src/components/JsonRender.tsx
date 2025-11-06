import MdRender from './MdRender'

export type JsonRenderProps = {
  children: object | string
  className?: string
  codeClassName?: string
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
