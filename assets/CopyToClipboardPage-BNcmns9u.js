import{a8 as j,c as h,r as p,j as n,a9 as u,u as m}from"./index-CrVpgTXP.js";import{u as l,M as C}from"./MDXRender-Cr4xr3VV.js";import{P as b}from"./Playground-DtAykHKn.js";const{TextArea:y}=j;function f(){const t=h.c(8),[e,i]=p.useState("复制到剪贴板");let r;t[0]!==e?(r=n.jsx("div",{className:"absolute top-0 right-0 z-10",children:n.jsx(u,{text:e})}),t[0]=e,t[1]=r):r=t[1];let c;t[2]===Symbol.for("react.memo_cache_sentinel")?(c=s=>i(s.target.value),t[2]=c):c=t[2];let d;t[3]!==e?(d=n.jsx(y,{rows:3,value:e,onChange:c,placeholder:"请输入要复制的内容"}),t[3]=e,t[4]=d):d=t[4];let o;return t[5]!==r||t[6]!==d?(o=n.jsxs("div",{className:"relative",children:[r,d]}),t[5]=r,t[6]=d,t[7]=o):o=t[7],o}const g=`import { useState } from 'react'
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
`;function a(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"复制到剪贴板",children:"复制到剪贴板"}),`
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
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#%E6%BC%94%E7%A4%BA%E7%A4%BA%E4%BE%8B",children:"演示示例"})}),`
`]}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(e.h3,{id:"参数-props",children:"参数 Props"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`export type CopyToClipboardProps = {
  text?: string,
  getText?: () => string,
  children?: React.ReactNode | ((props: { copied: boolean, copyToClipboard: () => void }) => React.ReactNode),
  disabled?: boolean,
  timeout?: number,
  onCopy?: (text: string) => void,
  onError?: (error: Error) => void,
  locale?: 'zh' | 'en'
}
`})}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"属性"}),n.jsx(e.th,{children:"说明"}),n.jsx(e.th,{children:"类型"}),n.jsx(e.th,{children:"默认值"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"text"})}),n.jsx(e.td,{children:"要复制的文本内容"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"-"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"getText"})}),n.jsxs(e.td,{children:["获取要复制的文本内容的函数，优先级高于 ",n.jsx(e.code,{children:"text"})]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"() => string"})}),n.jsx(e.td,{children:"-"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"children"})}),n.jsxs(e.td,{children:["子元素，用于自定义复制按钮的外观，",n.jsx(e.a,{href:"#children-%E8%AF%B4%E6%98%8E",children:"children 说明"})]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"React.ReactNode | ((props: { copied: boolean, copyToClipboard: () => void }) => React.ReactNode)"})}),n.jsx(e.td,{children:n.jsx(e.a,{href:"#children-%E9%BB%98%E8%AE%A4%E5%80%BC",children:"children 默认值"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"disabled"})}),n.jsx(e.td,{children:"是否禁用复制功能"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"false"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"timeout"})}),n.jsx(e.td,{children:"复制成功后的提示显示时间（毫秒）"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"2000"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onCopy"})}),n.jsx(e.td,{children:"复制成功后的回调函数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"(text: string) => void"})}),n.jsx(e.td,{children:"-"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onError"})}),n.jsx(e.td,{children:"复制失败后的回调函数"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"(error: Error) => void"})}),n.jsx(e.td,{children:"-"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"locale"})}),n.jsx(e.td,{children:"语言"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"'zh' | 'en'"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"'zh'"})})]})]})]}),`
`,n.jsx(e.h4,{id:"children-说明",children:"children 说明"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["当 ",n.jsx(e.code,{children:"children"})," 为函数时，会接收一个对象作为参数，包含 ",n.jsx(e.code,{children:"copied"})," 和 ",n.jsx(e.code,{children:"copyToClipboard"})," 两个属性。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"copied"})," 表示是否复制成功，为 ",n.jsx(e.code,{children:"boolean"})," 类型。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"copyToClipboard"})," 表示复制到剪贴板的函数，为 ",n.jsx(e.code,{children:"() => void"})," 类型。"]}),`
`]}),`
`,n.jsx(e.h4,{id:"children-默认值",children:"children 默认值"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`copied ? (
  <>
    <span className='mr-2 text-[14px] font-medium font-mono'>{currentLocale === 'zh' ? '复制成功' : 'copy success'}</span>
    <Button type="text" icon={<CheckOutlined />} />
  </>
) : (
  <Tooltip title={currentLocale === 'zh' ? '复制' : 'copy'}>
    <Button type="text" icon={<CopyOutlined />} onClick={copyToClipboard} />
  </Tooltip>
)
`})}),`
`,n.jsx(e.h2,{id:"演示示例",children:"演示示例"}),`
`,n.jsx(e.p,{children:"复制到剪贴板 用于将文本、代码或其他内容复制到剪贴板，以便在其他应用程序或文档中使用。"}),`
`,n.jsx(b,{code:g,title:"复制到剪贴板",description:"在文本框中输入内容，点击复制按钮即可复制到剪贴板。",children:n.jsx(f,{})})]})}function v(t={}){const{wrapper:e}={...l(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}const{TextArea:T}=j;function E(){const t=h.c(8),[e,i]=p.useState("Copy to Clipboard");let r;t[0]!==e?(r=n.jsx("div",{className:"absolute top-0 right-0 z-10",children:n.jsx(u,{text:e})}),t[0]=e,t[1]=r):r=t[1];let c;t[2]===Symbol.for("react.memo_cache_sentinel")?(c=s=>i(s.target.value),t[2]=c):c=t[2];let d;t[3]!==e?(d=n.jsx(T,{rows:3,value:e,onChange:c,placeholder:"Enter content to copy to clipboard"}),t[3]=e,t[4]=d):d=t[4];let o;return t[5]!==r||t[6]!==d?(o=n.jsxs("div",{className:"relative",children:[r,d]}),t[5]=r,t[6]=d,t[7]=o):o=t[7],o}const N=`import { useState } from 'react'
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
`;function x(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"copy-to-clipboard",children:"Copy to Clipboard"}),`
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
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#demos",children:"Demos"})}),`
`]}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(e.h3,{id:"parameters-props",children:"Parameters Props"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`export type CopyToClipboardProps = {
  text?: string,
  getText?: () => string,
  children?: React.ReactNode | ((props: { copied: boolean, copyToClipboard: () => void }) => React.ReactNode),
  disabled?: boolean,
  timeout?: number,
  onCopy?: (text: string) => void,
  onError?: (error: Error) => void,
  locale?: 'zh' | 'en'
}
`})}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Parameter"}),n.jsx(e.th,{children:"Description"}),n.jsx(e.th,{children:"Type"}),n.jsx(e.th,{children:"Default"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"text"})}),n.jsx(e.td,{children:"Text content to be copied"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"-"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"getText"})}),n.jsxs(e.td,{children:["Function to get text content to be copied, higher priority than ",n.jsx(e.code,{children:"text"})]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"() => string"})}),n.jsx(e.td,{children:"-"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"children"})}),n.jsxs(e.td,{children:["Child elements, used to customize the appearance of the copy button, ",n.jsx(e.a,{href:"#children-description",children:"children description"})]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"React.ReactNode | ((props: { copied: boolean, copyToClipboard: () => void }) => React.ReactNode)"})}),n.jsx(e.td,{children:n.jsx(e.a,{href:"#children-default-value",children:"children default value"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"disabled"})}),n.jsx(e.td,{children:"Whether to disable the copy function"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"false"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"timeout"})}),n.jsx(e.td,{children:"Prompt display time after successful copy (milliseconds)"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"2000"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onCopy"})}),n.jsx(e.td,{children:"Callback function after successful copy"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"(text: string) => void"})}),n.jsx(e.td,{children:"-"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onError"})}),n.jsx(e.td,{children:"Callback function after copy failure"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"(error: Error) => void"})}),n.jsx(e.td,{children:"-"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"locale"})}),n.jsx(e.td,{children:"Language"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"'zh' | 'en'"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"'zh'"})})]})]})]}),`
`,n.jsx(e.h4,{id:"children-description",children:"children description"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["When ",n.jsx(e.code,{children:"children"})," is a function, it will receive an object as a parameter, containing ",n.jsx(e.code,{children:"copied"})," and ",n.jsx(e.code,{children:"copyToClipboard"})," two properties."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"copied"})," is a boolean value, indicating whether the copy is successful."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"copyToClipboard"})," is a function, used to trigger the copy operation."]}),`
`]}),`
`,n.jsx(e.h4,{id:"children-default-value",children:"children default value"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`copied ? (
  <>
    <span className='mr-2 text-[14px] font-medium font-mono'>{currentLocale === 'zh' ? '复制成功' : 'copy success'}</span>
    <Button type="text" icon={<CheckOutlined />} />
  </>
) : (
  <Tooltip title={currentLocale === 'zh' ? '复制' : 'copy'}>
    <Button type="text" icon={<CopyOutlined />} onClick={copyToClipboard} />
  </Tooltip>
)
`})}),`
`,n.jsx(e.h2,{id:"demos",children:"Demos"}),`
`,n.jsx(e.p,{children:"Copy to clipboard is used to copy text, code, or other content to the clipboard for use in other applications or documents."}),`
`,n.jsx(b,{code:N,title:"Copy to Clipboard",description:"Enter content in the text box and click the copy button to copy to the clipboard.",children:n.jsx(E,{})})]})}function R(t={}){const{wrapper:e}={...l(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(x,{...t})}):x(t)}function P(){const t=h.c(2),e=m();let i;return t[0]!==e?(i=n.jsx("div",{className:"px-4 pb-4",children:n.jsx(C,{children:e==="zh"?n.jsx(v,{}):n.jsx(R,{})})}),t[0]=e,t[1]=i):i=t[1],i}export{P as default};
