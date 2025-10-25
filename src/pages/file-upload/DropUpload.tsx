import { useEffect, useRef } from "react"

function DropUpload() {
  const dropAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    function preventDefaults(e: Event) {
      e.preventDefault()
      e.stopPropagation()
    }
    function addActiveClass() {
      dropAreaRef.current?.classList.add('active')
    }
    const needPreventDefault: string[] = ['dragover', 'dragenter', 'dragleave', 'drop']
    needPreventDefault.forEach(eventName => {
      dropAreaRef.current!.addEventListener(eventName, preventDefaults, false)
    })
    const needAddActiveClass: string[] = ['dragover', 'dragenter']
    needAddActiveClass.forEach(eventName => {
      dropAreaRef.current!.addEventListener(eventName, addActiveClass, false)
    })

    if (dropAreaRef.current) {

      dropAreaRef.current.addEventListener('dragover', (e) => {
        e.preventDefault()
        dropAreaRef.current?.classList.add('border-blue-500')
      })
      dropAreaRef.current.addEventListener('dragleave', (e) => {
        e.preventDefault()
        dropAreaRef.current?.classList.remove('border-blue-500')
      })
      dropAreaRef.current.addEventListener('drop', (e) => {
        e.preventDefault()
        dropAreaRef.current?.classList.remove('border-blue-500')
      })


    }
  }, [])

  return (
    <div className='px-4 pb-4'>
      <div>拖放文件/文件夹到下方区域</div>
      <div ref={dropAreaRef}
        className='border-2 border-dashed border-gray-300 rounded-md p-4 mt-4 text-gray-400 text-2xl h-50 flex items-center justify-center'>请拖放文件或文件夹到这里</div>
    </div>
  )
}

export default DropUpload
