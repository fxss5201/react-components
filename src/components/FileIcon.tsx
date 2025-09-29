import { Image } from 'antd'
import { getIconForFile, getIconForFolder } from 'vscode-icons-js'

type FileType = 'file' | 'folder'

function FileIcon({ fileName = '', type = 'file', size = 24 }: { fileName?: string; type?: FileType; size?: number }) {
  const defaultFileIcon = `icons/${getIconForFile('default')}`
  const defaultFolderIcon = `icons/${getIconForFolder('default')}`
  const fileIcon = `icons/${getIconForFile(fileName.split('.').pop() || 'default')}`
  return (
    <Image
      width={size}
      height={size}
      src={type === 'file' ? fileIcon : defaultFolderIcon}
      preview={false}
      fallback={defaultFileIcon}
    />
  )
}

export default FileIcon
