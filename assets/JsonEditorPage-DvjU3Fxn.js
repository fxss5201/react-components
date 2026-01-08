import{b as p,j as e}from"./@uiw/react-codemirror-dimZJgSu.js";import{c as E,C as u,u as N}from"./index-CwDalt6B.js";import{M as w}from"./MDXRender--j0cKFwg.js";import{P as g}from"./Playground-XZt4ylVh.js";import{J as y}from"./JsonEditor-C8Qw5Tcq.js";import{u as S}from"./@mdx-js/react-BwGmxI0N.js";import"./react-syntax-highlighter-DW6ulm9l.js";import"./markdown-plugins-CqPL4kxN.js";import"./react-markdown-U0gPFawi.js";import"./CodeEditor-DCLYA5gR.js";import"./JsonRender-CBqOC-Sc.js";import"./use-undo.m-DQTOi8z5.js";import"./index-C7j3i05K.js";function O(){const t=E.c(14),[n,j]=p.useState(!0),[o,f]=p.useState(!0);let r;t[0]===Symbol.for("react.memo_cache_sentinel")?(r=d=>j(d.target.checked),t[0]=r):r=t[0];let h;t[1]!==n?(h=e.jsx(u,{checked:n,onChange:r,children:"启用自定义复制代码功能"}),t[1]=n,t[2]=h):h=t[2];let a;t[3]===Symbol.for("react.memo_cache_sentinel")?(a=d=>f(d.target.checked),t[3]=a):a=t[3];let s;t[4]!==o?(s=e.jsx(u,{checked:o,onChange:a,children:"启用搜索"}),t[4]=o,t[5]=s):s=t[5];let i;t[6]===Symbol.for("react.memo_cache_sentinel")?(i={name:"张三",age:18,sex:"男",books:[{name:"《三国演义》",author:"罗贯中"},{name:"《水浒传》",author:"施耐庵"},{name:"《西游记》",author:"吴承恩"},{name:"《红楼梦》",author:"曹雪芹"}],toys:[{name:"玩具1",price:100},{name:"玩具2",price:200},{name:"玩具3",price:300},{name:"玩具4",price:400},{name:"玩具5",price:500},{name:"玩具6",price:600}]},t[6]=i):i=t[6];let c;t[7]!==n||t[8]!==o?(c=e.jsx(y,{viewOnly:!0,enableCopy:n,enableSearch:o,className:"mt-2",jsonClassName:"max-h-[50vh] overflow-auto",children:i}),t[7]=n,t[8]=o,t[9]=c):c=t[9];let l;return t[10]!==h||t[11]!==s||t[12]!==c?(l=e.jsxs(e.Fragment,{children:[h,s,c]}),t[10]=h,t[11]=s,t[12]=c,t[13]=l):l=t[13],l}const D=`import { useState } from 'react'
import { Checkbox } from 'antd'
import JsonEditor from '@/components/JsonEditor'

function JsonViewDemo() {
  const [enableCopy, setEnableCopy] = useState(true)
  const [enableSearch, setEnableSearch] = useState(true)
  return (
    <>
      <Checkbox checked={enableCopy} onChange={(e) => setEnableCopy(e.target.checked)}>启用自定义复制代码功能</Checkbox>
      <Checkbox checked={enableSearch} onChange={(e) => setEnableSearch(e.target.checked)}>启用搜索</Checkbox>
      <JsonEditor
        viewOnly={true}
        enableCopy={enableCopy}
        enableSearch={enableSearch}
        className='mt-2'
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
    </>
  )
}

export default JsonViewDemo
`;function _(){const t=E.c(19),[n,j]=p.useState(!0),[o,f]=p.useState(!0),[r,h]=p.useState(!0);let a;t[0]===Symbol.for("react.memo_cache_sentinel")?(a=m=>j(m.target.checked),t[0]=a):a=t[0];let s;t[1]!==n?(s=e.jsx(u,{checked:n,onChange:a,children:"启用自定义复制代码功能"}),t[1]=n,t[2]=s):s=t[2];let i;t[3]===Symbol.for("react.memo_cache_sentinel")?(i=m=>f(m.target.checked),t[3]=i):i=t[3];let c;t[4]!==o?(c=e.jsx(u,{checked:o,onChange:i,children:"启用搜索"}),t[4]=o,t[5]=c):c=t[5];let l;t[6]===Symbol.for("react.memo_cache_sentinel")?(l=m=>h(m.target.checked),t[6]=l):l=t[6];let d;t[7]!==r?(d=e.jsx(u,{checked:r,onChange:l,children:"启用代码编辑器"}),t[7]=r,t[8]=d):d=t[8];let b;t[9]===Symbol.for("react.memo_cache_sentinel")?(b={name:"张三",age:18,sex:"男",books:[{name:"《三国演义》",author:"罗贯中"},{name:"《水浒传》",author:"施耐庵"},{name:"《西游记》",author:"吴承恩"},{name:"《红楼梦》",author:"曹雪芹"}],toys:[{name:"玩具1",price:100},{name:"玩具2",price:200},{name:"玩具3",price:300},{name:"玩具4",price:400},{name:"玩具5",price:500},{name:"玩具6",price:600}]},t[9]=b):b=t[9];let x;t[10]!==n||t[11]!==o||t[12]!==r?(x=e.jsx(y,{className:"mt-2",jsonClassName:"max-h-[50vh] overflow-auto",enableCopy:n,enableSearch:o,isCodeEditor:r,onUpdate:V,onEdit:U,onDelete:F,onAdd:v,children:b}),t[10]=n,t[11]=o,t[12]=r,t[13]=x):x=t[13];let C;return t[14]!==s||t[15]!==c||t[16]!==d||t[17]!==x?(C=e.jsxs(e.Fragment,{children:[s,c,d,x]}),t[14]=s,t[15]=c,t[16]=d,t[17]=x,t[18]=C):C=t[18],C}function v(t){return console.log("onAdd",t)}function F(t){return console.log("onDelete",t)}function U(t){return console.log("onEdit",t)}function V(t){return console.log("onUpdate",t)}const A=`import { useState } from 'react'
import { Checkbox } from 'antd'
import JsonEditor from '@/components/JsonEditor'

function JsonEditorDemo() {
  const [enableCopy, setEnableCopy] = useState(true)
  const [enableSearch, setEnableSearch] = useState(true)
  const [isCodeEditor, setIsCodeEditor] = useState(true)
  return (
    <>
      <Checkbox checked={enableCopy} onChange={(e) => setEnableCopy(e.target.checked)}>启用自定义复制代码功能</Checkbox>
      <Checkbox checked={enableSearch} onChange={(e) => setEnableSearch(e.target.checked)}>启用搜索</Checkbox>
      <Checkbox checked={isCodeEditor} onChange={(e) => setIsCodeEditor(e.target.checked)}>启用代码编辑器</Checkbox>
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
`;function J(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...S(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"jsoneditor",children:"JsonEditor"}),`
`,e.jsx(n.p,{children:"JsonEditor 组件用于编辑 JSON 字符串。"}),`
`,e.jsx(n.h2,{id:"目录",children:"目录"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#api",children:"API"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E5%8F%82%E6%95%B0-props",children:"参数 Props"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#%E6%BC%94%E7%A4%BA%E7%A4%BA%E4%BE%8B",children:"演示示例"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#json-%E5%AF%B9%E8%B1%A1%E7%BC%96%E8%BE%91",children:"JSON 对象编辑"})}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.a,{href:"#jsonview-%E7%BB%84%E4%BB%B6",children:[e.jsx(n.code,{children:"JsonView"})," 组件"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"#jsonview-%E6%BA%90%E7%A0%81",children:[e.jsx(n.code,{children:"JsonView"})," 源码"]})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.h3,{id:"参数-props",children:"参数 Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import {
  type UpdateFunction,
  type OnChangeFunction,
  type CopyFunction,
  type OnErrorFunction,
} from 'json-edit-react'

export type JsonEditorProps = {
  children: object
  viewOnly?: boolean
  enableCopy?: boolean
  enableSearch?: boolean
  className?: string
  searchClassName?: string
  jsonClassName?: string
  isCodeEditor?: boolean
  onUpdate?: UpdateFunction
  onEdit?: UpdateFunction
  onDelete?: UpdateFunction
  onAdd?: UpdateFunction
  onChange?: OnChangeFunction
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"属性"}),e.jsx(n.th,{children:"说明"}),e.jsx(n.th,{children:"类型"}),e.jsx(n.th,{children:"默认值"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"children"})}),e.jsx(n.td,{children:"JSON 对象"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"object"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"viewOnly"})}),e.jsx(n.td,{children:"是否只读"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"enableCopy"})}),e.jsx(n.td,{children:"是否开启自定义复制代码功能"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"enableSearch"})}),e.jsx(n.td,{children:"是否开启搜索功能"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"className"})}),e.jsx(n.td,{children:"自定义类名"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"searchClassName"})}),e.jsx(n.td,{children:"搜索框自定义类名"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"jsonClassName"})}),e.jsx(n.td,{children:"JSON显示区域自定义类名"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"isCodeEditor"})}),e.jsx(n.td,{children:"是否使用代码编辑器"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onUpdate"})}),e.jsx(n.td,{children:"更新回调"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UpdateFunction"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onEdit"})}),e.jsx(n.td,{children:"编辑回调"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UpdateFunction"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onDelete"})}),e.jsx(n.td,{children:"删除回调"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UpdateFunction"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onAdd"})}),e.jsx(n.td,{children:"添加回调"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UpdateFunction"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onChange"})}),e.jsx(n.td,{children:"变化回调"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"OnChangeFunction"})}),e.jsx(n.td,{children:"-"})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onUpdate"}),"/ ",e.jsx(n.code,{children:"onEdit"}),"/ ",e.jsx(n.code,{children:"onDelete"}),"/ ",e.jsx(n.code,{children:"onAdd"})," / ",e.jsx(n.code,{children:"onChange"})," 具体用法可参照 ",e.jsx(n.a,{href:"https://github.com/CarlosNZ/json-edit-react?tab=readme-ov-file#update-functions",children:"json-edit-react"})]}),`
`,e.jsx(n.h2,{id:"演示示例",children:"演示示例"}),`
`,e.jsx(n.h3,{id:"json-对象编辑",children:"JSON 对象编辑"}),`
`,e.jsx(g,{code:A,title:"JSON 对象编辑",description:"JSON 对象编辑，开启编辑功能。",children:e.jsx(_,{})}),`
`,e.jsxs(n.h3,{id:"jsonview-组件",children:[e.jsx(n.code,{children:"JsonView"})," 组件"]}),`
`,e.jsx(g,{code:D,title:"JSON 对象仅显示",description:"JSON 对象仅显示，不开启编辑功能, 使用 `JsonView` 组件，是 `JsonEditor` 组件的简单封装。",children:e.jsx(O,{})}),`
`,e.jsxs(n.h4,{id:"jsonview-源码",children:[e.jsx(n.code,{children:"JsonView"})," 源码"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import JsonEditor from './JsonEditor'

export type JsonViewProps = {
  children: object
  enableCopy?: boolean
  enableSearch?: boolean
  className?: string
  searchClassName?: string
  jsonClassName?: string
}

function JsonView({
  children,
  enableCopy = true,
  enableSearch = true,
  className,
  searchClassName,
  jsonClassName,
  locale
}: JsonViewProps) {
  return (
    <JsonEditor
      viewOnly={true}
      enableCopy={enableCopy}
      enableSearch={enableSearch}
      className={className}
      searchClassName={searchClassName}
      jsonClassName={jsonClassName}
    >{children}</JsonEditor>
  )
}

export default JsonView
`})})]})}function P(t={}){const{wrapper:n}={...S(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(J,{...t})}):J(t)}function B(){const t=E.c(14),[n,j]=p.useState(!0),[o,f]=p.useState(!0);let r;t[0]===Symbol.for("react.memo_cache_sentinel")?(r=d=>j(d.target.checked),t[0]=r):r=t[0];let h;t[1]!==n?(h=e.jsx(u,{checked:n,onChange:r,children:"Enable custom copy code function"}),t[1]=n,t[2]=h):h=t[2];let a;t[3]===Symbol.for("react.memo_cache_sentinel")?(a=d=>f(d.target.checked),t[3]=a):a=t[3];let s;t[4]!==o?(s=e.jsx(u,{checked:o,onChange:a,children:"Enable search"}),t[4]=o,t[5]=s):s=t[5];let i;t[6]===Symbol.for("react.memo_cache_sentinel")?(i={name:"张三",age:18,sex:"男",books:[{name:"《三国演义》",author:"罗贯中"},{name:"《水浒传》",author:"施耐庵"},{name:"《西游记》",author:"吴承恩"},{name:"《红楼梦》",author:"曹雪芹"}],toys:[{name:"玩具1",price:100},{name:"玩具2",price:200},{name:"玩具3",price:300},{name:"玩具4",price:400},{name:"玩具5",price:500},{name:"玩具6",price:600}]},t[6]=i):i=t[6];let c;t[7]!==n||t[8]!==o?(c=e.jsx(y,{viewOnly:!0,enableCopy:n,enableSearch:o,className:"mt-2",jsonClassName:"max-h-[50vh] overflow-auto",children:i}),t[7]=n,t[8]=o,t[9]=c):c=t[9];let l;return t[10]!==h||t[11]!==s||t[12]!==c?(l=e.jsxs(e.Fragment,{children:[h,s,c]}),t[10]=h,t[11]=s,t[12]=c,t[13]=l):l=t[13],l}const $=`import { useState } from 'react'
import { Checkbox } from 'antd'
import JsonEditor from '@/components/JsonEditor'

function JsonViewDemo() {
  const [enableCopy, setEnableCopy] = useState(true)
  const [enableSearch, setEnableSearch] = useState(true)
  return (
    <>
      <Checkbox checked={enableCopy} onChange={(e) => setEnableCopy(e.target.checked)}>Enable custom copy code function</Checkbox>
      <Checkbox checked={enableSearch} onChange={(e) => setEnableSearch(e.target.checked)}>Enable search</Checkbox>
      <JsonEditor
        viewOnly={true}
        enableCopy={enableCopy}
        enableSearch={enableSearch}
        className='mt-2'
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
    </>
  )
}

export default JsonViewDemo
`;function I(){const t=E.c(19),[n,j]=p.useState(!0),[o,f]=p.useState(!0),[r,h]=p.useState(!0);let a;t[0]===Symbol.for("react.memo_cache_sentinel")?(a=m=>j(m.target.checked),t[0]=a):a=t[0];let s;t[1]!==n?(s=e.jsx(u,{checked:n,onChange:a,children:"Enable custom copy code function"}),t[1]=n,t[2]=s):s=t[2];let i;t[3]===Symbol.for("react.memo_cache_sentinel")?(i=m=>f(m.target.checked),t[3]=i):i=t[3];let c;t[4]!==o?(c=e.jsx(u,{checked:o,onChange:i,children:"Enable search"}),t[4]=o,t[5]=c):c=t[5];let l;t[6]===Symbol.for("react.memo_cache_sentinel")?(l=m=>h(m.target.checked),t[6]=l):l=t[6];let d;t[7]!==r?(d=e.jsx(u,{checked:r,onChange:l,children:"Enable code editor"}),t[7]=r,t[8]=d):d=t[8];let b;t[9]===Symbol.for("react.memo_cache_sentinel")?(b={name:"张三",age:18,sex:"男",books:[{name:"《三国演义》",author:"罗贯中"},{name:"《水浒传》",author:"施耐庵"},{name:"《西游记》",author:"吴承恩"},{name:"《红楼梦》",author:"曹雪芹"}],toys:[{name:"玩具1",price:100},{name:"玩具2",price:200},{name:"玩具3",price:300},{name:"玩具4",price:400},{name:"玩具5",price:500},{name:"玩具6",price:600}]},t[9]=b):b=t[9];let x;t[10]!==n||t[11]!==o||t[12]!==r?(x=e.jsx(y,{className:"mt-2",jsonClassName:"max-h-[50vh] overflow-auto",enableCopy:n,enableSearch:o,isCodeEditor:r,onUpdate:W,onEdit:X,onDelete:R,onAdd:M,children:b}),t[10]=n,t[11]=o,t[12]=r,t[13]=x):x=t[13];let C;return t[14]!==s||t[15]!==c||t[16]!==d||t[17]!==x?(C=e.jsxs(e.Fragment,{children:[s,c,d,x]}),t[14]=s,t[15]=c,t[16]=d,t[17]=x,t[18]=C):C=t[18],C}function M(t){return console.log("onAdd",t)}function R(t){return console.log("onDelete",t)}function X(t){return console.log("onEdit",t)}function W(t){return console.log("onUpdate",t)}const L=`import { useState } from 'react'
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
`;function k(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...S(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"jsoneditor",children:"JsonEditor"}),`
`,e.jsx(n.p,{children:"JsonEditor component is used to edit JSON strings."}),`
`,e.jsx(n.h2,{id:"toc",children:"TOC"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#api",children:"API"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#parameters-props",children:"Parameters Props"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#demos",children:"Demos"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#json-object-editor",children:"JSON Object Editor"})}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.a,{href:"#jsonview-component",children:[e.jsx(n.code,{children:"JsonView"})," Component"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"#jsonview-source-code",children:[e.jsx(n.code,{children:"JsonView"})," Source Code"]})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.h3,{id:"parameters-props",children:"Parameters Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import {
  type UpdateFunction,
  type OnChangeFunction,
  type CopyFunction,
  type OnErrorFunction,
} from 'json-edit-react'

export type JsonEditorProps = {
  children: object
  viewOnly?: boolean
  enableCopy?: boolean
  enableSearch?: boolean
  className?: string
  searchClassName?: string
  jsonClassName?: string
  isCodeEditor?: boolean
  onUpdate?: UpdateFunction
  onEdit?: UpdateFunction
  onDelete?: UpdateFunction
  onAdd?: UpdateFunction
  onChange?: OnChangeFunction
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"children"})}),e.jsx(n.td,{children:"JSON object"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"object"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"viewOnly"})}),e.jsx(n.td,{children:"Whether to read-only"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"enableCopy"})}),e.jsx(n.td,{children:"Whether to enable custom copy code function"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"enableSearch"})}),e.jsx(n.td,{children:"Whether to enable search function"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"className"})}),e.jsx(n.td,{children:"Custom class name"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"searchClassName"})}),e.jsx(n.td,{children:"Search box custom class name"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"jsonClassName"})}),e.jsx(n.td,{children:"JSON display area custom class name"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"isCodeEditor"})}),e.jsx(n.td,{children:"Whether to use code editor"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onUpdate"})}),e.jsx(n.td,{children:"Update callback"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UpdateFunction"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onEdit"})}),e.jsx(n.td,{children:"Edit callback"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UpdateFunction"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onDelete"})}),e.jsx(n.td,{children:"Delete callback"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UpdateFunction"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onAdd"})}),e.jsx(n.td,{children:"Add callback"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UpdateFunction"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onChange"})}),e.jsx(n.td,{children:"Change callback"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"OnChangeFunction"})}),e.jsx(n.td,{children:"-"})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onUpdate"}),"/ ",e.jsx(n.code,{children:"onEdit"}),"/ ",e.jsx(n.code,{children:"onDelete"}),"/ ",e.jsx(n.code,{children:"onAdd"})," / ",e.jsx(n.code,{children:"onChange"})," specific usage can refer to ",e.jsx(n.a,{href:"https://github.com/CarlosNZ/json-edit-react?tab=readme-ov-file#update-functions",children:"json-edit-react"})]}),`
`,e.jsx(n.h2,{id:"demos",children:"Demos"}),`
`,e.jsx(n.h3,{id:"json-object-editor",children:"JSON Object Editor"}),`
`,e.jsx(g,{code:L,title:"JSON Object Editor",description:"JSON Object Editor, enable edit function.",children:e.jsx(I,{})}),`
`,e.jsxs(n.h3,{id:"jsonview-component",children:[e.jsx(n.code,{children:"JsonView"})," Component"]}),`
`,e.jsx(g,{code:$,title:"JSON Object Viewer",description:"JSON Object Viewer, disable edit function, using `JsonView` component is a simple encapsulation of `JsonEditor` component.",children:e.jsx(B,{})}),`
`,e.jsxs(n.h4,{id:"jsonview-source-code",children:[e.jsx(n.code,{children:"JsonView"})," Source Code"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import JsonEditor from './JsonEditor'

export type JsonViewProps = {
  children: object
  enableCopy?: boolean
  enableSearch?: boolean
  className?: string
  searchClassName?: string
  jsonClassName?: string
}

function JsonView({
  children,
  enableCopy = true,
  enableSearch = true,
  className,
  searchClassName,
  jsonClassName,
  locale
}: JsonViewProps) {
  return (
    <JsonEditor
      viewOnly={true}
      enableCopy={enableCopy}
      enableSearch={enableSearch}
      className={className}
      searchClassName={searchClassName}
      jsonClassName={jsonClassName}
    >{children}</JsonEditor>
  )
}

export default JsonView
`})})]})}function T(t={}){const{wrapper:n}={...S(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(k,{...t})}):k(t)}function ce(){const t=E.c(2),n=N();let j;return t[0]!==n?(j=e.jsx("div",{className:"px-4 pb-4",children:e.jsx(w,{children:n==="zh"?e.jsx(P,{}):e.jsx(T,{})})}),t[0]=n,t[1]=j):j=t[1],j}export{ce as default};
