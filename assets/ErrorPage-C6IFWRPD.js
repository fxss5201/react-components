import{j as o}from"./@uiw/react-codemirror-dimZJgSu.js";import{c as a,u as d,M as t}from"./index-CwDalt6B.js";import"./react-syntax-highlighter-DW6ulm9l.js";import"./markdown-plugins-CqPL4kxN.js";import"./react-markdown-U0gPFawi.js";const m=`# ErrorPage

错误页面只能在本地复现，可以将下面 第12行 代码解注：

\`\`\`tsx
import MdRender from '@/components/MdRender'
import { useLocale } from '@/Hooks/useLocale'
import errorPageMd from '@/md/ErrorPageMd.md?raw'
import errorPageMdEn from '@/md/en/ErrorPageMd.md?raw'

function ErrorPage() {
  const locale = useLocale()
  
  return (
    <div className="px-4 pt-2">
      <MdRender>{locale === 'en' ? errorPageMdEn : errorPageMd}</MdRender>
      {/* <div>{aaa}</div> */}
    </div>
  )
}

export default ErrorPage
\`\`\`
`,c=`# ErrorPage

The error page can only be reproduced locally. You can annotate the following line 12 code:

\`\`\`tsx
import MdRender from '@/components/MdRender'
import { useLocale } from '@/Hooks/useLocale'
import errorPageMd from '@/md/ErrorPageMd.md?raw'
import errorPageMdEn from '@/md/en/ErrorPageMd.md?raw'

function ErrorPage() {
  const locale = useLocale()
  
  return (
    <div className="px-4 pt-2">
      <MdRender>{locale === 'en' ? errorPageMdEn : errorPageMd}</MdRender>
      {/* <div>{aaa}</div> */}
    </div>
  )
}

export default ErrorPage
\`\`\`
`;function u(){const r=a.c(2),n=d()==="en"?c:m;let e;return r[0]!==n?(e=o.jsx("div",{className:"px-4 pb-4",children:o.jsx(t,{children:n})}),r[0]=n,r[1]=e):e=r[1],e}export{u as default};
