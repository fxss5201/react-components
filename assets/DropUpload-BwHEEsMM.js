import{r as p,I as X,_ as q,R as F,C as re,i as fe,a as he,b as xe,T as ue,d as le,S as je,e as U,f as se,g as ye,h as Te,k as De,l as Fe,m as ge,c as S,j as t,L as ie,u as Ie}from"./index-Dd62DqUr.js";import{u as A,M as we}from"./MDXRender-DO1pX65U.js";import{D as L}from"./DropElement-CwZtJGmZ.js";import{b as oe,a as ce,F as ae}from"./FilesSelect-CMAjTOmw.js";import{J as K}from"./JsonView-DqiHYVOU.js";import{P as b}from"./Playground-CSNO60Ow.js";import"./useEffectWithTarget-CqpmnI6U.js";import"./JsonEditor-DSvVl0IO.js";import"./CodeEditor-BFvI7CoV.js";import"./JsonRender-3M2gVJ7Q.js";import"./use-undo.m-Bk1lAah2.js";var Ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"},Se=function(e,r){return p.createElement(X,q({},e,{ref:r,icon:Ee}))},Ne=p.forwardRef(Se),ve={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"},be=function(e,r){return p.createElement(X,q({},e,{ref:r,icon:ve}))},Le=p.forwardRef(be),Pe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"}}]},name:"holder",theme:"outlined"},Ce=function(e,r){return p.createElement(X,q({},e,{ref:r,icon:Pe}))},Oe=p.forwardRef(Ce);const Q=4;function _e(n){const{dropPosition:e,dropLevelOffset:r,prefixCls:c,indent:o,direction:l="ltr"}=n,s=l==="ltr"?"left":"right",a=l==="ltr"?"right":"left",i={[s]:-r*o+Q,[a]:0};switch(e){case-1:i.top=-3;break;case 1:i.bottom=-3;break;default:i.bottom=-3,i[s]=o+Q;break}return F.createElement("div",{style:i,className:`${c}-drop-indicator`})}const de=F.forwardRef((n,e)=>{var r;const{getPrefixCls:c,direction:o,virtual:l,tree:s}=F.useContext(re),{prefixCls:a,className:i,showIcon:d=!1,showLine:m,switcherIcon:f,switcherLoadingIcon:h,blockNode:y=!1,children:w,checkable:P=!1,selectable:C=!0,draggable:E,motion:O,style:B}=n,T=c("tree",a),V=c(),_=O??Object.assign(Object.assign({},fe(V)),{motionAppear:!1}),z=Object.assign(Object.assign({},n),{checkable:P,selectable:C,showIcon:d,motion:_,blockNode:y,showLine:!!m,dropIndicatorRender:_e}),[g,u,I]=he(T),[,N]=xe(),v=N.paddingXS/2+(((r=N.Tree)===null||r===void 0?void 0:r.titleHeight)||N.controlHeightSM),M=F.useMemo(()=>{if(!E)return!1;let x={};switch(typeof E){case"function":x.nodeDraggable=E;break;case"object":x=Object.assign({},E);break}return x.icon!==!1&&(x.icon=x.icon||F.createElement(Oe,null)),x},[E]),j=x=>F.createElement(je,{prefixCls:T,switcherIcon:f,switcherLoadingIcon:h,treeNodeProps:x,showLine:m});return g(F.createElement(ue,Object.assign({itemHeight:v,ref:e,virtual:l},z,{style:Object.assign(Object.assign({},s?.style),B),prefixCls:T,className:le({[`${T}-icon-hide`]:!d,[`${T}-block-node`]:y,[`${T}-unselectable`]:!C,[`${T}-rtl`]:o==="rtl"},s?.className,i,u,I),direction:o,checkable:P&&F.createElement("span",{className:`${T}-checkbox-inner`}),selectable:C,switcherIcon:j,draggable:M}),w))}),W=0,J=1,Y=2;function G(n,e,r){const{key:c,children:o}=r;function l(s){const a=s[c],i=s[o];e(a,s)!==!1&&G(i||[],e,r)}n.forEach(l)}function Re({treeData:n,expandedKeys:e,startKey:r,endKey:c,fieldNames:o}){const l=[];let s=W;if(r&&r===c)return[r];if(!r||!c)return[];function a(i){return i===r||i===c}return G(n,i=>{if(s===Y)return!1;if(a(i)){if(l.push(i),s===W)s=J;else if(s===J)return s=Y,!1}else s===J&&l.push(i);return e.includes(i)},se(o)),l}function H(n,e,r){const c=U(e),o=[];return G(n,(l,s)=>{const a=c.indexOf(l);return a!==-1&&(o.push(s),c.splice(a,1)),!!c.length},se(r)),o}var Z=function(n,e){var r={};for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&e.indexOf(c)<0&&(r[c]=n[c]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,c=Object.getOwnPropertySymbols(n);o<c.length;o++)e.indexOf(c[o])<0&&Object.prototype.propertyIsEnumerable.call(n,c[o])&&(r[c[o]]=n[c[o]]);return r};function $e(n){const{isLeaf:e,expanded:r}=n;return e?p.createElement(De,null):r?p.createElement(Ne,null):p.createElement(Le,null)}function ee({treeData:n,children:e}){return n||Fe(e)}const Ae=(n,e)=>{var{defaultExpandAll:r,defaultExpandParent:c,defaultExpandedKeys:o}=n,l=Z(n,["defaultExpandAll","defaultExpandParent","defaultExpandedKeys"]);const s=p.useRef(null),a=p.useRef(null),i=()=>{const{keyEntities:g}=ye(ee(l));let u;return r?u=Object.keys(g):c?u=Te(l.expandedKeys||o||[],g):u=l.expandedKeys||o||[],u},[d,m]=p.useState(l.selectedKeys||l.defaultSelectedKeys||[]),[f,h]=p.useState(()=>i());p.useEffect(()=>{"selectedKeys"in l&&m(l.selectedKeys)},[l.selectedKeys]),p.useEffect(()=>{"expandedKeys"in l&&h(l.expandedKeys)},[l.expandedKeys]);const y=(g,u)=>{var I;return"expandedKeys"in l||h(g),(I=l.onExpand)===null||I===void 0?void 0:I.call(l,g,u)},w=(g,u)=>{var I;const{multiple:N,fieldNames:v}=l,{node:M,nativeEvent:j}=u,{key:x=""}=M,R=ee(l),$=Object.assign(Object.assign({},u),{selected:!0}),pe=j?.ctrlKey||j?.metaKey,me=j?.shiftKey;let D;N&&pe?(D=g,s.current=x,a.current=D,$.selectedNodes=H(R,D,v)):N&&me?(D=Array.from(new Set([].concat(U(a.current||[]),U(Re({treeData:R,expandedKeys:f,startKey:x,endKey:s.current,fieldNames:v}))))),$.selectedNodes=H(R,D,v)):(D=[x],s.current=x,a.current=D,$.selectedNodes=H(R,D,v)),(I=l.onSelect)===null||I===void 0||I.call(l,D,$),"selectedKeys"in l||m(D)},{getPrefixCls:P,direction:C}=p.useContext(re),{prefixCls:E,className:O,showIcon:B=!0,expandAction:T="click"}=l,V=Z(l,["prefixCls","className","showIcon","expandAction"]),_=P("tree",E),z=le(`${_}-directory`,{[`${_}-directory-rtl`]:C==="rtl"},O);return p.createElement(de,Object.assign({icon:$e,ref:e,blockNode:!0},V,{showIcon:B,expandAction:T,prefixCls:_,className:z,expandedKeys:f,selectedKeys:d,onSelect:w,onExpand:y}))},Ke=p.forwardRef(Ae),k=de;k.DirectoryTree=Ke;k.TreeNode=ge;function ke(){const n=S.c(6);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],n[0]=e):e=n[0];const[r,c]=F.useState(e);let o;if(n[1]===Symbol.for("react.memo_cache_sentinel")){const a=function(d){console.log("fileTrees",d),c(d)};o=t.jsx(L,{targetType:"tree",onDrop:a,className:"h-30!"}),n[1]=o}else o=n[1];let l;n[2]!==r?(l=r.length>0&&t.jsx(k,{fieldNames:{title:"name",key:"filePath",children:"children"},treeData:r,showLine:!0,defaultExpandAll:!0,height:320,showIcon:!0,icon:Be,className:"mt-4 h-80"}),n[2]=r,n[3]=l):l=n[3];let s;return n[4]!==l?(s=t.jsxs(t.Fragment,{children:[o,l]}),n[4]=l,n[5]=s):s=n[5],s}function Be(n){return t.jsx(oe,{fileName:n.title,type:n.type==="file"?"file":"folder"})}const Ve=`import React from 'react'
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
`;function ze(){const n=S.c(10);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],n[0]=e):e=n[0];const[r,c]=p.useState(e),[o,l]=p.useState(!1);let s;if(n[1]===Symbol.for("react.memo_cache_sentinel")){let m=function(h){return h.map(Me)};const f=function(y){c(m(y)),l(!0)};s=t.jsx(L,{targetType:"list",onDrop:f,className:"mt-4"}),n[1]=s}else s=n[1];let a;n[2]!==r?(a=t.jsx(K,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:r}),n[2]=r,n[3]=a):a=n[3];let i;n[4]!==o||n[5]!==r?(i=t.jsx(ce,{targetType:"list",open:o,list:r,setOpen:l}),n[4]=o,n[5]=r,n[6]=i):i=n[6];let d;return n[7]!==a||n[8]!==i?(d=t.jsxs(t.Fragment,{children:[s,a,i]}),n[7]=a,n[8]=i,n[9]=d):d=n[9],d}function Me(n){return{type:n.type,file:n.file,name:n.name,filePath:n.filePath,folderPath:n.folderPath}}const Je=`import { useState } from 'react'
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
`;function He(){const n=S.c(12),e=p.useContext(ie);let r;n[0]===Symbol.for("react.memo_cache_sentinel")?(r=[],n[0]=r):r=n[0];const[c,o]=p.useState(r);let l;n[1]===Symbol.for("react.memo_cache_sentinel")?(l=function(w){o(w)},n[1]=l):l=n[1];const s=l,a=e==="zh"?"请拖放文件或文件夹到这里，或点击选择文件":"Please drag and drop files or folders here, or click to select files";let i;n[2]!==a?(i=t.jsx("div",{className:"text-2xl",children:a}),n[2]=a,n[3]=i):i=n[3];let d;n[4]===Symbol.for("react.memo_cache_sentinel")?(d=t.jsx(ae,{targetType:"tree",onSelect:s,className:"ml-4"}),n[4]=d):d=n[4];let m;n[5]!==i?(m=t.jsx(L,{targetType:"tree",onDrop:s,className:"h-30!",children:t.jsxs("div",{className:"flex align-center",children:[i,d]})}),n[5]=i,n[6]=m):m=n[6];let f;n[7]!==c?(f=t.jsx(K,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:c}),n[7]=c,n[8]=f):f=n[8];let h;return n[9]!==m||n[10]!==f?(h=t.jsxs(t.Fragment,{children:[m,f]}),n[9]=m,n[10]=f,n[11]=h):h=n[11],h}const Ue=`import { useState, useContext } from 'react'
import FilesSelect, { type FileTreeItem } from '@/components/FilesSelect'
import DropElement from '@/components/DropElement'
import JsonView from '@/components/JsonView'
import LocaleContext from '@/context/LocaleContext'

function FileSelectAndDropTree() {
  const localeContext = useContext(LocaleContext)
  const [listData, setListData] = useState<FileTreeItem[]>([])

  function onSelect(fileList: FileTreeItem[]) {
    setListData(fileList)
  }

  return (
    <>
      <DropElement targetType='tree' onDrop={onSelect} className='h-30!'>
        <div className='flex align-center'>
          <div className='text-2xl'>{
            localeContext === 'zh'
              ? '请拖放文件或文件夹到这里，或点击选择文件'
              : 'Please drag and drop files or folders here, or click to select files'}</div>
          <FilesSelect targetType='tree' onSelect={onSelect} className='ml-4'></FilesSelect>
        </div>
      </DropElement>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FileSelectAndDropTree
`;function te(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...A(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"dropelement",children:"DropElement"}),`
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
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#%E6%96%87%E4%BB%B6%E9%80%89%E6%8B%A9%E5%B9%B6%E6%8B%96%E6%8B%BD",children:"文件选择并拖拽"})}),`
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
`,t.jsx(b,{code:Ve,title:"文件树",description:"拖拽文件/文件夹到此处，使用文件树查看文件结构。",children:t.jsx(ke,{})}),`
`,t.jsx(e.h3,{id:"文件列表",children:"文件列表"}),`
`,t.jsx(b,{code:Je,title:"文件列表",description:"拖拽文件/文件夹到此处，使用文件列表直接上传。",children:t.jsx(ze,{})}),`
`,t.jsx(e.h3,{id:"文件选择并拖拽",children:"文件选择并拖拽"}),`
`,t.jsx(b,{code:Ue,title:"文件选择并拖拽",description:"文件选择并拖拽，并查看结果。",children:t.jsx(He,{})})]})}function Xe(n={}){const{wrapper:e}={...A(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(te,{...n})}):te(n)}function qe(){const n=S.c(6);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],n[0]=e):e=n[0];const[r,c]=F.useState(e);let o;if(n[1]===Symbol.for("react.memo_cache_sentinel")){const a=function(d){console.log("fileTrees",d),c(d)};o=t.jsx(L,{targetType:"tree",onDrop:a,className:"h-30!"}),n[1]=o}else o=n[1];let l;n[2]!==r?(l=r.length>0&&t.jsx(k,{fieldNames:{title:"name",key:"filePath",children:"children"},treeData:r,showLine:!0,defaultExpandAll:!0,height:320,showIcon:!0,icon:Ge,className:"mt-4 h-80"}),n[2]=r,n[3]=l):l=n[3];let s;return n[4]!==l?(s=t.jsxs(t.Fragment,{children:[o,l]}),n[4]=l,n[5]=s):s=n[5],s}function Ge(n){return t.jsx(oe,{fileName:n.title,type:n.type==="file"?"file":"folder"})}const Qe=`import React from 'react'
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
`;function We(){const n=S.c(10);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],n[0]=e):e=n[0];const[r,c]=p.useState(e),[o,l]=p.useState(!1);let s;if(n[1]===Symbol.for("react.memo_cache_sentinel")){let m=function(h){return h.map(Ye)};const f=function(y){c(m(y)),l(!0)};s=t.jsx(L,{targetType:"list",onDrop:f,className:"mt-4"}),n[1]=s}else s=n[1];let a;n[2]!==r?(a=t.jsx(K,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:r}),n[2]=r,n[3]=a):a=n[3];let i;n[4]!==o||n[5]!==r?(i=t.jsx(ce,{targetType:"list",open:o,list:r,setOpen:l}),n[4]=o,n[5]=r,n[6]=i):i=n[6];let d;return n[7]!==a||n[8]!==i?(d=t.jsxs(t.Fragment,{children:[s,a,i]}),n[7]=a,n[8]=i,n[9]=d):d=n[9],d}function Ye(n){return{type:n.type,file:n.file,name:n.name,filePath:n.filePath,folderPath:n.folderPath}}const Ze=`import { useState } from 'react'
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
`;function et(){const n=S.c(12),e=p.useContext(ie);let r;n[0]===Symbol.for("react.memo_cache_sentinel")?(r=[],n[0]=r):r=n[0];const[c,o]=p.useState(r);let l;n[1]===Symbol.for("react.memo_cache_sentinel")?(l=function(w){o(w)},n[1]=l):l=n[1];const s=l,a=e==="zh"?"请拖放文件或文件夹到这里，或点击选择文件":"Please drag and drop files or folders here, or click to select files";let i;n[2]!==a?(i=t.jsx("div",{className:"text-2xl",children:a}),n[2]=a,n[3]=i):i=n[3];let d;n[4]===Symbol.for("react.memo_cache_sentinel")?(d=t.jsx(ae,{targetType:"tree",onSelect:s,className:"ml-4"}),n[4]=d):d=n[4];let m;n[5]!==i?(m=t.jsx(L,{targetType:"tree",onDrop:s,className:"h-30!",children:t.jsxs("div",{className:"flex align-center",children:[i,d]})}),n[5]=i,n[6]=m):m=n[6];let f;n[7]!==c?(f=t.jsx(K,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:c}),n[7]=c,n[8]=f):f=n[8];let h;return n[9]!==m||n[10]!==f?(h=t.jsxs(t.Fragment,{children:[m,f]}),n[9]=m,n[10]=f,n[11]=h):h=n[11],h}const tt=`import { useState, useContext } from 'react'
import FilesSelect, { type FileTreeItem } from '@/components/FilesSelect'
import DropElement from '@/components/DropElement'
import JsonView from '@/components/JsonView'
import LocaleContext from '@/context/LocaleContext'

function FileSelectAndDropTree() {
  const localeContext = useContext(LocaleContext)
  const [listData, setListData] = useState<FileTreeItem[]>([])

  function onSelect(fileList: FileTreeItem[]) {
    setListData(fileList)
  }

  return (
    <>
      <DropElement targetType='tree' onDrop={onSelect} className='h-30!'>
        <div className='flex align-center'>
          <div className='text-2xl'>{
            localeContext === 'zh'
              ? '请拖放文件或文件夹到这里，或点击选择文件'
              : 'Please drag and drop files or folders here, or click to select files'}</div>
          <FilesSelect targetType='tree' onSelect={onSelect} className='ml-4'></FilesSelect>
        </div>
      </DropElement>
      <JsonView className='mt-4!' jsonClassName='max-h-100 overflow-auto'>
        {listData}
      </JsonView>
    </>
  )
}

export default FileSelectAndDropTree
`;function ne(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...A(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"dropelement",children:"DropElement"}),`
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
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#file-select-and-drop-tree",children:"File Select and Drop Tree"})}),`
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
`,t.jsx(b,{code:Qe,title:"File Tree",description:"Drag and drop files/folders to view the file structure.",children:t.jsx(qe,{})}),`
`,t.jsx(e.h3,{id:"file-list",children:"File List"}),`
`,t.jsx(b,{code:Ze,title:"File List",description:"Drag and drop files/folders to upload directly.",children:t.jsx(We,{})}),`
`,t.jsx(e.h3,{id:"file-select-and-drop-tree",children:"File Select and Drop Tree"}),`
`,t.jsx(b,{code:tt,title:"File Select and Drop Tree",description:"Select and drag files, and view the results.",children:t.jsx(et,{})})]})}function nt(n={}){const{wrapper:e}={...A(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(ne,{...n})}):ne(n)}function ht(){const n=S.c(2),e=Ie();let r;return n[0]!==e?(r=t.jsx("div",{className:"px-4 pb-4",children:t.jsx(we,{children:e==="zh"?t.jsx(Xe,{}):t.jsx(nt,{})})}),n[0]=e,n[1]=r):r=n[1],r}export{ht as default};
