import{r as d,I as J,_ as X,e as y,C as ne,i as pe,f as he,g as fe,T as me,b as re,h as xe,k as U,l as le,m as ue,n as je,o as ye,p as Te,q as De,c as L,j as t,u as ge}from"./index-CrVpgTXP.js";import{u as _,M as Fe}from"./MDXRender-Cr4xr3VV.js";import{D as $}from"./DropElement-DsORzidx.js";import{a as se,F as ie}from"./FilesUploadDrawer-DCORy1t1.js";import{J as oe}from"./JsonView-CuGsheLP.js";import{P as R}from"./Playground-DtAykHKn.js";import"./useEffectWithTarget-lUCk8Ldy.js";import"./JsonEditor-C9rTAIVU.js";import"./CodeEditor-BjRa_2mt.js";import"./JsonRender-31iHI8gg.js";import"./use-undo.m-XjMNnjBE.js";var Ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"},we=function(e,r){return d.createElement(J,X({},e,{ref:r,icon:Ie}))},Ee=d.forwardRef(we),be={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"},Ne=function(e,r){return d.createElement(J,X({},e,{ref:r,icon:be}))},Pe=d.forwardRef(Ne),ve={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"}}]},name:"holder",theme:"outlined"},Oe=function(e,r){return d.createElement(J,X({},e,{ref:r,icon:ve}))},Le=d.forwardRef(Oe);const G=4;function Se(n){const{dropPosition:e,dropLevelOffset:r,prefixCls:o,indent:i,direction:l="ltr"}=n,s=l==="ltr"?"left":"right",c=l==="ltr"?"right":"left",a={[s]:-r*i+G,[c]:0};switch(e){case-1:a.top=-3;break;case 1:a.bottom=-3;break;default:a.bottom=-3,a[s]=i+G;break}return y.createElement("div",{style:a,className:`${o}-drop-indicator`})}const ae=y.forwardRef((n,e)=>{var r;const{getPrefixCls:o,direction:i,virtual:l,tree:s}=y.useContext(ne),{prefixCls:c,className:a,showIcon:p=!1,showLine:T,switcherIcon:F,switcherLoadingIcon:x,blockNode:I=!1,children:k,checkable:N=!1,selectable:P=!0,draggable:w,motion:v,style:A}=n,u=o("tree",c),M=o(),O=v??Object.assign(Object.assign({},pe(M)),{motionAppear:!1}),z=Object.assign(Object.assign({},n),{checkable:N,selectable:P,showIcon:p,motion:O,blockNode:I,showLine:!!T,dropIndicatorRender:Se}),[D,f,g]=he(u),[,E]=fe(),b=E.paddingXS/2+(((r=E.Tree)===null||r===void 0?void 0:r.titleHeight)||E.controlHeightSM),V=y.useMemo(()=>{if(!w)return!1;let h={};switch(typeof w){case"function":h.nodeDraggable=w;break;case"object":h=Object.assign({},w);break}return h.icon!==!1&&(h.icon=h.icon||y.createElement(Le,null)),h},[w]),m=h=>y.createElement(xe,{prefixCls:u,switcherIcon:F,switcherLoadingIcon:x,treeNodeProps:h,showLine:T});return D(y.createElement(me,Object.assign({itemHeight:b,ref:e,virtual:l},z,{style:Object.assign(Object.assign({},s?.style),A),prefixCls:u,className:re({[`${u}-icon-hide`]:!p,[`${u}-block-node`]:I,[`${u}-unselectable`]:!P,[`${u}-rtl`]:i==="rtl"},s?.className,a,f,g),direction:i,checkable:N&&y.createElement("span",{className:`${u}-checkbox-inner`}),selectable:P,switcherIcon:m,draggable:V}),k))}),Q=0,B=1,W=2;function q(n,e,r){const{key:o,children:i}=r;function l(s){const c=s[o],a=s[i];e(c,s)!==!1&&q(a||[],e,r)}n.forEach(l)}function Ce({treeData:n,expandedKeys:e,startKey:r,endKey:o,fieldNames:i}){const l=[];let s=Q;if(r&&r===o)return[r];if(!r||!o)return[];function c(a){return a===r||a===o}return q(n,a=>{if(s===W)return!1;if(c(a)){if(l.push(a),s===Q)s=B;else if(s===B)return s=W,!1}else s===B&&l.push(a);return e.includes(a)},le(i)),l}function H(n,e,r){const o=U(e),i=[];return q(n,(l,s)=>{const c=o.indexOf(l);return c!==-1&&(i.push(s),o.splice(c,1)),!!o.length},le(r)),i}var Y=function(n,e){var r={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(r[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(n);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(r[o[i]]=n[o[i]]);return r};function Re(n){const{isLeaf:e,expanded:r}=n;return e?d.createElement(ye,null):r?d.createElement(Ee,null):d.createElement(Pe,null)}function Z({treeData:n,children:e}){return n||Te(e)}const _e=(n,e)=>{var{defaultExpandAll:r,defaultExpandParent:o,defaultExpandedKeys:i}=n,l=Y(n,["defaultExpandAll","defaultExpandParent","defaultExpandedKeys"]);const s=d.useRef(null),c=d.useRef(null),a=()=>{const{keyEntities:D}=ue(Z(l));let f;return r?f=Object.keys(D):o?f=je(l.expandedKeys||i||[],D):f=l.expandedKeys||i||[],f},[p,T]=d.useState(l.selectedKeys||l.defaultSelectedKeys||[]),[F,x]=d.useState(()=>a());d.useEffect(()=>{"selectedKeys"in l&&T(l.selectedKeys)},[l.selectedKeys]),d.useEffect(()=>{"expandedKeys"in l&&x(l.expandedKeys)},[l.expandedKeys]);const I=(D,f)=>{var g;return"expandedKeys"in l||x(D),(g=l.onExpand)===null||g===void 0?void 0:g.call(l,D,f)},k=(D,f)=>{var g;const{multiple:E,fieldNames:b}=l,{node:V,nativeEvent:m}=f,{key:h=""}=V,S=Z(l),C=Object.assign(Object.assign({},f),{selected:!0}),ce=m?.ctrlKey||m?.metaKey,de=m?.shiftKey;let j;E&&ce?(j=D,s.current=h,c.current=j,C.selectedNodes=H(S,j,b)):E&&de?(j=Array.from(new Set([].concat(U(c.current||[]),U(Ce({treeData:S,expandedKeys:F,startKey:h,endKey:s.current,fieldNames:b}))))),C.selectedNodes=H(S,j,b)):(j=[h],s.current=h,c.current=j,C.selectedNodes=H(S,j,b)),(g=l.onSelect)===null||g===void 0||g.call(l,j,C),"selectedKeys"in l||T(j)},{getPrefixCls:N,direction:P}=d.useContext(ne),{prefixCls:w,className:v,showIcon:A=!0,expandAction:u="click"}=l,M=Y(l,["prefixCls","className","showIcon","expandAction"]),O=N("tree",w),z=re(`${O}-directory`,{[`${O}-directory-rtl`]:P==="rtl"},v);return d.createElement(ae,Object.assign({icon:Re,ref:e,blockNode:!0},M,{showIcon:A,expandAction:u,prefixCls:O,className:z,expandedKeys:F,selectedKeys:p,onSelect:k,onExpand:I}))},$e=d.forwardRef(_e),K=ae;K.DirectoryTree=$e;K.TreeNode=De;function Ke(){const n=L.c(6);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],n[0]=e):e=n[0];const[r,o]=y.useState(e);let i;if(n[1]===Symbol.for("react.memo_cache_sentinel")){const c=function(p){console.log("fileTrees",p),o(p)};i=t.jsx($,{targetType:"tree",onDrop:c,className:"h-30!"}),n[1]=i}else i=n[1];let l;n[2]!==r?(l=r.length>0&&t.jsx(K,{fieldNames:{title:"name",key:"filePath",children:"children"},treeData:r,showLine:!0,defaultExpandAll:!0,height:320,showIcon:!0,icon:ke,className:"mt-4 h-80"}),n[2]=r,n[3]=l):l=n[3];let s;return n[4]!==l?(s=t.jsxs(t.Fragment,{children:[i,l]}),n[4]=l,n[5]=s):s=n[5],s}function ke(n){return t.jsx(se,{fileName:n.title,type:n.type==="file"?"file":"folder"})}const Ae=`import React from 'react'
import { Tree } from 'antd'
import DropElement from '@/components/DropElement'
import type { FileTreeItem } from '@/types/files'
import FileIcon from '@/components/FileIcon'

function DropUpload() {
  const [treeData, setTreeData] = React.useState<FileTreeItem[]>([])
  
  function onDropTree(fileTrees: FileTreeItem[]) {
    console.log('fileTrees', fileTrees)
    setTreeData(fileTrees)
  }

  return (
    <>
      <DropElement targetType='tree' onDrop={onDropTree} className='h-30!'></DropElement>
      {treeData.length > 0 && (
        <Tree
          fieldNames={{
            title: 'name',
            key: 'filePath',
            children: 'children'
          }}
          // @ts-ignore
          treeData={treeData}
          showLine={true}
          defaultExpandAll
          height={320}
          showIcon
          icon={(props: any) => {
            return <FileIcon fileName={props.title} type={props.type === 'file' ? 'file' : 'folder'}></FileIcon>
          }}
          className='mt-4 h-80'
        />
      )}
    </>
  )
}

export default DropUpload
`;function Me(){const n=L.c(10);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],n[0]=e):e=n[0];const[r,o]=d.useState(e),[i,l]=d.useState(!1);let s;if(n[1]===Symbol.for("react.memo_cache_sentinel")){let T=function(x){return x.map(ze)};const F=function(I){o(T(I)),l(!0)};s=t.jsx($,{targetType:"list",onDrop:F,className:"mt-4"}),n[1]=s}else s=n[1];let c;n[2]!==r?(c=t.jsx(oe,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:r}),n[2]=r,n[3]=c):c=n[3];let a;n[4]!==i||n[5]!==r?(a=t.jsx(ie,{targetType:"list",open:i,list:r,setOpen:l}),n[4]=i,n[5]=r,n[6]=a):a=n[6];let p;return n[7]!==c||n[8]!==a?(p=t.jsxs(t.Fragment,{children:[s,c,a]}),n[7]=c,n[8]=a,n[9]=p):p=n[9],p}function ze(n){return{type:n.type,file:n.file,name:n.name,filePath:n.filePath,folderPath:n.folderPath}}const Ve=`import { useState } from 'react'
import DropElement from '@/components/DropElement'
import type { FileTreeFileItem, FileItemType } from '@/types/files'
import FilesUploadDrawer from '@/components/FilesUploadDrawer'
import JsonView from '@/components/JsonView'

function FileList() {
  const [listData, setListData] = useState<FileItemType[]>([])
  const [drawerOpen, setDrawerOpen] = useState(false)

  function onDropList(fileList: FileTreeFileItem[]) {
    setListData(changeFileTreeItemToFileItemType(fileList))
    setDrawerOpen(true)
  }
  function changeFileTreeItemToFileItemType(fileList: FileTreeFileItem[]): FileItemType[] {
    return fileList.map(item => ({
      type: item.type,
      file: item.file,
      name: item.name,
      filePath: item.filePath,
      folderPath: item.folderPath,
    }))
  }

  return (
    <>
      <DropElement targetType='list' onDrop={onDropList} className='mt-4'></DropElement>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
      <FilesUploadDrawer
        targetType='list'
        open={drawerOpen}
        list={listData}
        setOpen={setDrawerOpen}
      />
    </>
  )
}

export default FileList
`;function ee(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",..._(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"dropelement",children:"DropElement"}),`
`,t.jsx(e.p,{children:"拖拽组件，支持拖拽多个文件/文件夹，可以指定回调函数的参数类型是 文件树 还是 文件列表。"}),`
`,t.jsx(e.h2,{id:"目录",children:"目录"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"#api",children:"API"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#%E5%8F%82%E6%95%B0-props",children:"参数 Props"})}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"#%E6%BC%94%E7%A4%BA%E7%A4%BA%E4%BE%8B",children:"演示示例"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#%E6%96%87%E4%BB%B6%E6%A0%91",children:"文件树"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8",children:"文件列表"})}),`
`]}),`
`]}),`
`]}),`
`,t.jsx(e.h2,{id:"api",children:"API"}),`
`,t.jsx(e.h3,{id:"参数-props",children:"参数 Props"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`export type FileType = 'file' | 'folder'
export type FileItemType = {
  type: FileType
  file?: File
  name: string
  size?: number
  filePath: string
  folderPath: string
}

export type FileTreeFileItem = Omit<FileItemType, 'type'> & {
  type: 'file'
}

export type FolderItemType = {
  type: 'folder'
  name: string
  filePath: string
  folderPath: string
  children: FileTreeItem[]
}
export type FileTreeItem = FileTreeFileItem | FolderItemType

export type TargetType = 'tree' | 'list'
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`import type { TargetType, FileTreeFileItem, FileTreeItem } from '@/types/files'

export type DropElementProps<T extends TargetType> = {
  className?: string
  locale?: LocaleType
  targetType: T // 执行 onDrop 时，参数的类型， tree 时为文件树，list 时为文件列表
  onDrop: (fileTrees: T extends 'tree' ? FileTreeItem[] : FileTreeFileItem[]) => void
  children?: React.ReactNode
}
`})}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"属性"}),t.jsx(e.th,{children:"说明"}),t.jsx(e.th,{children:"类型"}),t.jsx(e.th,{children:"默认值"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"className"})}),t.jsx(e.td,{children:"自定义class类名"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"string"})}),t.jsx(e.td,{children:"-"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"locale"})}),t.jsx(e.td,{children:"语言"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"'zh' | 'en'"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"'zh'"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"type"})}),t.jsx(e.td,{children:"回调函数参数类型"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"'tree' | 'list'"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"'tree'"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"onDrop"})}),t.jsx(e.td,{children:"拖拽结束后的回调函数"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"(fileTrees: T extends 'tree' ? FileTreeItem[] : FileTreeFileItem[]) => void"})}),t.jsx(e.td,{children:"-"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"children"})}),t.jsx(e.td,{children:"自定义内容"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"React.ReactNode"})}),t.jsx(e.td,{children:"-"})]})]})]}),`
`,t.jsx(e.h2,{id:"演示示例",children:"演示示例"}),`
`,t.jsx(e.h3,{id:"文件树",children:"文件树"}),`
`,t.jsx(R,{code:Ae,title:"文件树",description:"拖拽文件/文件夹到此处，使用文件树查看文件结构。",children:t.jsx(Ke,{})}),`
`,t.jsx(e.h3,{id:"文件列表",children:"文件列表"}),`
`,t.jsx(R,{code:Ve,title:"文件列表",description:"拖拽文件/文件夹到此处，使用文件列表直接上传。",children:t.jsx(Me,{})})]})}function Be(n={}){const{wrapper:e}={..._(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(ee,{...n})}):ee(n)}function He(){const n=L.c(6);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],n[0]=e):e=n[0];const[r,o]=y.useState(e);let i;if(n[1]===Symbol.for("react.memo_cache_sentinel")){const c=function(p){console.log("fileTrees",p),o(p)};i=t.jsx($,{targetType:"tree",onDrop:c,className:"h-30!"}),n[1]=i}else i=n[1];let l;n[2]!==r?(l=r.length>0&&t.jsx(K,{fieldNames:{title:"name",key:"filePath",children:"children"},treeData:r,showLine:!0,defaultExpandAll:!0,height:320,showIcon:!0,icon:Ue,className:"mt-4 h-80"}),n[2]=r,n[3]=l):l=n[3];let s;return n[4]!==l?(s=t.jsxs(t.Fragment,{children:[i,l]}),n[4]=l,n[5]=s):s=n[5],s}function Ue(n){return t.jsx(se,{fileName:n.title,type:n.type==="file"?"file":"folder"})}const Je=`import React from 'react'
import { Tree } from 'antd'
import DropElement from '@/components/DropElement'
import type { FileTreeItem } from '@/types/files'
import FileIcon from '@/components/FileIcon'

function DropUpload() {
  const [treeData, setTreeData] = React.useState<FileTreeItem[]>([])
  
  function onDropTree(fileTrees: FileTreeItem[]) {
    console.log('fileTrees', fileTrees)
    setTreeData(fileTrees)
  }

  return (
    <>
      <DropElement targetType='tree' onDrop={onDropTree} className='h-30!'></DropElement>
      {treeData.length > 0 && (
        <Tree
          fieldNames={{
            title: 'name',
            key: 'filePath',
            children: 'children'
          }}
          // @ts-ignore
          treeData={treeData}
          showLine={true}
          defaultExpandAll
          height={320}
          showIcon
          icon={(props: any) => {
            return <FileIcon fileName={props.title} type={props.type === 'file' ? 'file' : 'folder'}></FileIcon>
          }}
          className='mt-4 h-80'
        />
      )}
    </>
  )
}

export default DropUpload
`;function Xe(){const n=L.c(10);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],n[0]=e):e=n[0];const[r,o]=d.useState(e),[i,l]=d.useState(!1);let s;if(n[1]===Symbol.for("react.memo_cache_sentinel")){let T=function(x){return x.map(qe)};const F=function(I){o(T(I)),l(!0)};s=t.jsx($,{targetType:"list",onDrop:F,className:"mt-4"}),n[1]=s}else s=n[1];let c;n[2]!==r?(c=t.jsx(oe,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:r}),n[2]=r,n[3]=c):c=n[3];let a;n[4]!==i||n[5]!==r?(a=t.jsx(ie,{targetType:"list",open:i,list:r,setOpen:l}),n[4]=i,n[5]=r,n[6]=a):a=n[6];let p;return n[7]!==c||n[8]!==a?(p=t.jsxs(t.Fragment,{children:[s,c,a]}),n[7]=c,n[8]=a,n[9]=p):p=n[9],p}function qe(n){return{type:n.type,file:n.file,name:n.name,filePath:n.filePath,folderPath:n.folderPath}}const Ge=`import { useState } from 'react'
import DropElement from '@/components/DropElement'
import type { FileTreeFileItem, FileItemType } from '@/types/files'
import FilesUploadDrawer from '@/components/FilesUploadDrawer'
import JsonView from '@/components/JsonView'

function FileList() {
  const [listData, setListData] = useState<FileItemType[]>([])
  const [drawerOpen, setDrawerOpen] = useState(false)

  function onDropList(fileList: FileTreeFileItem[]) {
    setListData(changeFileTreeItemToFileItemType(fileList))
    setDrawerOpen(true)
  }
  function changeFileTreeItemToFileItemType(fileList: FileTreeFileItem[]): FileItemType[] {
    return fileList.map(item => ({
      type: item.type,
      file: item.file,
      name: item.name,
      filePath: item.filePath,
      folderPath: item.folderPath,
    }))
  }

  return (
    <>
      <DropElement targetType='list' onDrop={onDropList} className='mt-4'></DropElement>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
      <FilesUploadDrawer
        targetType='list'
        open={drawerOpen}
        list={listData}
        setOpen={setDrawerOpen}
      />
    </>
  )
}

export default FileList
`;function te(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",..._(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"dropelement",children:"DropElement"}),`
`,t.jsx(e.p,{children:"DropElement is a drag and drop component, which supports dragging multiple files/folders, and can specify whether the parameter type of the callback function is a file tree or a file list."}),`
`,t.jsx(e.h2,{id:"toc",children:"TOC"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"#api",children:"API"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#parameters-props",children:"Parameters Props"})}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.a,{href:"#demos",children:"Demos"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#file-tree",children:"File Tree"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#file-list",children:"File List"})}),`
`]}),`
`]}),`
`]}),`
`,t.jsx(e.h2,{id:"api",children:"API"}),`
`,t.jsx(e.h3,{id:"parameters-props",children:"Parameters Props"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`export type FileType = 'file' | 'folder'
export type FileItemType = {
  type: FileType
  file?: File
  name: string
  size?: number
  filePath: string
  folderPath: string
}

export type FileTreeFileItem = Omit<FileItemType, 'type'> & {
  type: 'file'
}

export type FolderItemType = {
  type: 'folder'
  name: string
  filePath: string
  folderPath: string
  children: FileTreeItem[]
}
export type FileTreeItem = FileTreeFileItem | FolderItemType

export type TargetType = 'tree' | 'list'
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`import type { TargetType, FileTreeFileItem, FileTreeItem } from '@/types/files'

export type DropElementProps<T extends TargetType> = {
  className?: string
  locale?: LocaleType
  targetType: T // Target type, tree for file tree, list for file list
  onDrop: (fileTrees: T extends 'tree' ? FileTreeItem[] : FileTreeFileItem[]) => void
  children?: React.ReactNode
}
`})}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Parameter"}),t.jsx(e.th,{children:"Description"}),t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Default"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"className"}),t.jsx(e.td,{children:"Custom class name"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"string"})}),t.jsx(e.td,{children:"-"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"locale"}),t.jsx(e.td,{children:"Locale type"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"'zh' | 'en'"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"zh"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"type"}),t.jsx(e.td,{children:"Execution parameter type of onDrop, tree for file tree, list for file list"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"'tree' | 'list'"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"tree"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"onDrop"}),t.jsx(e.td,{children:"Callback function when files/folders are dropped"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"(fileTrees: T extends 'tree' ? FileTreeItem[] : FileTreeFileItem[]) => void"})}),t.jsx(e.td,{children:"-"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"children"}),t.jsx(e.td,{children:"Custom children"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"React.ReactNode"})}),t.jsx(e.td,{children:"-"})]})]})]}),`
`,t.jsx(e.h2,{id:"demos",children:"Demos"}),`
`,t.jsx(e.h3,{id:"file-tree",children:"File Tree"}),`
`,t.jsx(R,{code:Je,title:"File Tree",description:"Drag and drop files/folders to view the file structure.",children:t.jsx(He,{})}),`
`,t.jsx(e.h3,{id:"file-list",children:"File List"}),`
`,t.jsx(R,{code:Ge,title:"File List",description:"Drag and drop files/folders to upload directly.",children:t.jsx(Xe,{})})]})}function Qe(n={}){const{wrapper:e}={..._(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(te,{...n})}):te(n)}function at(){const n=L.c(2),e=ge();let r;return n[0]!==e?(r=t.jsx("div",{className:"px-4 pb-4",children:t.jsx(Fe,{children:e==="zh"?t.jsx(Be,{}):t.jsx(Qe,{})})}),n[0]=e,n[1]=r):r=n[1],r}export{at as default};
