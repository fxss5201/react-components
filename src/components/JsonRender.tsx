import MdRender from './MdRender'

export type JsonRenderProps = {
  children: object
  className?: string
}

function JsonRender({ children, className }: JsonRenderProps) {
  const jsonData = JSON.stringify(children, null, 2)
  return (
    <MdRender className={className}>{`\`\`\`json\n${jsonData}\n\`\`\``}</MdRender>
  )
}

export default JsonRender
