import { Image } from 'antd'
import { getIconForFile } from 'vscode-icons-js'

function FileIcon({ fileName, size = 24 }: { fileName: string; size?: number }) {
  const defaultFileIcon = `icons/${getIconForFile('default')}`
  const fileIcon = `icons/${getIconForFile(fileName.split('.').pop() || 'default')}`
  return (
    <Image
      width={size}
      height={size}
      src={fileIcon}
      preview={false}
      fallback={defaultFileIcon}
    />
  )
}

export default FileIcon
