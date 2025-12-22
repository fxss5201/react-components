import type { TargetType, FileTreeItem } from '@/types/files'
import DropElement from '@/components/DropElement'
import FilesSelect from '@/components/FilesSelect'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'

export type FilesDropSelectProps = {
  /**
   * @description 目标类型 'tree' | 'list'。|| Target type, 'tree' | 'list'.
   * @default 'tree'
   */
  targetType?: TargetType,
  /**
   * @description 文件选择回调。|| File select callback.
   */
  onSelect: (fileTrees: FileTreeItem[]) => void
  /**
   * @description 是否上传文件。|| Whether to upload files.
   * @default false
   */
  isUpload?: boolean
  /**
   * @description 是否忽略文件夹，当 targetType 为 'list' 时，是否忽略文件夹，比如说上传文件的时候，只需要上传文件，不需要上传文件夹。|| Whether to ignore folders, when targetType is 'list', whether to ignore folders, for example, when uploading files, you only need to upload files, not folders.
   * @default false
   */
  isIgnoreFolder?: boolean
  /**
   * @description 自定义类名。|| Custom class names.
   */
  classNames?: {
    /**
     * @description 自定义上传元素类名。|| Custom upload element class name.
     */
    dropElement?: string
    /**
     * @description 自定义文件选择元素类名。|| Custom files select element class name.
     */
    filesSelect?: string
  }
  /**
   * @description 自定义子元素。|| Custom children elements.
   */
  childrens?: {
    /**
     * @description 自定义上传元素子元素。|| Custom upload element children.
     */
    dropElement?: React.ReactNode
    /**
     * @description 自定义文件选择元素子元素。|| Custom files select element children.
     */
    filesSelect?: React.ReactNode
  }
}

function FilesDropSelect({
  targetType = 'tree',
  onSelect,
  isUpload = false,
  isIgnoreFolder = false,
  classNames = {},
  childrens = {}
}: FilesDropSelectProps) {
  const { t } = useTranslation()

  return (
    <DropElement
      targetType={targetType}
      isIgnoreFolder={isIgnoreFolder}
      isUpload={isUpload}
      onSelect={onSelect}
      className={classNames.dropElement}>
      {childrens.dropElement || (
        <div className='flex align-center'>
          <div className='text-2xl'>{t('components.FilesDropSelect.dropArea', { defaultValue: '请拖放文件/文件夹到这里，或点击选择文件/文件夹' })}</div>
          <FilesSelect
            targetType={targetType}
            isIgnoreFolder={isIgnoreFolder}
            isUpload={isUpload}
            onSelect={onSelect}
            className={cn('ml-4', classNames.filesSelect)}
            children={childrens.filesSelect}></FilesSelect>
        </div>
      )}
    </DropElement>
  )
}

export default FilesDropSelect
