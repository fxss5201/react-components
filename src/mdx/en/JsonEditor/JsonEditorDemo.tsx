import { useState } from 'react'
import { Checkbox } from 'antd'
import JsonEditor from '@/components/JsonEditor'

function JsonEditorDemo() {
  const [enableCopy, setEnableCopy] = useState(true)
  const [enableSearch, setEnableSearch] = useState(true)
  const [isCodeEditor, setIsCodeEditor] = useState(true)
  return (
    <>
      <Checkbox checked={enableCopy} onChange={(e) => setEnableCopy(e.target.checked)}>Enable custom copy code function</Checkbox>
      <Checkbox checked={enableSearch} onChange={(e) => setEnableSearch(e.target.checked)}>Enable search</Checkbox>
      <Checkbox checked={isCodeEditor} onChange={(e) => setIsCodeEditor(e.target.checked)}>Enable code editor</Checkbox>
      <JsonEditor
        className='mt-2'
        jsonClassName='max-h-[50vh] overflow-auto'
        enableCopy={enableCopy}
        enableSearch={enableSearch}
        isCodeEditor={isCodeEditor}
        onUpdate={(data) => console.log('onUpdate', data)}
        onEdit={(data) => console.log('onEdit', data)}
        onDelete={(data) => console.log('onDelete', data)}
        onAdd={(data) => console.log('onAdd', data)}
      >
        {{
          name: '张三',
          age: 18,
          sex: '男',
          books: [
            {
              name: '《三国演义》',
              author: '罗贯中',
            },
            {
              name: '《水浒传》',
              author: '施耐庵',
            },
            {
              name: '《西游记》',
              author: '吴承恩',
            },
            {
              name: '《红楼梦》',
              author: '曹雪芹',
            },
          ],
          toys: [
            {
              name: '玩具1',
              price: 100,
            },
            {
              name: '玩具2',
              price: 200,
            },
            {
              name: '玩具3',
              price: 300,
            },
            {
              name: '玩具4',
              price: 400,
            },
            {
              name: '玩具5',
              price: 500,
            },
            {
              name: '玩具6',
              price: 600,
            },
          ],
        }}
      </JsonEditor>
    </>
  )
}

export default JsonEditorDemo
