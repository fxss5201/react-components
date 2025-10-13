import { Image } from 'antd'
import { getIconForFile, getIconForFolder } from 'vscode-icons-js'
import cn from 'classnames'

type FileType = 'file' | 'folder'

function FileIcon({ fileName = '', type = 'file', size = 24, className }: { fileName?: string; type?: FileType; size?: number; className?: string }) {
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
      className={cn(className)}
    />
  )
}

export default FileIcon
