import { Modal } from 'antd'
import type { ModalProps } from 'antd'
import { FormBlockItem } from '@/components/FormBlock'
import type { FormItemsUnion } from '@/components/FormBlock'

export type FormModalProps = ModalProps & {
  formBlockItems?: FormItemsUnion[]
}

function FormModal(props: FormModalProps) {
  const { formBlockItems, ...modalProps } = props
  return (
    <Modal
      {...modalProps}
    >
      {formBlockItems?.map((item) => FormBlockItem(item))}
    </Modal>
  )
}

export default FormModal
