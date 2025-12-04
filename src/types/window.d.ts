interface Window {
  showDirectoryPicker?: (options: { mode: 'read' | 'readwrite'; id: string }) => Promise<FileSystemDirectoryHandle>;
}

interface FileSystemDirectoryHandle {
  kind: 'directory';
  name: string;
  isSameEntry(other: FileSystemHandle): Promise<boolean>;
  entries(): AsyncIterableIterator<[string, FileSystemHandle]>;
  keys(): AsyncIterableIterator<string>;
  values(): AsyncIterableIterator<FileSystemHandle>;
  getDirectoryHandle(name: string, options?: { create?: boolean }): Promise<FileSystemDirectoryHandle>;
  getFileHandle(name: string, options?: { create?: boolean }): Promise<FileSystemFileHandle>;
  removeEntry(name: string, options?: { recursive?: boolean }): Promise<void>;
  requestPermission(options?: { mode?: 'read' | 'readwrite' }): Promise<PermissionStatus>;
  queryPermission(options?: { mode?: 'read' | 'readwrite' }): Promise<PermissionStatus>;
}

interface FileSystemFileHandle {
  kind: 'file';
  name: string;
  getFile(): Promise<File>;
  createWritable(options?: { keepExistingData?: boolean }): Promise<FileSystemWritableFileStream>;
  isSameEntry(other: FileSystemHandle): Promise<boolean>;
  requestPermission(options?: { mode?: 'read' | 'readwrite' }): Promise<PermissionStatus>;
  queryPermission(options?: { mode?: 'read' | 'readwrite' }): Promise<PermissionStatus>;
}

interface FileSystemHandle {
  readonly kind: 'file' | 'directory';
  readonly name: string;
  isSameEntry(other: FileSystemHandle): Promise<boolean>;
}

