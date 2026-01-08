import { Image } from 'antd'

export type PreviewImgProps = {
  url: string
  onClose: () => void
}

function PreviewImg({ url, onClose }: PreviewImgProps) {
  return (
    <Image
      width={200}
      style={{ display: 'none' }}
      alt='img'
      src={url}
      preview={{
        open: true,
        src: url,
        onOpenChange: () => {
          onClose()
        },
      }}
    />
  )
}

export default PreviewImg
