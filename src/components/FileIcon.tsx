import { Image } from 'antd'
import { getIconForFile, getIconForFolder } from 'vscode-icons-js'
import cn from 'classnames'

export type FileType = 'file' | 'folder'
const BASE_URL = import.meta.env.BASE_URL

function FileIcon({ fileName = '', type = 'file', size = 24, className }: { fileName?: string; type?: FileType; size?: number; className?: string }) {
  const defaultFileIcon = `${BASE_URL}/icons/${getIconForFile('default')}`
  const defaultFolderIcon = `${BASE_URL}/icons/${getIconForFolder('default')}`
  const fileIcon = `${BASE_URL}/icons/${getIconForFile(fileName.split('.').pop() || 'default')}`
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
