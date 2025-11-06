import JsonEditor from '../../components/JsonEditor'

function JsonEditorPage() {
  return (
    <div className='px-4 pb-4'>
      <JsonEditor
        viewOnly={true}
        jsonClassName='max-h-[50vh] overflow-auto'
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

      <JsonEditor
        className='mt-4'
        jsonClassName='max-h-[50vh] overflow-auto'
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
    </div>
  )
}

export default JsonEditorPage
