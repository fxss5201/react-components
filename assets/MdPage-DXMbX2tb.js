import{r as P,L as ze,a as we,c as H,F as v,af as Ce,H as Me,ag as K,f as Ie,V as xe,ae as ye,W as $e,j as Oe,a1 as Ee,g as je,U as ke,ah as Pe,a9 as Ne,ac as Re,aa as Y,ad as _e}from"./index-cjC2bwRP.js";import{I as Be}from"./index-QDsUESVP.js";import"./index-DPiOXi4Y.js";import"./useVariants-D0tdvtoC.js";import"./EyeOutlined-DUF69Oev.js";var Le={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},Te=function(n,a){return P.createElement(ze,we({},n,{ref:a,icon:Le}))},Ue=P.forwardRef(Te);const Xe=P.forwardRef((e,n)=>{const{prefixCls:a,className:o,children:t,size:f,style:d={}}=e,u=H(`${a}-panel`,{[`${a}-panel-hidden`]:f===0},o),i=f!==void 0;return v.createElement("div",{ref:n,className:u,style:Object.assign(Object.assign({},d),{flexBasis:i?f:"auto",flexGrow:i?0:1})},t)}),Ve=()=>null;var Ye=function(e,n){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(e);t<o.length;t++)n.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(a[o[t]]=e[o[t]]);return a};function Ae(e){if(e&&typeof e=="object")return Object.assign(Object.assign({},e),{showCollapsibleIcon:e.showCollapsibleIcon===void 0?"auto":e.showCollapsibleIcon});const n=!!e;return{start:n,end:n,showCollapsibleIcon:"auto"}}function He(e){return P.useMemo(()=>Ce(e).filter(a=>P.isValidElement(a)).map(a=>{const{props:o}=a,{collapsible:t}=o,f=Ye(o,["collapsible"]);return Object.assign(Object.assign({},f),{collapsible:Ae(t)})}),[e])}function ie(e,n){return e.collapsible&&n.collapsible?e.showCollapsibleIcon===!0||n.showCollapsibleIcon===!0?!0:e.showCollapsibleIcon==="auto"||n.showCollapsibleIcon==="auto"?"auto":!1:e.collapsible?e.showCollapsibleIcon:n.collapsible?n.showCollapsibleIcon:!1}function De(e,n,a){return P.useMemo(()=>{const o=[];for(let t=0;t<e.length-1;t+=1){const f=e[t],d=e[t+1],u=n[t],i=n[t+1],{resizable:c=!0,min:r,collapsible:I}=f,{resizable:E=!0,min:S,collapsible:s}=d,p=c&&E&&(u!==0||!r)&&(i!==0||!S),z=!!I.end&&u>0,x=!!s.start&&i===0&&u>0,w=z||x,m=!!s.start&&i>0,l=!!I.end&&u===0&&i>0,C=m||l,b=ie({collapsible:z,showCollapsibleIcon:I.showCollapsibleIcon},{collapsible:x,showCollapsibleIcon:s.showCollapsibleIcon}),y=ie({collapsible:m,showCollapsibleIcon:s.showCollapsibleIcon},{collapsible:l,showCollapsibleIcon:I.showCollapsibleIcon});o[t]={resizable:p,startCollapsible:!!(a?C:w),endCollapsible:!!(a?w:C),showStartCollapsibleIcon:a?y:b,showEndCollapsibleIcon:a?b:y}}return o},[n,e])}function oe(e){return Number(e.slice(0,-1))/100}function re(e){return typeof e=="string"&&e.endsWith("%")}function We(e,n){const a=e.map(s=>s.size),o=e.length,t=n||0,f=s=>s*t,[d,u]=v.useState(()=>e.map(s=>s.defaultSize)),i=v.useMemo(()=>{var s;const p=[];for(let z=0;z<o;z+=1)p[z]=(s=a[z])!==null&&s!==void 0?s:d[z];return p},[o,d,a]),c=v.useMemo(()=>{let s=[],p=0;for(let x=0;x<o;x+=1){const w=i[x];if(re(w))s[x]=oe(w);else if(w||w===0){const m=Number(w);Number.isNaN(m)||(s[x]=m/t)}else p+=1,s[x]=void 0}const z=s.reduce((x,w)=>x+(w||0),0);if(z>1||!p){const x=1/z;s=s.map(w=>w===void 0?0:w*x)}else{const x=(1-z)/p;s=s.map(w=>w===void 0?x:w)}return s},[i,t]),r=v.useMemo(()=>c.map(f),[c,t]),I=v.useMemo(()=>e.map(s=>re(s.min)?oe(s.min):(s.min||0)/t),[e,t]),E=v.useMemo(()=>e.map(s=>re(s.max)?oe(s.max):(s.max||t)/t),[e,t]);return[v.useMemo(()=>n?r:i,[r,n]),r,c,I,E,u]}function Fe(e,n,a,o,t,f){const d=e.map(l=>[l.min,l.max]),u=o||0,i=l=>l*u;function c(l,C){return typeof l=="string"?i(oe(l)):l??C}const[r,I]=P.useState([]),E=P.useRef([]),[S,s]=P.useState(null),p=()=>a.map(i);return[l=>{I(p()),s({index:l,confirmed:!1})},(l,C)=>{var b;let y=null;if((!S||!S.confirmed)&&C!==0){if(C>0)y=l,s({index:l,confirmed:!0});else for(let R=l;R>=0;R-=1)if(r[R]>0&&n[R].resizable){y=R,s({index:R,confirmed:!0});break}}const M=(b=y??S?.index)!==null&&b!==void 0?b:l,g=Me(r),j=M+1,A=c(d[M][0],0),_=c(d[j][0],0),B=c(d[M][1],u),T=c(d[j][1],u);let $=C;return g[M]+$<A&&($=A-g[M]),g[j]-$<_&&($=g[j]-_),g[M]+$>B&&($=B-g[M]),g[j]-$>T&&($=g[j]-T),g[M]+=$,g[j]-=$,t(g),g},()=>{s(null)},(l,C)=>{const b=p(),y=f?C==="start"?"end":"start":C,M=y==="start"?l:l+1,g=y==="start"?l+1:l,j=b[M],A=b[g];if(j!==0&&A!==0)b[M]=0,b[g]+=j,E.current[l]=j;else{const _=j+A,B=c(d[M][0],0),T=c(d[M][1],u),$=c(d[g][0],0),R=c(d[g][1],u),F=Math.max(B,_-R),Q=Math.min(T,_-$),O=$||(Q-F)/2,k=E.current[l],X=_-k;k&&k<=R&&k>=$&&X<=T&&X>=B?(b[g]=k,b[M]=X):(b[M]-=O,b[g]+=O)}return t(b),b},S?.index]}function le(e){return typeof e=="number"&&!Number.isNaN(e)?Math.round(e):0}const Ge=e=>{const{prefixCls:n,vertical:a,index:o,active:t,ariaNow:f,ariaMin:d,ariaMax:u,resizable:i,startCollapsible:c,endCollapsible:r,onOffsetStart:I,onOffsetUpdate:E,onOffsetEnd:S,onCollapse:s,lazy:p,containerSize:z,showStartCollapsibleIcon:x,showEndCollapsibleIcon:w}=e,m=`${n}-bar`,[l,C]=P.useState(null),[b,y]=P.useState(0),M=a?0:b,g=a?b:0,j=O=>{i&&O.currentTarget&&(C([O.pageX,O.pageY]),I(o))},A=O=>{if(i&&O.touches.length===1){const k=O.touches[0];C([k.pageX,k.pageY]),I(o)}},_=O=>{const k=z*f/100,X=k+O,G=Math.max(0,z*d/100),q=Math.min(z,z*u/100);return Math.max(G,Math.min(q,X))-k},B=K((O,k)=>{const X=_(a?k:O);y(X)}),T=K(()=>{E(o,M,g,!0),y(0),S(!0)}),$=O=>{switch(O){case!0:return`${m}-collapse-bar-always-visible`;case!1:return`${m}-collapse-bar-always-hidden`;case"auto":return`${m}-collapse-bar-hover-only`}};Ie(()=>{if(!l)return;const q={mousemove:U=>{const{pageX:V,pageY:Z}=U,W=V-l[0],ee=Z-l[1];p?B(W,ee):E(o,W,ee)},mouseup:()=>{p?T():S(),C(null)},touchmove:U=>{if(U.touches.length===1){const V=U.touches[0],Z=V.pageX-l[0],W=V.pageY-l[1];p?B(Z,W):E(o,Z,W)}},touchend:()=>{p?T():S(),C(null)}};for(const[U,V]of Object.entries(q))window.addEventListener(U,V);return()=>{for(const[U,V]of Object.entries(q))window.removeEventListener(U,V)}},[l,o,p]);const R={[`--${m}-preview-offset`]:`${b}px`},F=a?Ue:xe,Q=a?ye:$e;return v.createElement("div",{className:m,role:"separator","aria-valuenow":le(f),"aria-valuemin":le(d),"aria-valuemax":le(u)},p&&v.createElement("div",{className:H(`${m}-preview`,{[`${m}-preview-active`]:!!b}),style:R}),v.createElement("div",{className:H(`${m}-dragger`,{[`${m}-dragger-disabled`]:!i,[`${m}-dragger-active`]:t}),onMouseDown:j,onTouchStart:A}),c&&v.createElement("div",{className:H(`${m}-collapse-bar`,`${m}-collapse-bar-start`,$(x)),onClick:()=>s(o,"start")},v.createElement(F,{className:H(`${m}-collapse-icon`,`${m}-collapse-start`)})),r&&v.createElement("div",{className:H(`${m}-collapse-bar`,`${m}-collapse-bar-end`,$(w)),onClick:()=>s(o,"end")},v.createElement(Q,{className:H(`${m}-collapse-icon`,`${m}-collapse-end`)})))},qe=e=>{const{componentCls:n}=e;return{[`&-rtl${n}-horizontal`]:{[`> ${n}-bar`]:{[`${n}-bar-collapse-previous`]:{insetInlineEnd:0,insetInlineStart:"unset"},[`${n}-bar-collapse-next`]:{insetInlineEnd:"unset",insetInlineStart:0}}},[`&-rtl${n}-vertical`]:{[`> ${n}-bar`]:{[`${n}-bar-collapse-previous`]:{insetInlineEnd:"50%",insetInlineStart:"unset"},[`${n}-bar-collapse-next`]:{insetInlineEnd:"50%",insetInlineStart:"unset"}}}}},te={position:"absolute",top:"50%",left:{_skip_check_:!0,value:"50%"},transform:"translate(-50%, -50%)"},Ze=e=>{const{componentCls:n,colorFill:a,splitBarDraggableSize:o,splitBarSize:t,splitTriggerSize:f,controlItemBgHover:d,controlItemBgActive:u,controlItemBgActiveHover:i,prefixCls:c}=e,r=`${n}-bar`,I=`${n}-mask`,E=`${n}-panel`,S=e.calc(f).div(2).equal(),s=`${c}-bar-preview-offset`,p={position:"absolute",background:e.colorPrimary,opacity:.2,pointerEvents:"none",transition:"none",zIndex:1,display:"none"};return{[n]:Object.assign(Object.assign(Object.assign({},Ee(e)),{display:"flex",width:"100%",height:"100%",alignItems:"stretch",[`> ${r}`]:{flex:"none",position:"relative",userSelect:"none",[`${r}-dragger`]:Object.assign(Object.assign({},te),{zIndex:1,"&::before":Object.assign({content:'""',background:d},te),"&::after":Object.assign({content:'""',background:a},te),[`&:hover:not(${r}-dragger-active)`]:{"&::before":{background:u}},"&-active":{zIndex:2,"&::before":{background:i}},[`&-disabled${r}-dragger`]:{zIndex:0,"&, &:hover, &-active":{cursor:"default","&::before":{background:d}},"&::after":{display:"none"}}}),[`${r}-collapse-bar`]:Object.assign(Object.assign({},te),{zIndex:e.zIndexPopupBase,background:d,fontSize:e.fontSizeSM,borderRadius:e.borderRadiusXS,color:e.colorText,cursor:"pointer",opacity:0,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{background:u},"&:active":{background:i}}),"&:hover, &:active":{[`${r}-collapse-bar-hover-only`]:{opacity:1}},[`${r}-collapse-bar-hover-only`]:{"@media(hover:none)":{opacity:1}},[`${r}-collapse-bar-always-hidden`]:{display:"none"},[`${r}-collapse-bar-always-visible`]:{opacity:1}},[I]:{position:"fixed",zIndex:e.zIndexPopupBase,inset:0,"&-horizontal":{cursor:"col-resize"},"&-vertical":{cursor:"row-resize"}},"&-horizontal":{flexDirection:"row",[`> ${r}`]:{width:0,[`${r}-preview`]:Object.assign(Object.assign({height:"100%",width:t},p),{[`&${r}-preview-active`]:{display:"block",transform:`translateX(var(--${s}))`}}),[`${r}-dragger`]:{cursor:"col-resize",height:"100%",width:f,"&::before":{height:"100%",width:t},"&::after":{height:o,width:t}},[`${r}-collapse-bar`]:{width:e.fontSizeSM,height:e.controlHeightSM,"&-start":{left:{_skip_check_:!0,value:"auto"},right:{_skip_check_:!0,value:S},transform:"translateY(-50%)"},"&-end":{left:{_skip_check_:!0,value:S},right:{_skip_check_:!0,value:"auto"},transform:"translateY(-50%)"}}}},"&-vertical":{flexDirection:"column",[`> ${r}`]:{height:0,[`${r}-preview`]:Object.assign(Object.assign({height:t,width:"100%"},p),{[`&${r}-preview-active`]:{display:"block",transform:`translateY(var(--${s}))`}}),[`${r}-dragger`]:{cursor:"row-resize",width:"100%",height:f,"&::before":{width:"100%",height:t},"&::after":{width:o,height:t}},[`${r}-collapse-bar`]:{height:e.fontSizeSM,width:e.controlHeightSM,"&-start":{top:"auto",bottom:S,transform:"translateX(-50%)"},"&-end":{top:S,bottom:"auto",transform:"translateX(-50%)"}}}},[E]:{overflow:"auto",padding:"0 1px",scrollbarWidth:"thin",boxSizing:"border-box","&-hidden":{padding:0,overflow:"hidden"},[`&:has(${n}:only-child)`]:{overflow:"hidden"}}}),qe(e))}},Je=e=>{var n;const a=e.splitBarSize||2,o=e.splitTriggerSize||6,t=e.resizeSpinnerSize||20,f=(n=e.splitBarDraggableSize)!==null&&n!==void 0?n:t;return{splitBarSize:a,splitTriggerSize:o,splitBarDraggableSize:f,resizeSpinnerSize:t}},Ke=Oe("Splitter",Ze,Je),Qe=e=>{const{prefixCls:n,className:a,style:o,layout:t="horizontal",children:f,rootClassName:d,onResizeStart:u,onResize:i,onResizeEnd:c,lazy:r}=e,{getPrefixCls:I,direction:E,className:S,style:s}=je("splitter"),p=I("splitter",n),z=ke(p),[x,w,m]=Ke(p,z),l=t==="vertical",C=E==="rtl",b=!l&&C,y=He(f),[M,g]=P.useState(),j=N=>{const{offsetWidth:h,offsetHeight:L}=N,D=l?L:h;D!==0&&g(D)},[A,_,B,T,$,R]=We(y,M),F=De(y,_,C),[Q,O,k,X,G]=Fe(y,F,B,M,R,C),q=K(N=>{Q(N),u?.(_)}),U=K((N,h,L)=>{const D=O(N,h);L?c?.(D):i?.(D)}),V=K(N=>{k(),N||c?.(_)}),Z=K((N,h)=>{const L=X(N,h);i?.(L),c?.(L)}),W=H(p,a,`${p}-${t}`,{[`${p}-rtl`]:C},d,S,m,z,w),ee=`${p}-mask`,ne=v.useMemo(()=>{const N=[];let h=0;for(let L=0;L<y.length;L+=1)h+=B[L],N.push(h);return N},[B]),de=Object.assign(Object.assign({},s),o);return x(v.createElement(Pe,{onResize:j},v.createElement("div",{style:de,className:W},y.map((N,h)=>{const L=v.createElement(Xe,Object.assign({},N,{prefixCls:p,size:A[h]}));let D=null;const J=F[h];if(J){const ue=(ne[h-1]||0)+T[h],fe=(ne[h+1]||100)-$[h+1],me=(ne[h-1]||0)+$[h],be=(ne[h+1]||100)-T[h+1];D=v.createElement(Ge,{lazy:r,index:h,active:G===h,prefixCls:p,vertical:l,resizable:J.resizable,ariaNow:ne[h]*100,ariaMin:Math.max(ue,fe)*100,ariaMax:Math.min(me,be)*100,startCollapsible:J.startCollapsible,endCollapsible:J.endCollapsible,showStartCollapsibleIcon:J.showStartCollapsibleIcon,showEndCollapsibleIcon:J.showEndCollapsibleIcon,onOffsetStart:q,onOffsetUpdate:(ge,he,ve,Se)=>{let ae=l?ve:he;b&&(ae=-ae),U(ge,ae,Se)},onOffsetEnd:V,onCollapse:Z,containerSize:M||0})}return v.createElement(v.Fragment,{key:`split-panel-${h}`},L,D)}),typeof G=="number"&&v.createElement("div",{"aria-hidden":!0,className:H(ee,`${ee}-${t}`)}))))},se=Qe;se.Panel=Ve;const ce=`# 这是一个 Markdown 页面

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

[多文件上传](files-upload)

[复制到剪贴板](/copy-to-clipboard-page)

[复制到剪贴板](/react-components/copy-to-clipboard-page)
\`\`\`

[Markdown](md-page)

[Markdown](/md-page)

[Markdown](/react-components/md-page)

[Markdown](react-components/md-page)

[多文件上传](files-upload)

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

[多文件上传](files-upload)

[复制到剪贴板](/copy-to-clipboard-page)

[复制到剪贴板](/react-components/copy-to-clipboard-page)
\`\`\`

[Markdown](md-page)

[Markdown](/md-page)

[Markdown](/react-components/md-page)

[Markdown](react-components/md-page)

[多文件上传](files-upload)

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
`;var en=function(e){return function(n,a){var o=P.useRef(!1);e(function(){return function(){o.current=!1}},[]),e(function(){if(!o.current)o.current=!0;else return n()},a)}};const nn=en(P.useEffect),{TextArea:tn}=Be;function cn(){const e=Ne.c(13),n=Re(),[a,o]=P.useState(n==="en"?pe:ce);let t,f;e[0]!==n?(t=()=>{console.log(n),o(n==="en"?pe:ce)},f=[n],e[0]=n,e[1]=t,e[2]=f):(t=e[1],f=e[2]),nn(t,f);let d;e[3]===Symbol.for("react.memo_cache_sentinel")?(d=Y.jsx("div",{className:"text-lg font-bold mb-3",children:"Markdown 编辑"}),e[3]=d):d=e[3];let u;e[4]===Symbol.for("react.memo_cache_sentinel")?(u=E=>o(E.target.value),e[4]=u):u=e[4];let i;e[5]!==a?(i=Y.jsx(se.Panel,{collapsible:!0,children:Y.jsxs("div",{className:"p-4",children:[d,Y.jsx(tn,{value:a,onChange:u,rows:15})]})}),e[5]=a,e[6]=i):i=e[6];let c;e[7]===Symbol.for("react.memo_cache_sentinel")?(c=Y.jsx("div",{className:"text-lg font-bold mb-3",children:"Markdown 预览（边框内的内容）"}),e[7]=c):c=e[7];let r;e[8]!==a?(r=Y.jsx(se.Panel,{collapsible:!0,children:Y.jsxs("div",{className:"p-4",children:[c,Y.jsx("div",{className:"border border-gray-300 dark:border-gray-700 rounded p-4",children:Y.jsx(_e,{md:a})})]})}),e[8]=a,e[9]=r):r=e[9];let I;return e[10]!==i||e[11]!==r?(I=Y.jsxs(se,{className:"h-full",children:[i,r]}),e[10]=i,e[11]=r,e[12]=I):I=e[12],I}export{cn as default};
