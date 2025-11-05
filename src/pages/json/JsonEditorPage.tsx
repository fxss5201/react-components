import JsonEditor from '../../components/JsonEditor'

function JsonEditorPage() {
  return (
    <div className='px-4 pb-4'>
      <JsonEditor
        onUpdate={(data) => console.log('onUpdate', data)}
        onEdit={(data) => console.log('onEdit', data)}
        onDelete={(data) => console.log('onDelete', data)}
        onAdd={(data) => console.log('onAdd', data)}
      >
        {{
          name: '张三',
          age: 18,
          sex: '男',
        }}
      </JsonEditor>

      <JsonEditor
        className='mt-4'
        isCodeEditor={true}
        onUpdate={(data) => console.log('onUpdate', data)}
        onEdit={(data) => console.log('onEdit', data)}
        onDelete={(data) => console.log('onDelete', data)}
        onAdd={(data) => console.log('onAdd', data)}
      >
        {{
          name: '张三',
          age: 18,
          sex: '男',
        }}
      </JsonEditor>
    </div>
  )
}

export default JsonEditorPage
