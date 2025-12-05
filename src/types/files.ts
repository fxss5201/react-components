export type FileType = 'file' | 'folder'
export type FileItemType = {
  type: FileType
  file?: File
  name: string
  size?: number
  filePath: string
  folderPath: string
  url?: string
}

export type FileTreeItem = FileItemType & {
  children?: FileTreeItem[]
}

export type TargetType = 'tree' | 'list'

export type FileDownloadItemType = Omit<FileItemType, 'file' | 'url'> & {
  url: string
}
