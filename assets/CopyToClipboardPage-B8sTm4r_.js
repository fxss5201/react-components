import{b as j,j as n}from"./@uiw/react-codemirror-dimZJgSu.js";import{I as u,c as p,a as C,u as T}from"./index-CwDalt6B.js";import{M as g}from"./MDXRender--j0cKFwg.js";import{P as x}from"./Playground-XZt4ylVh.js";import{u as m}from"./@mdx-js/react-BwGmxI0N.js";import"./react-syntax-highlighter-DW6ulm9l.js";import"./markdown-plugins-CqPL4kxN.js";import"./react-markdown-U0gPFawi.js";const{TextArea:E}=u;function A(){const t=p.c(8),[e,l]=j.useState("复制到剪贴板");let r;t[0]!==e?(r=n.jsx("div",{className:"absolute top-0 right-0 z-10",children:n.jsx(C,{text:e})}),t[0]=e,t[1]=r):r=t[1];let d;t[2]===Symbol.for("react.memo_cache_sentinel")?(d=c=>l(c.target.value),t[2]=d):d=t[2];let o;t[3]!==e?(o=n.jsx(E,{rows:3,value:e,onChange:d,placeholder:"请输入要复制的内容"}),t[3]=e,t[4]=o):o=t[4];let i;return t[5]!==r||t[6]!==o?(i=n.jsxs("div",{className:"relative",children:[r,o]}),t[5]=r,t[6]=o,t[7]=i):i=t[7],i}const N=`import { useState } from 'react'
import { Input } from 'antd'
import CopyToClipboard from '@/components/CopyToClipboard'

const { TextArea } = Input

function CopyToClipboardDemo() {
  const [content, setContent] = useState('复制到剪贴板')
  
  return (
    <div className='relative'>
      <div className='absolute top-0 right-0 z-10'>
        <CopyToClipboard text={content} />
      </div>
      <TextArea rows={3} value={content} onChange={e => setContent(e.target.value)} placeholder='请输入要复制的内容' />
    </div>
  )
}

export default CopyToClipboardDemo
`,{TextArea:B}=u;function D(){const t=p.c(9),[e,l]=j.useState("复制到剪贴板");let r;t[0]===Symbol.for("react.memo_cache_sentinel")?(r=function(b){const{copied:h,copyToClipboard:y}=b;return n.jsx("div",{className:"px-2 py-1 bg-gray-200 rounded cursor-pointer",onClick:()=>{h||y()},children:h?"已复制":"复制"})},t[0]=r):r=t[0];const d=r;let o;t[1]!==e?(o=n.jsx("div",{className:"absolute top-[1px] right-[1px] z-10",children:n.jsx(C,{text:e,children:d})}),t[1]=e,t[2]=o):o=t[2];let i;t[3]===Symbol.for("react.memo_cache_sentinel")?(i=a=>l(a.target.value),t[3]=i):i=t[3];let c;t[4]!==e?(c=n.jsx(B,{rows:3,value:e,onChange:i,placeholder:"请输入要复制的内容"}),t[4]=e,t[5]=c):c=t[5];let s;return t[6]!==o||t[7]!==c?(s=n.jsxs("div",{className:"relative",children:[o,c]}),t[6]=o,t[7]=c,t[8]=s):s=t[8],s}const R=`import { useState } from 'react'
import { Input } from 'antd'
import CopyToClipboard from '@/components/CopyToClipboard'

const { TextArea } = Input

function CopyToClipboardDemo() {
  const [content, setContent] = useState('复制到剪贴板')
  
  function childrenFn (props: { copied: boolean, copyToClipboard: () => void }) {
    const { copied, copyToClipboard } = props
    return (
      <div className='px-2 py-1 bg-gray-200 rounded cursor-pointer' onClick={() => {
        if (!copied) {
          copyToClipboard()
        }
      }}>
        {copied ? '已复制' : '复制'}
      </div>
    )
  }

  return (
    <div className='relative'>
      <div className='absolute top-[1px] right-[1px] z-10'>
        <CopyToClipboard text={content} children={childrenFn} />
      </div>
      <TextArea rows={3} value={content} onChange={e => setContent(e.target.value)} placeholder='请输入要复制的内容' />
    </div>
  )
}

export default CopyToClipboardDemo
`;function f(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...m(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"复制到剪贴板",children:"复制到剪贴板"}),`
`,n.jsxs(e.p,{children:["项目使用的是 ",n.jsx(e.code,{children:'"react": "^19.2.0"'})," 版本，本来使用 ",n.jsx(e.a,{href:"https://github.com/nkbt/react-copy-to-clipboard",children:"react-copy-to-clipboard"})," 库，但是该库不支持 React 19 版本，所以自行封装了。"]}),`
`,n.jsx(e.h2,{id:"目录",children:"目录"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"#api",children:"API"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"#%E5%8F%82%E6%95%B0-props",children:"参数 Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#children-%E8%AF%B4%E6%98%8E",children:"children 说明"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#children-%E9%BB%98%E8%AE%A4%E5%80%BC",children:"children 默认值"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"#%E6%BC%94%E7%A4%BA%E7%A4%BA%E4%BE%8B",children:"演示示例"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",children:"基本用法"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%A4%8D%E5%88%B6%E6%8C%89%E9%92%AE",children:"自定义复制按钮"})}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(e.h3,{id:"参数-props",children:"参数 Props"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`export type CopyToClipboardProps = {
  text?: string
  getText?: () => string
  children?: ((props: { copied: boolean, copyToClipboard: () => void }) => React.ReactNode)
  disabled?: boolean
  timeout?: number
  onCopy?: (text: string) => void
  onError?: (error: Error) => void
}
`})}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"text"})}),n.jsx(e.td,{children:"要复制的文本内容"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"-"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"getText"})}),n.jsxs(e.td,{children:["获取要复制的文本内容的函数，优先级高于 ",n.jsx(e.code,{children:"text"})]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"() => string"})}),n.jsx(e.td,{children:"-"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"children"})}),n.jsxs(e.td,{children:["子元素，用于自定义复制按钮的外观，",n.jsx(e.a,{href:"#children-%E8%AF%B4%E6%98%8E",children:"children 说明"})]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"React.ReactNode | ((props: { copied: boolean, copyToClipboard: () => void }) => React.ReactNode)"})}),n.jsx(e.td,{children:n.jsx(e.a,{href:"#children-%E9%BB%98%E8%AE%A4%E5%80%BC",children:"children 默认值"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"disabled"})}),n.jsx(e.td,{children:"是否禁用复制功能"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"false"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"timeout"})}),n.jsx(e.td,{children:"复制成功后的提示显示时间（毫秒）"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"2000"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onCopy"})}),n.jsx(e.td,{children:"复制成功后的回调函数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"(text: string) => void"})}),n.jsx(e.td,{children:"-"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onError"})}),n.jsx(e.td,{children:"复制失败后的回调函数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"(error: Error) => void"})}),n.jsx(e.td,{children:"-"})]})]})]}),`
`,n.jsx(e.h4,{id:"children-说明",children:"children 说明"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["当 ",n.jsx(e.code,{children:"children"})," 为函数时，会接收一个对象作为参数，包含 ",n.jsx(e.code,{children:"copied"})," 和 ",n.jsx(e.code,{children:"copyToClipboard"})," 两个属性。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"copied"})," 表示是否复制成功，为 ",n.jsx(e.code,{children:"boolean"})," 类型。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"copyToClipboard"})," 表示复制到剪贴板的函数，为 ",n.jsx(e.code,{children:"() => void"})," 类型。"]}),`
`]}),`
`,n.jsx(e.h4,{id:"children-默认值",children:"children 默认值"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`copied ? (
  <>
    <span className='mr-2 text-[14px] font-medium font-mono'>{t('components.CopyToClipboard.copied', { defaultValue: '复制成功' })}</span>
    <Button type="text" icon={<CheckOutlined />} />
  </>
) : (
  <Tooltip title={t('components.CopyToClipboard.copy', { defaultValue: '复制' })}>
    <Button type="text" icon={<CopyOutlined />} onClick={copyToClipboard} />
  </Tooltip>
)
`})}),`
`,n.jsx(e.h2,{id:"演示示例",children:"演示示例"}),`
`,n.jsx(e.p,{children:"复制到剪贴板 用于将文本、代码或其他内容复制到剪贴板，以便在其他应用程序或文档中使用。"}),`
`,n.jsx(e.h3,{id:"基本用法",children:"基本用法"}),`
`,n.jsx(x,{code:N,title:"复制到剪贴板",description:"在文本框中输入内容，点击复制按钮即可复制到剪贴板。",children:n.jsx(A,{})}),`
`,n.jsx(e.h3,{id:"自定义复制按钮",children:"自定义复制按钮"}),`
`,n.jsx(x,{code:R,title:"自定义复制按钮",description:"在文本框中输入内容，点击自定义复制按钮即可复制到剪贴板。",children:n.jsx(D,{})})]})}function P(t={}){const{wrapper:e}={...m(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(f,{...t})}):f(t)}const{TextArea:S}=u;function w(){const t=p.c(8),[e,l]=j.useState("Copy to Clipboard");let r;t[0]!==e?(r=n.jsx("div",{className:"absolute top-0 right-0 z-10",children:n.jsx(C,{text:e})}),t[0]=e,t[1]=r):r=t[1];let d;t[2]===Symbol.for("react.memo_cache_sentinel")?(d=c=>l(c.target.value),t[2]=d):d=t[2];let o;t[3]!==e?(o=n.jsx(S,{rows:3,value:e,onChange:d,placeholder:"Enter content to copy to clipboard"}),t[3]=e,t[4]=o):o=t[4];let i;return t[5]!==r||t[6]!==o?(i=n.jsxs("div",{className:"relative",children:[r,o]}),t[5]=r,t[6]=o,t[7]=i):i=t[7],i}const _=`import { useState } from 'react'
import { Input } from 'antd'
import CopyToClipboard from '@/components/CopyToClipboard'

const { TextArea } = Input

function CopyToClipboardDemo() {
  const [content, setContent] = useState('Copy to Clipboard')
  
  return (
    <div className='relative'>
      <div className='absolute top-0 right-0 z-10'>
        <CopyToClipboard text={content} />
      </div>
      <TextArea rows={3} value={content} onChange={e => setContent(e.target.value)} placeholder='Enter content to copy to clipboard' />
    </div>
  )
}

export default CopyToClipboardDemo
`,{TextArea:F}=u;function $(){const t=p.c(9),[e,l]=j.useState("Copy to Clipboard");let r;t[0]===Symbol.for("react.memo_cache_sentinel")?(r=function(b){const{copied:h,copyToClipboard:y}=b;return n.jsx("div",{className:"px-2 py-1 bg-gray-200 rounded cursor-pointer",onClick:()=>{h||y()},children:h?"Copied":"Copy"})},t[0]=r):r=t[0];const d=r;let o;t[1]!==e?(o=n.jsx("div",{className:"absolute top-[1px] right-[1px] z-10",children:n.jsx(C,{text:e,children:d})}),t[1]=e,t[2]=o):o=t[2];let i;t[3]===Symbol.for("react.memo_cache_sentinel")?(i=a=>l(a.target.value),t[3]=i):i=t[3];let c;t[4]!==e?(c=n.jsx(F,{rows:3,value:e,onChange:i,placeholder:"Enter content to copy to clipboard"}),t[4]=e,t[5]=c):c=t[5];let s;return t[6]!==o||t[7]!==c?(s=n.jsxs("div",{className:"relative",children:[o,c]}),t[6]=o,t[7]=c,t[8]=s):s=t[8],s}const k=`import { useState } from 'react'
import { Input } from 'antd'
import CopyToClipboard from '@/components/CopyToClipboard'

const { TextArea } = Input

function CopyToClipboardDemo() {
  const [content, setContent] = useState('Copy to Clipboard')
  
  function childrenFn (props: { copied: boolean, copyToClipboard: () => void }) {
    const { copied, copyToClipboard } = props
    return (
      <div className='px-2 py-1 bg-gray-200 rounded cursor-pointer' onClick={() => {
        if (!copied) {
          copyToClipboard()
        }
      }}>
        {copied ? 'Copied' : 'Copy'}
      </div>
    )
  }

  return (
    <div className='relative'>
      <div className='absolute top-[1px] right-[1px] z-10'>
        <CopyToClipboard text={content} children={childrenFn} />
      </div>
      <TextArea rows={3} value={content} onChange={e => setContent(e.target.value)} placeholder='Enter content to copy to clipboard' />
    </div>
  )
}

export default CopyToClipboardDemo
`;function v(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...m(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"copy-to-clipboard",children:"Copy to Clipboard"}),`
`,n.jsxs(e.p,{children:["Project uses ",n.jsx(e.code,{children:'"react": "^19.2.0"'})," version, and originally used ",n.jsx(e.a,{href:"https://github.com/nkbt/react-copy-to-clipboard",children:"react-copy-to-clipboard"})," library, but that library does not support React 19 version, so it is encapsulated by itself."]}),`
`,n.jsx(e.h2,{id:"toc",children:"TOC"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"#api",children:"API"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"#parameters-props",children:"Parameters Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#children-description",children:"children description"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#children-default-value",children:"children default value"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"#demos",children:"Demos"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#basic-usage",children:"Basic Usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#custom-copy-button",children:"Custom Copy Button"})}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(e.h3,{id:"parameters-props",children:"Parameters Props"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`export type CopyToClipboardProps = {
  text?: string
  getText?: () => string
  children?: ((props: { copied: boolean, copyToClipboard: () => void }) => React.ReactNode)
  disabled?: boolean
  timeout?: number
  onCopy?: (text: string) => void
  onError?: (error: Error) => void
}
`})}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Parameter"}),n.jsx(e.th,{children:"Description"}),n.jsx(e.th,{children:"Type"}),n.jsx(e.th,{children:"Default"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"text"})}),n.jsx(e.td,{children:"Text content to be copied"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"-"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"getText"})}),n.jsxs(e.td,{children:["Function to get text content to be copied, higher priority than ",n.jsx(e.code,{children:"text"})]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"() => string"})}),n.jsx(e.td,{children:"-"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"children"})}),n.jsxs(e.td,{children:["Child elements, used to customize the appearance of the copy button, ",n.jsx(e.a,{href:"#children-description",children:"children description"})]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"React.ReactNode | ((props: { copied: boolean, copyToClipboard: () => void }) => React.ReactNode)"})}),n.jsx(e.td,{children:n.jsx(e.a,{href:"#children-default-value",children:"children default value"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"disabled"})}),n.jsx(e.td,{children:"Whether to disable the copy function"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"false"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"timeout"})}),n.jsx(e.td,{children:"Prompt display time after successful copy (milliseconds)"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"2000"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onCopy"})}),n.jsx(e.td,{children:"Callback function after successful copy"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"(text: string) => void"})}),n.jsx(e.td,{children:"-"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onError"})}),n.jsx(e.td,{children:"Callback function after copy failure"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"(error: Error) => void"})}),n.jsx(e.td,{children:"-"})]})]})]}),`
`,n.jsx(e.h4,{id:"children-description",children:"children description"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["When ",n.jsx(e.code,{children:"children"})," is a function, it will receive an object as a parameter, containing ",n.jsx(e.code,{children:"copied"})," and ",n.jsx(e.code,{children:"copyToClipboard"})," two properties."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"copied"})," is a boolean value, indicating whether the copy is successful."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"copyToClipboard"})," is a function, used to trigger the copy operation."]}),`
`]}),`
`,n.jsx(e.h4,{id:"children-default-value",children:"children default value"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`copied ? (
  <>
    <span className='mr-2 text-[14px] font-medium font-mono'>{t('components.CopyToClipboard.copied', { defaultValue: '复制成功' })}</span>
    <Button type="text" icon={<CheckOutlined />} />
  </>
) : (
  <Tooltip title={t('components.CopyToClipboard.copy', { defaultValue: '复制' })}>
    <Button type="text" icon={<CopyOutlined />} onClick={copyToClipboard} />
  </Tooltip>
)
`})}),`
`,n.jsx(e.h2,{id:"demos",children:"Demos"}),`
`,n.jsx(e.p,{children:"Copy to clipboard is used to copy text, code, or other content to the clipboard for use in other applications or documents."}),`
`,n.jsx(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(x,{code:_,title:"Copy to Clipboard",description:"Enter content in the text box and click the copy button to copy to the clipboard.",children:n.jsx(w,{})}),`
`,n.jsx(e.h3,{id:"custom-copy-button",children:"Custom Copy Button"}),`
`,n.jsx(x,{code:k,title:"Custom Copy Button",description:"Enter content in the text box and click the custom copy button to copy to the clipboard.",children:n.jsx($,{})})]})}function I(t={}){const{wrapper:e}={...m(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(v,{...t})}):v(t)}function q(){const t=p.c(2),e=T();let l;return t[0]!==e?(l=n.jsx("div",{className:"px-4 pb-4",children:n.jsx(g,{children:e==="zh"?n.jsx(P,{}):n.jsx(I,{})})}),t[0]=e,t[1]=l):l=t[1],l}export{q as default};
