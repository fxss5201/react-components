import { useEffect, useState } from 'react'
import { Modal } from 'antd'
import { getTextFromBlob } from '@/utils'
import MdRender from '@/components/MdRender'
import { imgTypes, textTypes } from '@/FileTypes'
import PreviewImg from './PreviewImg'

export type PreviewFileProps = {
  blob: Blob
  name: string
  onClose: () => void
}

function PreviewFile({ blob, name, onClose }: PreviewFileProps) {
  const [previewFileSrc, setPreviewFileSrc] = useState('')
  const [modalInfo, setModalInfo] = useState<{
    open: boolean
    title: string
    content: React.ReactNode
  }>({
    open: false,
    title: '',
    content: null,
  })

  const fileType = name.split('.').pop()?.toLowerCase() || ''
  const isImg = imgTypes.includes(fileType)
  const isText = textTypes.includes(fileType)

  useEffect(() => {
    async function initFn() {
      if (isImg) {
        setPreviewFileSrc(URL.createObjectURL(blob))
      } else if (isText) {
        const fileContent = await getTextFromBlob(blob)
        setModalInfo({
          open: true,
          title: name,
          content: <MdRender>{`\`\`\` ${fileType}\n${fileContent}\n\`\`\``}</MdRender>,
        })
      }
    }

    initFn()
    return () => {
      setModalInfo({
        open: false,
        title: '',
        content: null,
      })
    }
  }, [isImg, isText, fileType, name, blob])

  return (
    <>
      {isImg && previewFileSrc && (
        <PreviewImg url={previewFileSrc} onClose={() => {
          URL.revokeObjectURL(previewFileSrc)
          setPreviewFileSrc('')
          onClose()
        }} />
      )}
      <Modal
        open={modalInfo?.open}
        title={modalInfo?.title}
        width='68vw'
        closable={true}
        footer={null}
        onCancel={() => {
          setModalInfo({
            open: false,
            title: '',
            content: null,
          })
          onClose()
        }}
      >
        {modalInfo?.content}
      </Modal>
    </>
  )
}

export default PreviewFile
