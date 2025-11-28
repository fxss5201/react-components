import{c as E,r as p,j as e,a6 as u,u as N}from"./index-Dd62DqUr.js";import{u as y,M as w}from"./MDXRender-DO1pX65U.js";import{P as g}from"./Playground-CSNO60Ow.js";import{J as S}from"./JsonEditor-DSvVl0IO.js";import"./CodeEditor-BFvI7CoV.js";import"./JsonRender-3M2gVJ7Q.js";import"./use-undo.m-Bk1lAah2.js";function O(){const o=E.c(14),[n,j]=p.useState(!0),[t,f]=p.useState(!0);let r;o[0]===Symbol.for("react.memo_cache_sentinel")?(r=d=>j(d.target.checked),o[0]=r):r=o[0];let h;o[1]!==n?(h=e.jsx(u,{checked:n,onChange:r,children:"启用自定义复制代码功能"}),o[1]=n,o[2]=h):h=o[2];let l;o[3]===Symbol.for("react.memo_cache_sentinel")?(l=d=>f(d.target.checked),o[3]=l):l=o[3];let c;o[4]!==t?(c=e.jsx(u,{checked:t,onChange:l,children:"启用搜索"}),o[4]=t,o[5]=c):c=o[5];let a;o[6]===Symbol.for("react.memo_cache_sentinel")?(a={name:"张三",age:18,sex:"男",books:[{name:"《三国演义》",author:"罗贯中"},{name:"《水浒传》",author:"施耐庵"},{name:"《西游记》",author:"吴承恩"},{name:"《红楼梦》",author:"曹雪芹"}],toys:[{name:"玩具1",price:100},{name:"玩具2",price:200},{name:"玩具3",price:300},{name:"玩具4",price:400},{name:"玩具5",price:500},{name:"玩具6",price:600}]},o[6]=a):a=o[6];let s;o[7]!==n||o[8]!==t?(s=e.jsx(S,{viewOnly:!0,enableCopy:n,enableSearch:t,className:"mt-2",jsonClassName:"max-h-[50vh] overflow-auto",children:a}),o[7]=n,o[8]=t,o[9]=s):s=o[9];let i;return o[10]!==h||o[11]!==c||o[12]!==s?(i=e.jsxs(e.Fragment,{children:[h,c,s]}),o[10]=h,o[11]=c,o[12]=s,o[13]=i):i=o[13],i}const D=`import { useState } from 'react'
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
`;function _(){const o=E.c(19),[n,j]=p.useState(!0),[t,f]=p.useState(!0),[r,h]=p.useState(!0);let l;o[0]===Symbol.for("react.memo_cache_sentinel")?(l=m=>j(m.target.checked),o[0]=l):l=o[0];let c;o[1]!==n?(c=e.jsx(u,{checked:n,onChange:l,children:"启用自定义复制代码功能"}),o[1]=n,o[2]=c):c=o[2];let a;o[3]===Symbol.for("react.memo_cache_sentinel")?(a=m=>f(m.target.checked),o[3]=a):a=o[3];let s;o[4]!==t?(s=e.jsx(u,{checked:t,onChange:a,children:"启用搜索"}),o[4]=t,o[5]=s):s=o[5];let i;o[6]===Symbol.for("react.memo_cache_sentinel")?(i=m=>h(m.target.checked),o[6]=i):i=o[6];let d;o[7]!==r?(d=e.jsx(u,{checked:r,onChange:i,children:"启用代码编辑器"}),o[7]=r,o[8]=d):d=o[8];let b;o[9]===Symbol.for("react.memo_cache_sentinel")?(b={name:"张三",age:18,sex:"男",books:[{name:"《三国演义》",author:"罗贯中"},{name:"《水浒传》",author:"施耐庵"},{name:"《西游记》",author:"吴承恩"},{name:"《红楼梦》",author:"曹雪芹"}],toys:[{name:"玩具1",price:100},{name:"玩具2",price:200},{name:"玩具3",price:300},{name:"玩具4",price:400},{name:"玩具5",price:500},{name:"玩具6",price:600}]},o[9]=b):b=o[9];let x;o[10]!==n||o[11]!==t||o[12]!==r?(x=e.jsx(S,{className:"mt-2",jsonClassName:"max-h-[50vh] overflow-auto",enableCopy:n,enableSearch:t,isCodeEditor:r,onUpdate:V,onEdit:U,onDelete:F,onAdd:v,children:b}),o[10]=n,o[11]=t,o[12]=r,o[13]=x):x=o[13];let C;return o[14]!==c||o[15]!==s||o[16]!==d||o[17]!==x?(C=e.jsxs(e.Fragment,{children:[c,s,d,x]}),o[14]=c,o[15]=s,o[16]=d,o[17]=x,o[18]=C):C=o[18],C}function v(o){return console.log("onAdd",o)}function F(o){return console.log("onDelete",o)}function U(o){return console.log("onEdit",o)}function V(o){return console.log("onUpdate",o)}const A=`import { useState } from 'react'
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
`;function J(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...y(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"jsoneditor",children:"JsonEditor"}),`
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
import { type LocaleType } from '@/config'

export type JsonEditorProps = {
  children: object
  viewOnly?: boolean
  enableCopy?: boolean
  enableSearch?: boolean
  className?: string
  searchClassName?: string
  jsonClassName?: string
  locale?: LocaleType
  isCodeEditor?: boolean
  onUpdate?: UpdateFunction
  onEdit?: UpdateFunction
  onDelete?: UpdateFunction
  onAdd?: UpdateFunction
  onChange?: OnChangeFunction
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"属性"}),e.jsx(n.th,{children:"说明"}),e.jsx(n.th,{children:"类型"}),e.jsx(n.th,{children:"默认值"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"children"})}),e.jsx(n.td,{children:"JSON 对象"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"object"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"viewOnly"})}),e.jsx(n.td,{children:"是否只读"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"enableCopy"})}),e.jsx(n.td,{children:"是否开启自定义复制代码功能"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"enableSearch"})}),e.jsx(n.td,{children:"是否开启搜索功能"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"className"})}),e.jsx(n.td,{children:"自定义类名"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"searchClassName"})}),e.jsx(n.td,{children:"搜索框自定义类名"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"jsonClassName"})}),e.jsx(n.td,{children:"JSON显示区域自定义类名"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"locale"})}),e.jsx(n.td,{children:"语言"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"LocaleType"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"zh"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"isCodeEditor"})}),e.jsx(n.td,{children:"是否使用代码编辑器"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onUpdate"})}),e.jsx(n.td,{children:"更新回调"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UpdateFunction"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onEdit"})}),e.jsx(n.td,{children:"编辑回调"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UpdateFunction"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onDelete"})}),e.jsx(n.td,{children:"删除回调"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UpdateFunction"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onAdd"})}),e.jsx(n.td,{children:"添加回调"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UpdateFunction"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onChange"})}),e.jsx(n.td,{children:"变化回调"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"OnChangeFunction"})}),e.jsx(n.td,{children:"-"})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onUpdate"}),"/ ",e.jsx(n.code,{children:"onEdit"}),"/ ",e.jsx(n.code,{children:"onDelete"}),"/ ",e.jsx(n.code,{children:"onAdd"})," / ",e.jsx(n.code,{children:"onChange"})," 具体用法可参照 ",e.jsx(n.a,{href:"https://github.com/CarlosNZ/json-edit-react?tab=readme-ov-file#update-functions",children:"json-edit-react"})]}),`
`,e.jsx(n.h2,{id:"演示示例",children:"演示示例"}),`
`,e.jsx(n.h3,{id:"json-对象编辑",children:"JSON 对象编辑"}),`
`,e.jsx(g,{code:A,title:"JSON 对象编辑",description:"JSON 对象编辑，开启编辑功能。",children:e.jsx(_,{})}),`
`,e.jsxs(n.h3,{id:"jsonview-组件",children:[e.jsx(n.code,{children:"JsonView"})," 组件"]}),`
`,e.jsx(g,{code:D,title:"JSON 对象仅显示",description:"JSON 对象仅显示，不开启编辑功能, 使用 `JsonView` 组件，是 `JsonEditor` 组件的简单封装。",children:e.jsx(O,{})}),`
`,e.jsxs(n.h4,{id:"jsonview-源码",children:[e.jsx(n.code,{children:"JsonView"})," 源码"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import JsonEditor from './JsonEditor'
import { type LocaleType } from '@/config'

export type JsonViewProps = {
  children: object
  enableCopy?: boolean
  enableSearch?: boolean
  className?: string
  searchClassName?: string
  jsonClassName?: string
  locale?: LocaleType
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
      locale={locale}
    >{children}</JsonEditor>
  )
}

export default JsonView
`})})]})}function P(o={}){const{wrapper:n}={...y(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(J,{...o})}):J(o)}function B(){const o=E.c(14),[n,j]=p.useState(!0),[t,f]=p.useState(!0);let r;o[0]===Symbol.for("react.memo_cache_sentinel")?(r=d=>j(d.target.checked),o[0]=r):r=o[0];let h;o[1]!==n?(h=e.jsx(u,{checked:n,onChange:r,children:"Enable custom copy code function"}),o[1]=n,o[2]=h):h=o[2];let l;o[3]===Symbol.for("react.memo_cache_sentinel")?(l=d=>f(d.target.checked),o[3]=l):l=o[3];let c;o[4]!==t?(c=e.jsx(u,{checked:t,onChange:l,children:"Enable search"}),o[4]=t,o[5]=c):c=o[5];let a;o[6]===Symbol.for("react.memo_cache_sentinel")?(a={name:"张三",age:18,sex:"男",books:[{name:"《三国演义》",author:"罗贯中"},{name:"《水浒传》",author:"施耐庵"},{name:"《西游记》",author:"吴承恩"},{name:"《红楼梦》",author:"曹雪芹"}],toys:[{name:"玩具1",price:100},{name:"玩具2",price:200},{name:"玩具3",price:300},{name:"玩具4",price:400},{name:"玩具5",price:500},{name:"玩具6",price:600}]},o[6]=a):a=o[6];let s;o[7]!==n||o[8]!==t?(s=e.jsx(S,{viewOnly:!0,enableCopy:n,enableSearch:t,className:"mt-2",jsonClassName:"max-h-[50vh] overflow-auto",children:a}),o[7]=n,o[8]=t,o[9]=s):s=o[9];let i;return o[10]!==h||o[11]!==c||o[12]!==s?(i=e.jsxs(e.Fragment,{children:[h,c,s]}),o[10]=h,o[11]=c,o[12]=s,o[13]=i):i=o[13],i}const $=`import { useState } from 'react'
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
`;function L(){const o=E.c(19),[n,j]=p.useState(!0),[t,f]=p.useState(!0),[r,h]=p.useState(!0);let l;o[0]===Symbol.for("react.memo_cache_sentinel")?(l=m=>j(m.target.checked),o[0]=l):l=o[0];let c;o[1]!==n?(c=e.jsx(u,{checked:n,onChange:l,children:"Enable custom copy code function"}),o[1]=n,o[2]=c):c=o[2];let a;o[3]===Symbol.for("react.memo_cache_sentinel")?(a=m=>f(m.target.checked),o[3]=a):a=o[3];let s;o[4]!==t?(s=e.jsx(u,{checked:t,onChange:a,children:"Enable search"}),o[4]=t,o[5]=s):s=o[5];let i;o[6]===Symbol.for("react.memo_cache_sentinel")?(i=m=>h(m.target.checked),o[6]=i):i=o[6];let d;o[7]!==r?(d=e.jsx(u,{checked:r,onChange:i,children:"Enable code editor"}),o[7]=r,o[8]=d):d=o[8];let b;o[9]===Symbol.for("react.memo_cache_sentinel")?(b={name:"张三",age:18,sex:"男",books:[{name:"《三国演义》",author:"罗贯中"},{name:"《水浒传》",author:"施耐庵"},{name:"《西游记》",author:"吴承恩"},{name:"《红楼梦》",author:"曹雪芹"}],toys:[{name:"玩具1",price:100},{name:"玩具2",price:200},{name:"玩具3",price:300},{name:"玩具4",price:400},{name:"玩具5",price:500},{name:"玩具6",price:600}]},o[9]=b):b=o[9];let x;o[10]!==n||o[11]!==t||o[12]!==r?(x=e.jsx(S,{className:"mt-2",jsonClassName:"max-h-[50vh] overflow-auto",enableCopy:n,enableSearch:t,isCodeEditor:r,onUpdate:R,onEdit:M,onDelete:I,onAdd:T,children:b}),o[10]=n,o[11]=t,o[12]=r,o[13]=x):x=o[13];let C;return o[14]!==c||o[15]!==s||o[16]!==d||o[17]!==x?(C=e.jsxs(e.Fragment,{children:[c,s,d,x]}),o[14]=c,o[15]=s,o[16]=d,o[17]=x,o[18]=C):C=o[18],C}function T(o){return console.log("onAdd",o)}function I(o){return console.log("onDelete",o)}function M(o){return console.log("onEdit",o)}function R(o){return console.log("onUpdate",o)}const X=`import { useState } from 'react'
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
`;function k(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...y(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"jsoneditor",children:"JsonEditor"}),`
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
import { type LocaleType } from '@/config'

export type JsonEditorProps = {
  children: object
  viewOnly?: boolean
  enableCopy?: boolean
  enableSearch?: boolean
  className?: string
  searchClassName?: string
  jsonClassName?: string
  locale?: LocaleType
  isCodeEditor?: boolean
  onUpdate?: UpdateFunction
  onEdit?: UpdateFunction
  onDelete?: UpdateFunction
  onAdd?: UpdateFunction
  onChange?: OnChangeFunction
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"children"})}),e.jsx(n.td,{children:"JSON object"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"object"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"viewOnly"})}),e.jsx(n.td,{children:"Whether to read-only"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"enableCopy"})}),e.jsx(n.td,{children:"Whether to enable custom copy code function"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"enableSearch"})}),e.jsx(n.td,{children:"Whether to enable search function"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"className"})}),e.jsx(n.td,{children:"Custom class name"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"searchClassName"})}),e.jsx(n.td,{children:"Search box custom class name"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"jsonClassName"})}),e.jsx(n.td,{children:"JSON display area custom class name"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"locale"})}),e.jsx(n.td,{children:"Language"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"LocaleType"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"zh"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"isCodeEditor"})}),e.jsx(n.td,{children:"Whether to use code editor"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onUpdate"})}),e.jsx(n.td,{children:"Update callback"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UpdateFunction"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onEdit"})}),e.jsx(n.td,{children:"Edit callback"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UpdateFunction"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onDelete"})}),e.jsx(n.td,{children:"Delete callback"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UpdateFunction"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onAdd"})}),e.jsx(n.td,{children:"Add callback"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UpdateFunction"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onChange"})}),e.jsx(n.td,{children:"Change callback"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"OnChangeFunction"})}),e.jsx(n.td,{children:"-"})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onUpdate"}),"/ ",e.jsx(n.code,{children:"onEdit"}),"/ ",e.jsx(n.code,{children:"onDelete"}),"/ ",e.jsx(n.code,{children:"onAdd"})," / ",e.jsx(n.code,{children:"onChange"})," specific usage can refer to ",e.jsx(n.a,{href:"https://github.com/CarlosNZ/json-edit-react?tab=readme-ov-file#update-functions",children:"json-edit-react"})]}),`
`,e.jsx(n.h2,{id:"demos",children:"Demos"}),`
`,e.jsx(n.h3,{id:"json-object-editor",children:"JSON Object Editor"}),`
`,e.jsx(g,{code:X,title:"JSON Object Editor",description:"JSON Object Editor, enable edit function.",children:e.jsx(L,{})}),`
`,e.jsxs(n.h3,{id:"jsonview-component",children:[e.jsx(n.code,{children:"JsonView"})," Component"]}),`
`,e.jsx(g,{code:$,title:"JSON Object Viewer",description:"JSON Object Viewer, disable edit function, using `JsonView` component is a simple encapsulation of `JsonEditor` component.",children:e.jsx(B,{})}),`
`,e.jsxs(n.h4,{id:"jsonview-source-code",children:[e.jsx(n.code,{children:"JsonView"})," Source Code"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import JsonEditor from './JsonEditor'
import { type LocaleType } from '@/config'

export type JsonViewProps = {
  children: object
  enableCopy?: boolean
  enableSearch?: boolean
  className?: string
  searchClassName?: string
  jsonClassName?: string
  locale?: LocaleType
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
      locale={locale}
    >{children}</JsonEditor>
  )
}

export default JsonView
`})})]})}function W(o={}){const{wrapper:n}={...y(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(k,{...o})}):k(o)}function Y(){const o=E.c(2),n=N();let j;return o[0]!==n?(j=e.jsx("div",{className:"px-4 pb-4",children:e.jsx(w,{children:n==="zh"?e.jsx(P,{}):e.jsx(W,{})})}),o[0]=n,o[1]=j):j=o[1],j}export{Y as default};
