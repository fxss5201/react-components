import MdRender from './MdRender'

export type JsonViewProps = {
  children: object
  className?: string
}

function JsonView({ children, className }: JsonViewProps) {
  const jsonData = JSON.stringify(children, null, 2)
  return (
    <MdRender className={className}>{`\`\`\`json\n${jsonData}\n\`\`\``}</MdRender>
  )
}

export default JsonView
