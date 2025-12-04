import type { TargetType, FileTreeItem } from '@/types/files'
import DropElement from '@/components/DropElement'
import FilesSelect from '@/components/FilesSelect'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'

export type FilesDropSelectProps = {
  targetType?: TargetType,
  onSelect: (fileTrees: FileTreeItem[]) => void
  isUpload?: boolean
  isIgnoreFolder?: boolean // 当 targetType 为 'list' 时，是否忽略文件夹，比如说上传文件的时候，只需要上传文件，不需要上传文件夹
  classNames?: {
    dropElement?: string
    filesSelect?: string
  }
  childrens?: {
    dropElement?: React.ReactNode
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
