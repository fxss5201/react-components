import{r as d,I as J,_ as X,R as y,C as ne,i as he,b as pe,d as fe,T as me,e as re,f as xe,g as H,h as le,k as ue,l as je,m as ye,n as Te,o as ge,c as S,j as t,a as De}from"./index-sPAEccKG.js";import{u as _,M as Fe}from"./MDXRender-BZarAgbB.js";import{D as $}from"./DropElement-D51bjCMN.js";import{b as se,F as ie}from"./FilesUploadDrawer-eKFMY6t7.js";import{J as oe}from"./JsonView-BGQFDy7V.js";import{P as R}from"./Playground-CL5umANt.js";import"./useEffectWithTarget-BuQwNup2.js";import"./JsonEditor-BoNEgsyL.js";import"./CodeEditor-iUaEkS4k.js";import"./JsonRender-Ct9XYPVU.js";import"./use-undo.m-Du7Ehewq.js";var we={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"},Ie=function(e,r){return d.createElement(J,X({},e,{ref:r,icon:we}))},Ee=d.forwardRef(Ie),be={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"},Ne=function(e,r){return d.createElement(J,X({},e,{ref:r,icon:be}))},ve=d.forwardRef(Ne),Oe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"}}]},name:"holder",theme:"outlined"},Pe=function(e,r){return d.createElement(J,X({},e,{ref:r,icon:Oe}))},Se=d.forwardRef(Pe);const q=4;function Le(n){const{dropPosition:e,dropLevelOffset:r,prefixCls:o,indent:i,direction:l="ltr"}=n,s=l==="ltr"?"left":"right",a=l==="ltr"?"right":"left",c={[s]:-r*i+q,[a]:0};switch(e){case-1:c.top=-3;break;case 1:c.bottom=-3;break;default:c.bottom=-3,c[s]=i+q;break}return y.createElement("div",{style:c,className:`${o}-drop-indicator`})}const ce=y.forwardRef((n,e)=>{var r;const{getPrefixCls:o,direction:i,virtual:l,tree:s}=y.useContext(ne),{prefixCls:a,className:c,showIcon:h=!1,showLine:T,switcherIcon:F,switcherLoadingIcon:x,blockNode:w=!1,children:k,checkable:N=!1,selectable:v=!0,draggable:I,motion:O,style:A}=n,u=o("tree",a),M=o(),P=O??Object.assign(Object.assign({},he(M)),{motionAppear:!1}),U=Object.assign(Object.assign({},n),{checkable:N,selectable:v,showIcon:h,motion:P,blockNode:w,showLine:!!T,dropIndicatorRender:Le}),[g,f,D]=pe(u),[,E]=fe(),b=E.paddingXS/2+(((r=E.Tree)===null||r===void 0?void 0:r.titleHeight)||E.controlHeightSM),V=y.useMemo(()=>{if(!I)return!1;let p={};switch(typeof I){case"function":p.nodeDraggable=I;break;case"object":p=Object.assign({},I);break}return p.icon!==!1&&(p.icon=p.icon||y.createElement(Se,null)),p},[I]),m=p=>y.createElement(xe,{prefixCls:u,switcherIcon:F,switcherLoadingIcon:x,treeNodeProps:p,showLine:T});return g(y.createElement(me,Object.assign({itemHeight:b,ref:e,virtual:l},U,{style:Object.assign(Object.assign({},s?.style),A),prefixCls:u,className:re({[`${u}-icon-hide`]:!h,[`${u}-block-node`]:w,[`${u}-unselectable`]:!v,[`${u}-rtl`]:i==="rtl"},s?.className,c,f,D),direction:i,checkable:N&&y.createElement("span",{className:`${u}-checkbox-inner`}),selectable:v,switcherIcon:m,draggable:V}),k))}),G=0,z=1,Q=2;function W(n,e,r){const{key:o,children:i}=r;function l(s){const a=s[o],c=s[i];e(a,s)!==!1&&W(c||[],e,r)}n.forEach(l)}function Ce({treeData:n,expandedKeys:e,startKey:r,endKey:o,fieldNames:i}){const l=[];let s=G;if(r&&r===o)return[r];if(!r||!o)return[];function a(c){return c===r||c===o}return W(n,c=>{if(s===Q)return!1;if(a(c)){if(l.push(c),s===G)s=z;else if(s===z)return s=Q,!1}else s===z&&l.push(c);return e.includes(c)},le(i)),l}function B(n,e,r){const o=H(e),i=[];return W(n,(l,s)=>{const a=o.indexOf(l);return a!==-1&&(i.push(s),o.splice(a,1)),!!o.length},le(r)),i}var Y=function(n,e){var r={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(r[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(n);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(r[o[i]]=n[o[i]]);return r};function Re(n){const{isLeaf:e,expanded:r}=n;return e?d.createElement(ye,null):r?d.createElement(Ee,null):d.createElement(ve,null)}function Z({treeData:n,children:e}){return n||Te(e)}const _e=(n,e)=>{var{defaultExpandAll:r,defaultExpandParent:o,defaultExpandedKeys:i}=n,l=Y(n,["defaultExpandAll","defaultExpandParent","defaultExpandedKeys"]);const s=d.useRef(null),a=d.useRef(null),c=()=>{const{keyEntities:g}=ue(Z(l));let f;return r?f=Object.keys(g):o?f=je(l.expandedKeys||i||[],g):f=l.expandedKeys||i||[],f},[h,T]=d.useState(l.selectedKeys||l.defaultSelectedKeys||[]),[F,x]=d.useState(()=>c());d.useEffect(()=>{"selectedKeys"in l&&T(l.selectedKeys)},[l.selectedKeys]),d.useEffect(()=>{"expandedKeys"in l&&x(l.expandedKeys)},[l.expandedKeys]);const w=(g,f)=>{var D;return"expandedKeys"in l||x(g),(D=l.onExpand)===null||D===void 0?void 0:D.call(l,g,f)},k=(g,f)=>{var D;const{multiple:E,fieldNames:b}=l,{node:V,nativeEvent:m}=f,{key:p=""}=V,L=Z(l),C=Object.assign(Object.assign({},f),{selected:!0}),ae=m?.ctrlKey||m?.metaKey,de=m?.shiftKey;let j;E&&ae?(j=g,s.current=p,a.current=j,C.selectedNodes=B(L,j,b)):E&&de?(j=Array.from(new Set([].concat(H(a.current||[]),H(Ce({treeData:L,expandedKeys:F,startKey:p,endKey:s.current,fieldNames:b}))))),C.selectedNodes=B(L,j,b)):(j=[p],s.current=p,a.current=j,C.selectedNodes=B(L,j,b)),(D=l.onSelect)===null||D===void 0||D.call(l,j,C),"selectedKeys"in l||T(j)},{getPrefixCls:N,direction:v}=d.useContext(ne),{prefixCls:I,className:O,showIcon:A=!0,expandAction:u="click"}=l,M=Y(l,["prefixCls","className","showIcon","expandAction"]),P=N("tree",I),U=re(`${P}-directory`,{[`${P}-directory-rtl`]:v==="rtl"},O);return d.createElement(ce,Object.assign({icon:Re,ref:e,blockNode:!0},M,{showIcon:A,expandAction:u,prefixCls:P,className:U,expandedKeys:F,selectedKeys:h,onSelect:k,onExpand:w}))},$e=d.forwardRef(_e),K=ce;K.DirectoryTree=$e;K.TreeNode=ge;function Ke(){const n=S.c(6);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],n[0]=e):e=n[0];const[r,o]=y.useState(e);let i;if(n[1]===Symbol.for("react.memo_cache_sentinel")){const a=function(h){console.log("fileTrees",h),o(h)};i=t.jsx($,{targetType:"tree",onSelect:a,className:"h-30!"}),n[1]=i}else i=n[1];let l;n[2]!==r?(l=r.length>0&&t.jsx(K,{fieldNames:{title:"name",key:"filePath",children:"children"},treeData:r,showLine:!0,defaultExpandAll:!0,height:320,showIcon:!0,icon:ke,className:"mt-4 h-80"}),n[2]=r,n[3]=l):l=n[3];let s;return n[4]!==l?(s=t.jsxs(t.Fragment,{children:[i,l]}),n[4]=l,n[5]=s):s=n[5],s}function ke(n){return t.jsx(se,{fileName:n.title,type:n.type==="file"?"file":"folder"})}const Ae=`import React from 'react'
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
      <DropElement targetType='tree' onSelect={onDropTree} className='h-30!'></DropElement>
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
`;function Me(){const n=S.c(10);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],n[0]=e):e=n[0];const[r,o]=d.useState(e),[i,l]=d.useState(!1);let s;if(n[1]===Symbol.for("react.memo_cache_sentinel")){let T=function(x){return x.map(Ue)};const F=function(w){o(T(w)),l(!0)};s=t.jsx($,{targetType:"list",onSelect:F,className:"mt-4"}),n[1]=s}else s=n[1];let a;n[2]!==r?(a=t.jsx(oe,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:r}),n[2]=r,n[3]=a):a=n[3];let c;n[4]!==i||n[5]!==r?(c=t.jsx(ie,{targetType:"list",open:i,list:r,setOpen:l}),n[4]=i,n[5]=r,n[6]=c):c=n[6];let h;return n[7]!==a||n[8]!==c?(h=t.jsxs(t.Fragment,{children:[s,a,c]}),n[7]=a,n[8]=c,n[9]=h):h=n[9],h}function Ue(n){return{type:n.type,file:n.file,name:n.name,filePath:n.filePath,folderPath:n.folderPath}}const Ve=`import { useState } from 'react'
import DropElement from '@/components/DropElement'
import type { FileItemType, FileTreeItem } from '@/types/files'
import FilesUploadDrawer from '@/components/FilesUploadDrawer'
import JsonView from '@/components/JsonView'

function FileList() {
  const [listData, setListData] = useState<FileItemType[]>([])
  const [drawerOpen, setDrawerOpen] = useState(false)

  function onDropList(fileList: FileTreeItem[]) {
    setListData(changeFileTreeItemToFileItemType(fileList))
    setDrawerOpen(true)
  }
  function changeFileTreeItemToFileItemType(fileList: FileTreeItem[]): FileItemType[] {
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
      <DropElement targetType='list' onSelect={onDropList} className='mt-4'></DropElement>
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

export type FileTreeItem = FileItemType & {
  children?: FileTreeItem[]
}

export type TargetType = 'tree' | 'list'
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`export type DropElementProps = {
  targetType?: TargetType // 执行 onSelect 时，参数的类型， tree 时为文件树，list 时为文件列表
  isIgnoreFolder?: boolean // 当 targetType 为 'list' 时，是否忽略文件夹，比如说上传文件的时候，只需要上传文件，不需要上传文件夹
  isUpload?: boolean
  onSelect: (fileTrees: FileTreeItem[]) => void
  className?: string
  children?: React.ReactNode
}
`})}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"属性"}),t.jsx(e.th,{children:"说明"}),t.jsx(e.th,{children:"类型"}),t.jsx(e.th,{children:"默认值"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"targetType"})}),t.jsx(e.td,{children:"回调函数参数类型"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"'tree' | 'list'"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"'tree'"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"isIgnoreFolder"})}),t.jsx(e.td,{children:"当 targetType 为 'list' 时，是否忽略文件夹，比如说上传文件的时候，只需要上传文件，不需要上传文件夹"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"boolean"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"false"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"isUpload"})}),t.jsx(e.td,{children:"是否上传文件/文件夹，仅用于文案"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"boolean"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"false"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"onSelect"})}),t.jsx(e.td,{children:"拖拽结束后的回调函数"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"(fileTrees: FileTreeItem[]) => void"})}),t.jsx(e.td,{children:"-"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"className"})}),t.jsx(e.td,{children:"自定义class类名"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"string"})}),t.jsx(e.td,{children:"-"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"children"})}),t.jsx(e.td,{children:"自定义内容"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"React.ReactNode"})}),t.jsx(e.td,{children:"-"})]})]})]}),`
`,t.jsx(e.h2,{id:"演示示例",children:"演示示例"}),`
`,t.jsx(e.h3,{id:"文件树",children:"文件树"}),`
`,t.jsx(R,{code:Ae,title:"文件树",description:"拖拽文件/文件夹到此处，使用文件树查看文件结构。",children:t.jsx(Ke,{})}),`
`,t.jsx(e.h3,{id:"文件列表",children:"文件列表"}),`
`,t.jsx(R,{code:Ve,title:"文件列表",description:"拖拽文件/文件夹到此处，使用文件列表直接上传。",children:t.jsx(Me,{})})]})}function ze(n={}){const{wrapper:e}={..._(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(ee,{...n})}):ee(n)}function Be(){const n=S.c(6);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],n[0]=e):e=n[0];const[r,o]=y.useState(e);let i;if(n[1]===Symbol.for("react.memo_cache_sentinel")){const a=function(h){console.log("fileTrees",h),o(h)};i=t.jsx($,{targetType:"tree",onSelect:a,className:"h-30!"}),n[1]=i}else i=n[1];let l;n[2]!==r?(l=r.length>0&&t.jsx(K,{fieldNames:{title:"name",key:"filePath",children:"children"},treeData:r,showLine:!0,defaultExpandAll:!0,height:320,showIcon:!0,icon:He,className:"mt-4 h-80"}),n[2]=r,n[3]=l):l=n[3];let s;return n[4]!==l?(s=t.jsxs(t.Fragment,{children:[i,l]}),n[4]=l,n[5]=s):s=n[5],s}function He(n){return t.jsx(se,{fileName:n.title,type:n.type==="file"?"file":"folder"})}const Je=`import React from 'react'
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
      <DropElement targetType='tree' onSelect={onDropTree} className='h-30!'></DropElement>
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
`;function Xe(){const n=S.c(10);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],n[0]=e):e=n[0];const[r,o]=d.useState(e),[i,l]=d.useState(!1);let s;if(n[1]===Symbol.for("react.memo_cache_sentinel")){let T=function(x){return x.map(We)};const F=function(w){o(T(w)),l(!0)};s=t.jsx($,{targetType:"list",onSelect:F,className:"mt-4"}),n[1]=s}else s=n[1];let a;n[2]!==r?(a=t.jsx(oe,{className:"mt-4!",jsonClassName:"max-h-100 overflow-auto",children:r}),n[2]=r,n[3]=a):a=n[3];let c;n[4]!==i||n[5]!==r?(c=t.jsx(ie,{targetType:"list",open:i,list:r,setOpen:l}),n[4]=i,n[5]=r,n[6]=c):c=n[6];let h;return n[7]!==a||n[8]!==c?(h=t.jsxs(t.Fragment,{children:[s,a,c]}),n[7]=a,n[8]=c,n[9]=h):h=n[9],h}function We(n){return{type:n.type,file:n.file,name:n.name,filePath:n.filePath,folderPath:n.folderPath}}const qe=`import { useState } from 'react'
import DropElement from '@/components/DropElement'
import type { FileItemType, FileTreeItem } from '@/types/files'
import FilesUploadDrawer from '@/components/FilesUploadDrawer'
import JsonView from '@/components/JsonView'

function FileList() {
  const [listData, setListData] = useState<FileItemType[]>([])
  const [drawerOpen, setDrawerOpen] = useState(false)

  function onDropList(fileList: FileTreeItem[]) {
    setListData(changeFileTreeItemToFileItemType(fileList))
    setDrawerOpen(true)
  }
  function changeFileTreeItemToFileItemType(fileList: FileTreeItem[]): FileItemType[] {
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
      <DropElement targetType='list' onSelect={onDropList} className='mt-4'></DropElement>
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

export type FileTreeItem = FileItemType & {
  children?: FileTreeItem[]
}

export type TargetType = 'tree' | 'list'
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`export type DropElementProps = {
  targetType?: TargetType // 执行 onSelect 时，参数的类型， tree 时为文件树，list 时为文件列表
  isIgnoreFolder?: boolean // 当 targetType 为 'list' 时，是否忽略文件夹，比如说上传文件的时候，只需要上传文件，不需要上传文件夹
  isUpload?: boolean
  onSelect: (fileTrees: FileTreeItem[]) => void
  className?: string
  children?: React.ReactNode
}
`})}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Parameter"}),t.jsx(e.th,{children:"Description"}),t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Default"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"targetType"})}),t.jsx(e.td,{children:"Execution parameter type of onSelect, tree for file tree, list for file list"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"'tree' | 'list'"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"tree"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"isIgnoreFolder"})}),t.jsx(e.td,{children:"Whether to ignore folders when targetType is 'list', for example, when uploading files, only files need to be uploaded, not folders"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"boolean"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"false"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"isUpload"})}),t.jsx(e.td,{children:"Whether to upload files/folders, only used to change the text of the select/upload button"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"boolean"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"false"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"onSelect"})}),t.jsx(e.td,{children:"Callback function when files/folders are dropped"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"(fileTrees: FileTreeItem[]) => void"})}),t.jsx(e.td,{children:"-"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"className"})}),t.jsx(e.td,{children:"Custom class name"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"string"})}),t.jsx(e.td,{children:"-"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"children"})}),t.jsx(e.td,{children:"Custom children"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"React.ReactNode"})}),t.jsx(e.td,{children:"-"})]})]})]}),`
`,t.jsx(e.h2,{id:"demos",children:"Demos"}),`
`,t.jsx(e.h3,{id:"file-tree",children:"File Tree"}),`
`,t.jsx(R,{code:Je,title:"File Tree",description:"Drag and drop files/folders to view the file structure.",children:t.jsx(Be,{})}),`
`,t.jsx(e.h3,{id:"file-list",children:"File List"}),`
`,t.jsx(R,{code:qe,title:"File List",description:"Drag and drop files/folders to upload directly.",children:t.jsx(Xe,{})})]})}function Ge(n={}){const{wrapper:e}={..._(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(te,{...n})}):te(n)}function ct(){const n=S.c(2),e=De();let r;return n[0]!==e?(r=t.jsx("div",{className:"px-4 pb-4",children:t.jsx(Fe,{children:e==="zh"?t.jsx(ze,{}):t.jsx(Ge,{})})}),n[0]=e,n[1]=r):r=n[1],r}export{ct as default};
