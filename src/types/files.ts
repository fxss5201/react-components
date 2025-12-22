/**
 * @description 文件类型 'file' | 'folder' || File type, 'file' | 'folder'.
 */
export type FileType = 'file' | 'folder'

/**
 * @description 文件项类型。|| File item type.
 */
export type FileItemType = {
  /**
   * @description 文件类型 'file' | 'folder' || File type, 'file' | 'folder'.
   */
  type: FileType
  /**
   * @description 文件对象。|| File object.
   */
  file?: File
  /**
   * @description 文件名。|| File name.
   */
  name: string
  /**
   * @description 文件大小。|| File size.
   */
  size?: number
  /**
   * @description 文件路径。|| File path.
   */
  filePath: string
  /**
   * @description 文件夹路径。|| Folder path.
   */
  folderPath: string
  /**
   * @description 文件 URL。|| File URL.
   */
  url?: string
}

export type FileTreeItem = FileItemType & {
  /**
   * @description 子项。|| Child items.
   */
  children?: FileTreeItem[]
}

/**
 * @description 目标类型 'tree' | 'list'。|| Target type, 'tree' | 'list'.
 */
export type TargetType = 'tree' | 'list'

export type FileDownloadItemType = Omit<FileItemType, 'file' | 'url'> & {
  /**
   * @description 文件 URL。|| File URL.
   */
  url: string
}
