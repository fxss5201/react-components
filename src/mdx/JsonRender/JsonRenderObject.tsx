import { useState } from 'react'
import { Checkbox } from 'antd'
import JsonRender from '@/components/JsonRender'

function JsonRenderObject() {
  const [enableCopy, setEnableCopy] = useState(true)
  const jsonData = {
    "name": "张三",
    "age": 18,
    "gender": "男"
  }

  return (
    <>
      <Checkbox checked={enableCopy} onChange={(e) => setEnableCopy(e.target.checked)}>启用代码复制</Checkbox>
      <JsonRender enableCopy={enableCopy} className='mt-2!'>{jsonData}</JsonRender>
    </>
  )
}

export default JsonRenderObject
