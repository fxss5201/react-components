import { useEffect, useState } from 'react'
import { Image, Modal } from 'antd'
import { getTextFromBlob } from '@/utils'
import MdRender from '@/components/MdRender'
import { imgTypes, textTypes } from '@/FileTypes'

export type PreviewFileProps = {
  blob: Blob
  name: string
  onClose: () => void
}

function PreviewFile({ blob, name, onClose }: PreviewFileProps) {
  const [previewFileSrc, setPreviewFileSrc] = useState('')
  const [imageOpen, setImageOpen] = useState(false)
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

  useEffect(() => {
    async function initFn() {
      if (imgTypes.includes(fileType)) {
        setPreviewFileSrc(URL.createObjectURL(blob))
        setImageOpen(true)
      } else if (textTypes.includes(fileType)) {
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
  }, [fileType, name, blob])

  return (
    <>
      {previewFileSrc && (
        <Image
          width={200}
          style={{ display: 'none' }}
          alt='img'
          src={previewFileSrc}
          preview={{
            open: imageOpen,
            src: previewFileSrc,
            onOpenChange: (value) => {
              setImageOpen(value)
              URL.revokeObjectURL(previewFileSrc)
              onClose()
            },
          }}
        />)}
      {modalInfo?.open && <Modal
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
      }
    </>
  )
}

export default PreviewFile
