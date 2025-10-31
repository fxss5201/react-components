import{r as R,b as H,x as S,v as ze,t as we,o as K,m as Ce,aj as Me,d as Ie,ak as ye,H as xe,N as $e,Z as Oe,ai as Ee,f as je,c as ke,u as Pe,j as V,W as Ne}from"./index-BFMmcQtt.js";import{I as Re}from"./index-Dh3V20RN.js";import{R as _e}from"./UpOutlined-BB8b5Q6d.js";import"./useVariants-BihWoGkc.js";import"./EyeOutlined-Dod80o9I.js";const Be=R.forwardRef((e,n)=>{const{prefixCls:a,className:o,children:t,size:f,style:d={}}=e,u=H(`${a}-panel`,{[`${a}-panel-hidden`]:f===0},o),i=f!==void 0;return S.createElement("div",{ref:n,className:u,style:Object.assign(Object.assign({},d),{flexBasis:i?f:"auto",flexGrow:i?0:1})},t)}),Te=()=>null;var Le=function(e,n){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(e);t<o.length;t++)n.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(a[o[t]]=e[o[t]]);return a};function Ue(e){if(e&&typeof e=="object")return Object.assign(Object.assign({},e),{showCollapsibleIcon:e.showCollapsibleIcon===void 0?"auto":e.showCollapsibleIcon});const n=!!e;return{start:n,end:n,showCollapsibleIcon:"auto"}}function Xe(e){return R.useMemo(()=>ze(e).filter(a=>R.isValidElement(a)).map(a=>{const{props:o}=a,{collapsible:t}=o,f=Le(o,["collapsible"]);return Object.assign(Object.assign({},f),{collapsible:Ue(t)})}),[e])}function ie(e,n){return e.collapsible&&n.collapsible?e.showCollapsibleIcon===!0||n.showCollapsibleIcon===!0?!0:e.showCollapsibleIcon==="auto"||n.showCollapsibleIcon==="auto"?"auto":!1:e.collapsible?e.showCollapsibleIcon:n.collapsible?n.showCollapsibleIcon:!1}function Ye(e,n,a){return R.useMemo(()=>{const o=[];for(let t=0;t<e.length-1;t+=1){const f=e[t],d=e[t+1],u=n[t],i=n[t+1],{resizable:c=!0,min:l,collapsible:I}=f,{resizable:E=!0,min:v,collapsible:s}=d,p=c&&E&&(u!==0||!l)&&(i!==0||!v),z=!!I.end&&u>0,y=!!s.start&&i===0&&u>0,w=z||y,m=!!s.start&&i>0,r=!!I.end&&u===0&&i>0,C=m||r,b=ie({collapsible:z,showCollapsibleIcon:I.showCollapsibleIcon},{collapsible:y,showCollapsibleIcon:s.showCollapsibleIcon}),x=ie({collapsible:m,showCollapsibleIcon:s.showCollapsibleIcon},{collapsible:r,showCollapsibleIcon:I.showCollapsibleIcon});o[t]={resizable:p,startCollapsible:!!(a?C:w),endCollapsible:!!(a?w:C),showStartCollapsibleIcon:a?x:b,showEndCollapsibleIcon:a?b:x}}return o},[n,e])}function oe(e){return Number(e.slice(0,-1))/100}function le(e){return typeof e=="string"&&e.endsWith("%")}function Ve(e,n){const a=e.map(s=>s.size),o=e.length,t=n||0,f=s=>s*t,[d,u]=S.useState(()=>e.map(s=>s.defaultSize)),i=S.useMemo(()=>{var s;const p=[];for(let z=0;z<o;z+=1)p[z]=(s=a[z])!==null&&s!==void 0?s:d[z];return p},[o,d,a]),c=S.useMemo(()=>{let s=[],p=0;for(let y=0;y<o;y+=1){const w=i[y];if(le(w))s[y]=oe(w);else if(w||w===0){const m=Number(w);Number.isNaN(m)||(s[y]=m/t)}else p+=1,s[y]=void 0}const z=s.reduce((y,w)=>y+(w||0),0);if(z>1||!p){const y=1/z;s=s.map(w=>w===void 0?0:w*y)}else{const y=(1-z)/p;s=s.map(w=>w===void 0?y:w)}return s},[i,t]),l=S.useMemo(()=>c.map(f),[c,t]),I=S.useMemo(()=>e.map(s=>le(s.min)?oe(s.min):(s.min||0)/t),[e,t]),E=S.useMemo(()=>e.map(s=>le(s.max)?oe(s.max):(s.max||t)/t),[e,t]);return[S.useMemo(()=>n?l:i,[l,n]),l,c,I,E,u]}function Ae(e,n,a,o,t,f){const d=e.map(r=>[r.min,r.max]),u=o||0,i=r=>r*u;function c(r,C){return typeof r=="string"?i(oe(r)):r??C}const[l,I]=R.useState([]),E=R.useRef([]),[v,s]=R.useState(null),p=()=>a.map(i);return[r=>{I(p()),s({index:r,confirmed:!1})},(r,C)=>{var b;let x=null;if((!v||!v.confirmed)&&C!==0){if(C>0)x=r,s({index:r,confirmed:!0});else for(let N=r;N>=0;N-=1)if(l[N]>0&&n[N].resizable){x=N,s({index:N,confirmed:!0});break}}const M=(b=x??v?.index)!==null&&b!==void 0?b:r,g=we(l),j=M+1,A=c(d[M][0],0),_=c(d[j][0],0),B=c(d[M][1],u),L=c(d[j][1],u);let $=C;return g[M]+$<A&&($=A-g[M]),g[j]-$<_&&($=g[j]-_),g[M]+$>B&&($=B-g[M]),g[j]-$>L&&($=g[j]-L),g[M]+=$,g[j]-=$,t(g),g},()=>{s(null)},(r,C)=>{const b=p(),x=f?C==="start"?"end":"start":C,M=x==="start"?r:r+1,g=x==="start"?r+1:r,j=b[M],A=b[g];if(j!==0&&A!==0)b[M]=0,b[g]+=j,E.current[r]=j;else{const _=j+A,B=c(d[M][0],0),L=c(d[M][1],u),$=c(d[g][0],0),N=c(d[g][1],u),F=Math.max(B,_-N),Q=Math.min(L,_-$),O=$||(Q-F)/2,k=E.current[r],X=_-k;k&&k<=N&&k>=$&&X<=L&&X>=B?(b[g]=k,b[M]=X):(b[M]-=O,b[g]+=O)}return t(b),b},v?.index]}function re(e){return typeof e=="number"&&!Number.isNaN(e)?Math.round(e):0}const He=e=>{const{prefixCls:n,vertical:a,index:o,active:t,ariaNow:f,ariaMin:d,ariaMax:u,resizable:i,startCollapsible:c,endCollapsible:l,onOffsetStart:I,onOffsetUpdate:E,onOffsetEnd:v,onCollapse:s,lazy:p,containerSize:z,showStartCollapsibleIcon:y,showEndCollapsibleIcon:w}=e,m=`${n}-bar`,[r,C]=R.useState(null),[b,x]=R.useState(0),M=a?0:b,g=a?b:0,j=O=>{i&&O.currentTarget&&(C([O.pageX,O.pageY]),I(o))},A=O=>{if(i&&O.touches.length===1){const k=O.touches[0];C([k.pageX,k.pageY]),I(o)}},_=O=>{const k=z*f/100,X=k+O,G=Math.max(0,z*d/100),Z=Math.min(z,z*u/100);return Math.max(G,Math.min(Z,X))-k},B=K((O,k)=>{const X=_(a?k:O);x(X)}),L=K(()=>{E(o,M,g,!0),x(0),v(!0)}),$=O=>{switch(O){case!0:return`${m}-collapse-bar-always-visible`;case!1:return`${m}-collapse-bar-always-hidden`;case"auto":return`${m}-collapse-bar-hover-only`}};Ce(()=>{if(!r)return;const Z={mousemove:U=>{const{pageX:Y,pageY:q}=U,W=Y-r[0],ee=q-r[1];p?B(W,ee):E(o,W,ee)},mouseup:()=>{p?L():v(),C(null)},touchmove:U=>{if(U.touches.length===1){const Y=U.touches[0],q=Y.pageX-r[0],W=Y.pageY-r[1];p?B(q,W):E(o,q,W)}},touchend:()=>{p?L():v(),C(null)}};for(const[U,Y]of Object.entries(Z))window.addEventListener(U,Y);return()=>{for(const[U,Y]of Object.entries(Z))window.removeEventListener(U,Y)}},[r,o,p]);const N={[`--${m}-preview-offset`]:`${b}px`},F=a?_e:Me,Q=a?Ie:ye;return S.createElement("div",{className:m,role:"separator","aria-valuenow":re(f),"aria-valuemin":re(d),"aria-valuemax":re(u)},p&&S.createElement("div",{className:H(`${m}-preview`,{[`${m}-preview-active`]:!!b}),style:N}),S.createElement("div",{className:H(`${m}-dragger`,{[`${m}-dragger-disabled`]:!i,[`${m}-dragger-active`]:t}),onMouseDown:j,onTouchStart:A}),c&&S.createElement("div",{className:H(`${m}-collapse-bar`,`${m}-collapse-bar-start`,$(y)),onClick:()=>s(o,"start")},S.createElement(F,{className:H(`${m}-collapse-icon`,`${m}-collapse-start`)})),l&&S.createElement("div",{className:H(`${m}-collapse-bar`,`${m}-collapse-bar-end`,$(w)),onClick:()=>s(o,"end")},S.createElement(Q,{className:H(`${m}-collapse-icon`,`${m}-collapse-end`)})))},De=e=>{const{componentCls:n}=e;return{[`&-rtl${n}-horizontal`]:{[`> ${n}-bar`]:{[`${n}-bar-collapse-previous`]:{insetInlineEnd:0,insetInlineStart:"unset"},[`${n}-bar-collapse-next`]:{insetInlineEnd:"unset",insetInlineStart:0}}},[`&-rtl${n}-vertical`]:{[`> ${n}-bar`]:{[`${n}-bar-collapse-previous`]:{insetInlineEnd:"50%",insetInlineStart:"unset"},[`${n}-bar-collapse-next`]:{insetInlineEnd:"50%",insetInlineStart:"unset"}}}}},te={position:"absolute",top:"50%",left:{_skip_check_:!0,value:"50%"},transform:"translate(-50%, -50%)"},We=e=>{const{componentCls:n,colorFill:a,splitBarDraggableSize:o,splitBarSize:t,splitTriggerSize:f,controlItemBgHover:d,controlItemBgActive:u,controlItemBgActiveHover:i,prefixCls:c}=e,l=`${n}-bar`,I=`${n}-mask`,E=`${n}-panel`,v=e.calc(f).div(2).equal(),s=`${c}-bar-preview-offset`,p={position:"absolute",background:e.colorPrimary,opacity:.2,pointerEvents:"none",transition:"none",zIndex:1,display:"none"};return{[n]:Object.assign(Object.assign(Object.assign({},$e(e)),{display:"flex",width:"100%",height:"100%",alignItems:"stretch",[`> ${l}`]:{flex:"none",position:"relative",userSelect:"none",[`${l}-dragger`]:Object.assign(Object.assign({},te),{zIndex:1,"&::before":Object.assign({content:'""',background:d},te),"&::after":Object.assign({content:'""',background:a},te),[`&:hover:not(${l}-dragger-active)`]:{"&::before":{background:u}},"&-active":{zIndex:2,"&::before":{background:i}},[`&-disabled${l}-dragger`]:{zIndex:0,"&, &:hover, &-active":{cursor:"default","&::before":{background:d}},"&::after":{display:"none"}}}),[`${l}-collapse-bar`]:Object.assign(Object.assign({},te),{zIndex:e.zIndexPopupBase,background:d,fontSize:e.fontSizeSM,borderRadius:e.borderRadiusXS,color:e.colorText,cursor:"pointer",opacity:0,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{background:u},"&:active":{background:i}}),"&:hover, &:active":{[`${l}-collapse-bar-hover-only`]:{opacity:1}},[`${l}-collapse-bar-hover-only`]:{"@media(hover:none)":{opacity:1}},[`${l}-collapse-bar-always-hidden`]:{display:"none"},[`${l}-collapse-bar-always-visible`]:{opacity:1}},[I]:{position:"fixed",zIndex:e.zIndexPopupBase,inset:0,"&-horizontal":{cursor:"col-resize"},"&-vertical":{cursor:"row-resize"}},"&-horizontal":{flexDirection:"row",[`> ${l}`]:{width:0,[`${l}-preview`]:Object.assign(Object.assign({height:"100%",width:t},p),{[`&${l}-preview-active`]:{display:"block",transform:`translateX(var(--${s}))`}}),[`${l}-dragger`]:{cursor:"col-resize",height:"100%",width:f,"&::before":{height:"100%",width:t},"&::after":{height:o,width:t}},[`${l}-collapse-bar`]:{width:e.fontSizeSM,height:e.controlHeightSM,"&-start":{left:{_skip_check_:!0,value:"auto"},right:{_skip_check_:!0,value:v},transform:"translateY(-50%)"},"&-end":{left:{_skip_check_:!0,value:v},right:{_skip_check_:!0,value:"auto"},transform:"translateY(-50%)"}}}},"&-vertical":{flexDirection:"column",[`> ${l}`]:{height:0,[`${l}-preview`]:Object.assign(Object.assign({height:t,width:"100%"},p),{[`&${l}-preview-active`]:{display:"block",transform:`translateY(var(--${s}))`}}),[`${l}-dragger`]:{cursor:"row-resize",width:"100%",height:f,"&::before":{width:"100%",height:t},"&::after":{width:o,height:t}},[`${l}-collapse-bar`]:{height:e.fontSizeSM,width:e.controlHeightSM,"&-start":{top:"auto",bottom:v,transform:"translateX(-50%)"},"&-end":{top:v,bottom:"auto",transform:"translateX(-50%)"}}}},[E]:{overflow:"auto",padding:"0 1px",scrollbarWidth:"thin",boxSizing:"border-box","&-hidden":{padding:0,overflow:"hidden"},[`&:has(${n}:only-child)`]:{overflow:"hidden"}}}),De(e))}},Fe=e=>{var n;const a=e.splitBarSize||2,o=e.splitTriggerSize||6,t=e.resizeSpinnerSize||20,f=(n=e.splitBarDraggableSize)!==null&&n!==void 0?n:t;return{splitBarSize:a,splitTriggerSize:o,splitBarDraggableSize:f,resizeSpinnerSize:t}},Ge=xe("Splitter",We,Fe),Ze=e=>{const{prefixCls:n,className:a,style:o,layout:t="horizontal",children:f,rootClassName:d,onResizeStart:u,onResize:i,onResizeEnd:c,lazy:l}=e,{getPrefixCls:I,direction:E,className:v,style:s}=Oe("splitter"),p=I("splitter",n),z=Ee(p),[y,w,m]=Ge(p,z),r=t==="vertical",C=E==="rtl",b=!r&&C,x=Xe(f),[M,g]=R.useState(),j=P=>{const{offsetWidth:h,offsetHeight:T}=P,D=r?T:h;D!==0&&g(D)},[A,_,B,L,$,N]=Ve(x,M),F=Ye(x,_,C),[Q,O,k,X,G]=Ae(x,F,B,M,N,C),Z=K(P=>{Q(P),u?.(_)}),U=K((P,h,T)=>{const D=O(P,h);T?c?.(D):i?.(D)}),Y=K(P=>{k(),P||c?.(_)}),q=K((P,h)=>{const T=X(P,h);i?.(T),c?.(T)}),W=H(p,a,`${p}-${t}`,{[`${p}-rtl`]:C},d,v,m,z,w),ee=`${p}-mask`,ne=S.useMemo(()=>{const P=[];let h=0;for(let T=0;T<x.length;T+=1)h+=B[T],P.push(h);return P},[B]),de=Object.assign(Object.assign({},s),o);return y(S.createElement(je,{onResize:j},S.createElement("div",{style:de,className:W},x.map((P,h)=>{const T=S.createElement(Be,Object.assign({},P,{prefixCls:p,size:A[h]}));let D=null;const J=F[h];if(J){const ue=(ne[h-1]||0)+L[h],fe=(ne[h+1]||100)-$[h+1],me=(ne[h-1]||0)+$[h],be=(ne[h+1]||100)-L[h+1];D=S.createElement(He,{lazy:l,index:h,active:G===h,prefixCls:p,vertical:r,resizable:J.resizable,ariaNow:ne[h]*100,ariaMin:Math.max(ue,fe)*100,ariaMax:Math.min(me,be)*100,startCollapsible:J.startCollapsible,endCollapsible:J.endCollapsible,showStartCollapsibleIcon:J.showStartCollapsibleIcon,showEndCollapsibleIcon:J.showEndCollapsibleIcon,onOffsetStart:Z,onOffsetUpdate:(ge,he,Se,ve)=>{let ae=r?Se:he;b&&(ae=-ae),U(ge,ae,ve)},onOffsetEnd:Y,onCollapse:q,containerSize:M||0})}return S.createElement(S.Fragment,{key:`split-panel-${h}`},T,D)}),typeof G=="number"&&S.createElement("div",{"aria-hidden":!0,className:H(ee,`${ee}-${t}`)}))))},se=Ze;se.Panel=Te;var qe=function(e){return function(n,a){var o=R.useRef(!1);e(function(){return function(){o.current=!1}},[]),e(function(){if(!o.current)o.current=!0;else return n()},a)}};const Je=qe(R.useEffect),ce=`# 这是一个 Markdown 页面

## 目录

## 列表项

1. 列表1
2. 列表2
3. 列表3

- 列表1
- 列表2
- 列表3

## 表格

| 姓名 | 年龄 | 性别 |
| ---- | ---- | ---- |
| 张三 | 18   | 男   |
| 李四 | 20   | 女   |
| 王五 | 22   | 男   |

## 链接

### 外部链接

[百度](https://www.baidu.com)

### 内部链接

\`\`\`md
[Markdown](md-page)

[Markdown](/md-page)

[Markdown](/react-components/md-page)

[Markdown](react-components/md-page)

[多文件上传](file-upload/files-upload)

[复制到剪贴板](/copy-to-clipboard-page)

[复制到剪贴板](/react-components/copy-to-clipboard-page)
\`\`\`

[Markdown](md-page)

[Markdown](/md-page)

[Markdown](/react-components/md-page)

[Markdown](react-components/md-page)

[多文件上传](file-upload/files-upload)

[复制到剪贴板](/copy-to-clipboard-page)

[复制到剪贴板](/react-components/copy-to-clipboard-page)

## 代码段

### 行内代码

行内代码：\`<hello>\` \`world\`

### 多行代码

\`\`\`js
for (var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
\`\`\`

\`\`\`tsx
import { useState, useRef, useCallback, useEffect } from 'react'
import copy from 'copy-to-clipboard'
import { Button, Tooltip } from 'antd'
import { CopyOutlined, CheckOutlined } from '@ant-design/icons'
\`\`\`
`,pe=`# This is a Markdown Page

## TOC

## List Item

1. List 1
2. List 2
3. List 3

- List 1
- List 2
- List 3

## Table

| Name | Age | Gender |
| ---- | ---- | ---- |
| Zhang San | 18   | Male |
| Li Si | 20   | Female |
| Wang Wu | 22   | Male |

## Links

### External Links

[百度](https://www.baidu.com)

### Internal Link

\`\`\`md
[Markdown](md-page)

[Markdown](/md-page)

[Markdown](/react-components/md-page)

[Markdown](react-components/md-page)

[多文件上传](file-upload/files-upload)

[复制到剪贴板](/copy-to-clipboard-page)

[复制到剪贴板](/react-components/copy-to-clipboard-page)
\`\`\`

[Markdown](md-page)

[Markdown](/md-page)

[Markdown](/react-components/md-page)

[Markdown](react-components/md-page)

[多文件上传](file-upload/files-upload)

[复制到剪贴板](/copy-to-clipboard-page)

[复制到剪贴板](/react-components/copy-to-clipboard-page)

## Code Snippets

### Inline code

In-line code: \`<hello>\` \`world\`

### Multi-line code

\`\`\`js
for (var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
\`\`\`

\`\`\`tsx
import { useState, useRef, useCallback, useEffect } from 'react'
import copy from 'copy-to-clipboard'
import { Button, Tooltip } from 'antd'
import { CopyOutlined, CheckOutlined } from '@ant-design/icons'
\`\`\`
`,{TextArea:Ke}=Re;function sn(){const e=ke.c(13),n=Pe(),[a,o]=R.useState(n==="en"?pe:ce);let t,f;e[0]!==n?(t=()=>{console.log(n),o(n==="en"?pe:ce)},f=[n],e[0]=n,e[1]=t,e[2]=f):(t=e[1],f=e[2]),Je(t,f);let d;e[3]===Symbol.for("react.memo_cache_sentinel")?(d=V.jsx("div",{className:"text-lg font-bold mb-3",children:"Markdown 编辑"}),e[3]=d):d=e[3];let u;e[4]===Symbol.for("react.memo_cache_sentinel")?(u=E=>o(E.target.value),e[4]=u):u=e[4];let i;e[5]!==a?(i=V.jsx(se.Panel,{collapsible:!0,children:V.jsxs("div",{className:"p-4",children:[d,V.jsx(Ke,{value:a,onChange:u,rows:15})]})}),e[5]=a,e[6]=i):i=e[6];let c;e[7]===Symbol.for("react.memo_cache_sentinel")?(c=V.jsx("div",{className:"text-lg font-bold mb-3",children:"Markdown 预览（边框内的内容）"}),e[7]=c):c=e[7];let l;e[8]!==a?(l=V.jsx(se.Panel,{collapsible:!0,children:V.jsxs("div",{className:"p-4",children:[c,V.jsx("div",{className:"border border-gray-300 dark:border-gray-700 rounded p-4",children:V.jsx(Ne,{children:a})})]})}),e[8]=a,e[9]=l):l=e[9];let I;return e[10]!==i||e[11]!==l?(I=V.jsxs(se,{className:"h-full",children:[i,l]}),e[10]=i,e[11]=l,e[12]=I):I=e[12],I}export{sn as default};
