import{j as e}from"./@uiw/react-codemirror-dimZJgSu.js";import{c as l,u as t}from"./index-CwDalt6B.js";import{M as h}from"./MDXRender--j0cKFwg.js";import{u as s}from"./@mdx-js/react-BwGmxI0N.js";import"./react-syntax-highlighter-DW6ulm9l.js";import"./markdown-plugins-CqPL4kxN.js";import"./react-markdown-U0gPFawi.js";function c(d){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"mdrender",children:"MdRender"}),`
`,e.jsx(n.p,{children:"MdRender 组件用于展示 Markdown 内容，内置代码高亮、复制代码功能。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"注意："})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["要在组件内使用目录功能，需要在 Markdown 内容中添加 ",e.jsx(n.code,{children:"## 目录"})," 或者 ",e.jsx(n.code,{children:"## TOC"}),"，组件会自动解析目录，",e.jsx(n.strong,{children:"每个页面保证只有一个目录"}),"。"]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"目录",children:"目录"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#api",children:"API"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E5%8F%82%E6%95%B0-props",children:"参数 Props"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#%E6%BC%94%E7%A4%BA%E7%A4%BA%E4%BE%8B",children:"演示示例"})}),`
`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.h3,{id:"参数-props",children:"参数 Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type MdRenderProps = {
  children: string
  className?: string
  codeClassName?: string
  enableCopy?: boolean
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"属性"}),e.jsx(n.th,{children:"说明"}),e.jsx(n.th,{children:"类型"}),e.jsx(n.th,{children:"默认值"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"children"})}),e.jsx(n.td,{children:"Markdown 内容"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"className"})}),e.jsx(n.td,{children:"自定义类名"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"codeClassName"})}),e.jsx(n.td,{children:"自定义代码块类名"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"enableCopy"})}),e.jsx(n.td,{children:"是否开启复制代码功能"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})})]})]})]}),`
`,e.jsx(n.h2,{id:"演示示例",children:"演示示例"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"markdown/md-demo-page",children:"MdRender 演示示例"})})]})}function o(d={}){const{wrapper:n}={...s(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(c,{...d})}):c(d)}function i(d){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"mdrender",children:"MdRender"}),`
`,e.jsx(n.p,{children:"MdRender is a component that renders Markdown content with code highlighting and copy functionality."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Note:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["To use the directory function within a component, you need to add a '## 目录' or a '## TOC' in the Markdown content. The component will automatically parse the directory, ",e.jsx(n.strong,{children:"ensuring that each page has only one directory"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"目录",children:"目录"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#api",children:"API"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#parameters-props",children:"Parameters Props"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#demos",children:"Demos"})}),`
`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.h3,{id:"parameters-props",children:"Parameters Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type MdRenderProps = {
  children: string
  className?: string
  codeClassName?: string
  enableCopy?: boolean
}
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"children"})}),e.jsx(n.td,{children:"Markdown content"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"className"})}),e.jsx(n.td,{children:"Custom class name"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"codeClassName"})}),e.jsx(n.td,{children:"Custom code block class name"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"enableCopy"})}),e.jsx(n.td,{children:"Whether to enable the copy code functionality"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})})]})]})]}),`
`,e.jsx(n.h2,{id:"demos",children:"Demos"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"markdown/md-demo-page",children:"MdRender 演示示例"})})]})}function x(d={}){const{wrapper:n}={...s(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(i,{...d})}):i(d)}function y(){const d=l.c(2),n=t();let r;return d[0]!==n?(r=e.jsx("div",{className:"px-4 pb-4",children:e.jsx(h,{children:n==="zh"?e.jsx(o,{}):e.jsx(x,{})})}),d[0]=n,d[1]=r):r=d[1],r}export{y as default};
