import { useState } from 'react'
import { Input } from 'antd'

function InputBox() {
  const [value, setValue] = useState('')
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className='ml-4'
      placeholder='请输入'
    />
  )
}

export default InputBox
