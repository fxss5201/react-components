export type FileType = 'file' | 'folder'
export type FileItemType = {
  type: FileType
  file?: File
  name: string
  size?: number
  filePath: string
  folderPath: string
}

export type FileTreeItem = FileItemType & {
  children?: FileTreeItem[]
}

export type TargetType = 'tree' | 'list'
