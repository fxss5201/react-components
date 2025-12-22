import { Image } from 'antd'
import { getIconForFile, getIconForFolder } from 'vscode-icons-js'
import cn from 'classnames'

export type FileType = 'file' | 'folder'
const BASE_URL = import.meta.env.BASE_URL

export type FileIconProps = {
  /**
   * @description 文件或文件夹名称。|| File or folder name.
   * @default ''
   */
  fileName?: string
  /**
   * @description 文件类型。|| File type.
   * @default 'file'
   */
  type?: FileType
  /**
   * @description 图标大小。|| Icon size.
   * @default 24
   */
  size?: number
  /**
   * @description 自定义类名。|| Custom class name.
   */
  className?: string
}

function FileIcon({ fileName = '', type = 'file', size = 24, className }: FileIconProps) {
  const defaultFileIcon = `${BASE_URL}/icons/${getIconForFile('default')}`
  const defaultFolderIcon = `${BASE_URL}/icons/${getIconForFolder('default')}`
  const fileIcon = `${BASE_URL}/icons/${getIconForFile(fileName.split('.').pop() || 'default')}`
  const folderIcon = `${BASE_URL}/icons/${getIconForFolder(fileName)}`
  return (
    <Image
      width={size}
      height={size}
      src={type === 'file' ? fileIcon : folderIcon}
      preview={false}
      fallback={type === 'file' ? defaultFileIcon : defaultFolderIcon}
      className={cn(className)}
    />
  )
}

export default FileIcon
