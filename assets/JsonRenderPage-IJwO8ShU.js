import{b as a,j as e}from"./@uiw/react-codemirror-dimZJgSu.js";import{c as l,C as h,u}from"./index-CwDalt6B.js";import{M as g}from"./MDXRender--j0cKFwg.js";import{P as i}from"./Playground-XZt4ylVh.js";import{J as j}from"./JsonRender-CBqOC-Sc.js";import{u as x}from"./@mdx-js/react-BwGmxI0N.js";import"./react-syntax-highlighter-DW6ulm9l.js";import"./markdown-plugins-CqPL4kxN.js";import"./react-markdown-U0gPFawi.js";function C(){const r=l.c(3),[n,o]=a.useState(!0);let s;r[0]===Symbol.for("react.memo_cache_sentinel")?(s=c=>o(c.target.checked),r[0]=s):s=r[0];let t;return r[1]!==n?(t=e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:n,onChange:s,children:"启用代码复制"}),e.jsx(j,{enableCopy:n,className:"mt-2!",children:`{
    "name": "张三",
    "age": 18,
    "gender": "男"
  }`})]}),r[1]=n,r[2]=t):t=r[2],t}const f=`import { useState } from 'react'
import { Checkbox } from 'antd'
import JsonRender from '@/components/JsonRender'

function JsonRenderString() {
  const [enableCopy, setEnableCopy] = useState(true)
  const jsonData = \`{
    "name": "张三",
    "age": 18,
    "gender": "男"
  }\`

  return (
    <>
      <Checkbox checked={enableCopy} onChange={(e) => setEnableCopy(e.target.checked)}>启用代码复制</Checkbox>
      <JsonRender enableCopy={enableCopy} className='mt-2!'>{jsonData}</JsonRender>
    </>
  )
}

export default JsonRenderString
`;function y(){const r=l.c(4),[n,o]=a.useState(!0);let s;r[0]===Symbol.for("react.memo_cache_sentinel")?(s={name:"张三",age:18,gender:"男"},r[0]=s):s=r[0];const t=s;let c;r[1]===Symbol.for("react.memo_cache_sentinel")?(c=p=>o(p.target.checked),r[1]=c):c=r[1];let d;return r[2]!==n?(d=e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:n,onChange:c,children:"启用代码复制"}),e.jsx(j,{enableCopy:n,className:"mt-2!",children:t})]}),r[2]=n,r[3]=d):d=r[3],d}const R=`import { useState } from 'react'
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
`;function m(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...x(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"jsonrender",children:"JsonRender"}),`
`,e.jsx(n.p,{children:"JsonRender 组件用于展示 JSON 字符串的渲染结果。只是对 MdRender 组件的简单封装。"}),`
`,e.jsx(n.h2,{id:"目录",children:"目录"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#api",children:"API"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E5%8F%82%E6%95%B0-props",children:"参数 Props"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#%E6%BC%94%E7%A4%BA%E7%A4%BA%E4%BE%8B",children:"演示示例"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E5%B1%95%E7%A4%BA-json-%E5%AD%97%E7%AC%A6%E4%B8%B2",children:"展示 JSON 字符串"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E5%B1%95%E7%A4%BA-json-%E5%AF%B9%E8%B1%A1",children:"展示 JSON 对象"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E6%BA%90%E7%A0%81",children:"源码"})}),`
`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.h3,{id:"参数-props",children:"参数 Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type MdRenderProps = {
  children: object | string
  className?: string
  codeClassName?: string
  enableCopy?: boolean
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"属性"}),e.jsx(n.th,{children:"说明"}),e.jsx(n.th,{children:"类型"}),e.jsx(n.th,{children:"默认值"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"children"})}),e.jsx(n.td,{children:"JSON 字符串或对象"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"object | string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"className"})}),e.jsx(n.td,{children:"自定义类名"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"codeClassName"})}),e.jsx(n.td,{children:"自定义代码块类名"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"enableCopy"})}),e.jsx(n.td,{children:"是否开启复制代码功能"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})})]})]})]}),`
`,e.jsx(n.h2,{id:"演示示例",children:"演示示例"}),`
`,e.jsx(n.h3,{id:"展示-json-字符串",children:"展示 JSON 字符串"}),`
`,e.jsx(i,{code:f,title:"展示 JSON 字符串",description:"展示 JSON 字符串的渲染结果。",children:e.jsx(C,{})}),`
`,e.jsx(n.h3,{id:"展示-json-对象",children:"展示 JSON 对象"}),`
`,e.jsx(i,{code:R,title:"展示 JSON 对象",description:"展示 JSON 对象的渲染结果。",children:e.jsx(y,{})}),`
`,e.jsx(n.h2,{id:"源码",children:"源码"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import MdRender from './MdRender'

export type JsonRenderProps = {
  children: object | string
  className?: string
  codeClassName?: string
  enableCopy?: boolean
}

function JsonRender({ children, className, enableCopy = true }: JsonRenderProps) {
  let jsonData = ''
  if (typeof children === 'string') {
    jsonData = children
  } else {
    jsonData = JSON.stringify(children, null, 2)
  }
  return (
    <MdRender className={className} enableCopy={enableCopy}>{\`\\\`\\\`\\\`json\\n\${jsonData}\\n\\\`\\\`\\\`\`}</MdRender>
  )
}

export default JsonRender
`})})]})}function J(r={}){const{wrapper:n}={...x(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(m,{...r})}):m(r)}function N(){const r=l.c(3),[n,o]=a.useState(!0);let s;r[0]===Symbol.for("react.memo_cache_sentinel")?(s=c=>o(c.target.checked),r[0]=s):s=r[0];let t;return r[1]!==n?(t=e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:n,onChange:s,children:"Enable copy code"}),e.jsx(j,{enableCopy:n,className:"mt-2!",children:`{
    "name": "张三",
    "age": 18,
    "gender": "男"
  }`})]}),r[1]=n,r[2]=t):t=r[2],t}const S=`import { useState } from 'react'
import { Checkbox } from 'antd'
import JsonRender from '@/components/JsonRender'

function JsonRenderString() {
  const [enableCopy, setEnableCopy] = useState(true)
  const jsonData = \`{
    "name": "张三",
    "age": 18,
    "gender": "男"
  }\`

  return (
    <>
      <Checkbox checked={enableCopy} onChange={(e) => setEnableCopy(e.target.checked)}>Enable copy code</Checkbox>
      <JsonRender enableCopy={enableCopy} className='mt-2!'>{jsonData}</JsonRender>
    </>
  )
}

export default JsonRenderString
`;function E(){const r=l.c(4),[n,o]=a.useState(!0);let s;r[0]===Symbol.for("react.memo_cache_sentinel")?(s={name:"张三",age:18,gender:"男"},r[0]=s):s=r[0];const t=s;let c;r[1]===Symbol.for("react.memo_cache_sentinel")?(c=p=>o(p.target.checked),r[1]=c):c=r[1];let d;return r[2]!==n?(d=e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:n,onChange:c,children:"Enable copy code"}),e.jsx(j,{enableCopy:n,className:"mt-2!",children:t})]}),r[2]=n,r[3]=d):d=r[3],d}const O=`import { useState } from 'react'
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
      <Checkbox checked={enableCopy} onChange={(e) => setEnableCopy(e.target.checked)}>Enable copy code</Checkbox>
      <JsonRender enableCopy={enableCopy} className='mt-2!'>{jsonData}</JsonRender>
    </>
  )
}

export default JsonRenderObject
`;function b(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...x(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"jsonrender",children:"JsonRender"}),`
`,e.jsx(n.p,{children:"JsonRender component is used to render JSON strings or objects. It is just a simple encapsulation of the MdRender component."}),`
`,e.jsx(n.h2,{id:"toc",children:"TOC"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#api",children:"API"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#parameters-props",children:"Parameters Props"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#demo-examples",children:"Demo Examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#render-json-string",children:"Render JSON String"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#render-json-object",children:"Render JSON Object"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#source-code",children:"Source Code"})}),`
`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.h3,{id:"parameters-props",children:"Parameters Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type MdRenderProps = {
  children: object | string
  className?: string
  codeClassName?: string
  enableCopy?: boolean
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"children"})}),e.jsx(n.td,{children:"JSON string or object"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"object | string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"className"})}),e.jsx(n.td,{children:"Custom class name"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"codeClassName"})}),e.jsx(n.td,{children:"Custom code block class name"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"enableCopy"})}),e.jsx(n.td,{children:"Whether to enable copy code function"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})})]})]})]}),`
`,e.jsx(n.h2,{id:"demo-examples",children:"Demo Examples"}),`
`,e.jsx(n.h3,{id:"render-json-string",children:"Render JSON String"}),`
`,e.jsx(i,{code:S,title:"Render JSON String",description:"Render JSON string result.",children:e.jsx(N,{})}),`
`,e.jsx(n.h3,{id:"render-json-object",children:"Render JSON Object"}),`
`,e.jsx(i,{code:O,title:"Render JSON Object",description:"Render JSON object result.",children:e.jsx(E,{})}),`
`,e.jsx(n.h2,{id:"source-code",children:"Source Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import MdRender from './MdRender'

export type JsonRenderProps = {
  children: object | string
  className?: string
  codeClassName?: string
  enableCopy?: boolean
}

function JsonRender({ children, className, enableCopy = true }: JsonRenderProps) {
  let jsonData = ''
  if (typeof children === 'string') {
    jsonData = children
  } else {
    jsonData = JSON.stringify(children, null, 2)
  }
  return (
    <MdRender className={className} enableCopy={enableCopy}>{\`\\\`\\\`\\\`json\\n\${jsonData}\\n\\\`\\\`\\\`\`}</MdRender>
  )
}

export default JsonRender
`})})]})}function k(r={}){const{wrapper:n}={...x(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(b,{...r})}):b(r)}function X(){const r=l.c(2),n=u();let o;return r[0]!==n?(o=e.jsx("div",{className:"px-4 pb-4",children:e.jsx(g,{children:n==="zh"?e.jsx(J,{}):e.jsx(k,{})})}),r[0]=n,r[1]=o):o=r[1],o}export{X as default};
