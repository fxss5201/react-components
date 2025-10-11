import{r as k,L as ze,a as Ce,c as H,F as S,af as we,H as Ie,ag as K,f as xe,V as ye,ae as Me,W as $e,j as Oe,a1 as Ee,g as je,U as Pe,ah as Ne,a9 as ke,ac as Re,aa as Y,ad as _e}from"./index-H8g460DX.js";import{I as Be}from"./index-HQuSjAyS.js";import"./index-BQTGeS0j.js";import"./useVariants-CIt09zS9.js";import"./EyeOutlined-ColK61QB.js";var Le={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},Te=function(t,a){return k.createElement(ze,Ce({},t,{ref:a,icon:Le}))},Ue=k.forwardRef(Te);const Xe=k.forwardRef((e,t)=>{const{prefixCls:a,className:o,children:n,size:f,style:d={}}=e,u=H(`${a}-panel`,{[`${a}-panel-hidden`]:f===0},o),i=f!==void 0;return S.createElement("div",{ref:t,className:u,style:Object.assign(Object.assign({},d),{flexBasis:i?f:"auto",flexGrow:i?0:1})},n)}),Ve=()=>null;var Ye=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]]);return a};function Ae(e){if(e&&typeof e=="object")return Object.assign(Object.assign({},e),{showCollapsibleIcon:e.showCollapsibleIcon===void 0?"auto":e.showCollapsibleIcon});const t=!!e;return{start:t,end:t,showCollapsibleIcon:"auto"}}function He(e){return k.useMemo(()=>we(e).filter(a=>k.isValidElement(a)).map(a=>{const{props:o}=a,{collapsible:n}=o,f=Ye(o,["collapsible"]);return Object.assign(Object.assign({},f),{collapsible:Ae(n)})}),[e])}function ie(e,t){return e.collapsible&&t.collapsible?e.showCollapsibleIcon===!0||t.showCollapsibleIcon===!0?!0:e.showCollapsibleIcon==="auto"||t.showCollapsibleIcon==="auto"?"auto":!1:e.collapsible?e.showCollapsibleIcon:t.collapsible?t.showCollapsibleIcon:!1}function De(e,t,a){return k.useMemo(()=>{const o=[];for(let n=0;n<e.length-1;n+=1){const f=e[n],d=e[n+1],u=t[n],i=t[n+1],{resizable:c=!0,min:l,collapsible:x}=f,{resizable:E=!0,min:v,collapsible:s}=d,p=c&&E&&(u!==0||!l)&&(i!==0||!v),z=!!x.end&&u>0,y=!!s.start&&i===0&&u>0,C=z||y,m=!!s.start&&i>0,r=!!x.end&&u===0&&i>0,w=m||r,b=ie({collapsible:z,showCollapsibleIcon:x.showCollapsibleIcon},{collapsible:y,showCollapsibleIcon:s.showCollapsibleIcon}),M=ie({collapsible:m,showCollapsibleIcon:s.showCollapsibleIcon},{collapsible:r,showCollapsibleIcon:x.showCollapsibleIcon});o[n]={resizable:p,startCollapsible:!!(a?w:C),endCollapsible:!!(a?C:w),showStartCollapsibleIcon:a?M:b,showEndCollapsibleIcon:a?b:M}}return o},[t,e])}function se(e){return Number(e.slice(0,-1))/100}function le(e){return typeof e=="string"&&e.endsWith("%")}function We(e,t){const a=e.map(s=>s.size),o=e.length,n=t||0,f=s=>s*n,[d,u]=S.useState(()=>e.map(s=>s.defaultSize)),i=S.useMemo(()=>{var s;const p=[];for(let z=0;z<o;z+=1)p[z]=(s=a[z])!==null&&s!==void 0?s:d[z];return p},[o,d,a]),c=S.useMemo(()=>{let s=[],p=0;for(let y=0;y<o;y+=1){const C=i[y];if(le(C))s[y]=se(C);else if(C||C===0){const m=Number(C);Number.isNaN(m)||(s[y]=m/n)}else p+=1,s[y]=void 0}const z=s.reduce((y,C)=>y+(C||0),0);if(z>1||!p){const y=1/z;s=s.map(C=>C===void 0?0:C*y)}else{const y=(1-z)/p;s=s.map(C=>C===void 0?y:C)}return s},[i,n]),l=S.useMemo(()=>c.map(f),[c,n]),x=S.useMemo(()=>e.map(s=>le(s.min)?se(s.min):(s.min||0)/n),[e,n]),E=S.useMemo(()=>e.map(s=>le(s.max)?se(s.max):(s.max||n)/n),[e,n]);return[S.useMemo(()=>t?l:i,[l,t]),l,c,x,E,u]}function Fe(e,t,a,o,n,f){const d=e.map(r=>[r.min,r.max]),u=o||0,i=r=>r*u;function c(r,w){return typeof r=="string"?i(se(r)):r??w}const[l,x]=k.useState([]),E=k.useRef([]),[v,s]=k.useState(null),p=()=>a.map(i);return[r=>{x(p()),s({index:r,confirmed:!1})},(r,w)=>{var b;let M=null;if((!v||!v.confirmed)&&w!==0){if(w>0)M=r,s({index:r,confirmed:!0});else for(let R=r;R>=0;R-=1)if(l[R]>0&&t[R].resizable){M=R,s({index:R,confirmed:!0});break}}const I=(b=M??v?.index)!==null&&b!==void 0?b:r,h=Ie(l),j=I+1,A=c(d[I][0],0),_=c(d[j][0],0),B=c(d[I][1],u),T=c(d[j][1],u);let $=w;return h[I]+$<A&&($=A-h[I]),h[j]-$<_&&($=h[j]-_),h[I]+$>B&&($=B-h[I]),h[j]-$>T&&($=h[j]-T),h[I]+=$,h[j]-=$,n(h),h},()=>{s(null)},(r,w)=>{const b=p(),M=f?w==="start"?"end":"start":w,I=M==="start"?r:r+1,h=M==="start"?r+1:r,j=b[I],A=b[h];if(j!==0&&A!==0)b[I]=0,b[h]+=j,E.current[r]=j;else{const _=j+A,B=c(d[I][0],0),T=c(d[I][1],u),$=c(d[h][0],0),R=c(d[h][1],u),F=Math.max(B,_-R),Q=Math.min(T,_-$),O=$||(Q-F)/2,P=E.current[r],X=_-P;P&&P<=R&&P>=$&&X<=T&&X>=B?(b[h]=P,b[I]=X):(b[I]-=O,b[h]+=O)}return n(b),b},v?.index]}function re(e){return typeof e=="number"&&!Number.isNaN(e)?Math.round(e):0}const Ge=e=>{const{prefixCls:t,vertical:a,index:o,active:n,ariaNow:f,ariaMin:d,ariaMax:u,resizable:i,startCollapsible:c,endCollapsible:l,onOffsetStart:x,onOffsetUpdate:E,onOffsetEnd:v,onCollapse:s,lazy:p,containerSize:z,showStartCollapsibleIcon:y,showEndCollapsibleIcon:C}=e,m=`${t}-bar`,[r,w]=k.useState(null),[b,M]=k.useState(0),I=a?0:b,h=a?b:0,j=O=>{i&&O.currentTarget&&(w([O.pageX,O.pageY]),x(o))},A=O=>{if(i&&O.touches.length===1){const P=O.touches[0];w([P.pageX,P.pageY]),x(o)}},_=O=>{const P=z*f/100,X=P+O,G=Math.max(0,z*d/100),q=Math.min(z,z*u/100);return Math.max(G,Math.min(q,X))-P},B=K((O,P)=>{const X=_(a?P:O);M(X)}),T=K(()=>{E(o,I,h,!0),M(0),v(!0)}),$=O=>{switch(O){case!0:return`${m}-collapse-bar-always-visible`;case!1:return`${m}-collapse-bar-always-hidden`;case"auto":return`${m}-collapse-bar-hover-only`}};xe(()=>{if(!r)return;const q={mousemove:U=>{const{pageX:V,pageY:Z}=U,W=V-r[0],ee=Z-r[1];p?B(W,ee):E(o,W,ee)},mouseup:()=>{p?T():v(),w(null)},touchmove:U=>{if(U.touches.length===1){const V=U.touches[0],Z=V.pageX-r[0],W=V.pageY-r[1];p?B(Z,W):E(o,Z,W)}},touchend:()=>{p?T():v(),w(null)}};for(const[U,V]of Object.entries(q))window.addEventListener(U,V);return()=>{for(const[U,V]of Object.entries(q))window.removeEventListener(U,V)}},[r,o,p]);const R={[`--${m}-preview-offset`]:`${b}px`},F=a?Ue:ye,Q=a?Me:$e;return S.createElement("div",{className:m,role:"separator","aria-valuenow":re(f),"aria-valuemin":re(d),"aria-valuemax":re(u)},p&&S.createElement("div",{className:H(`${m}-preview`,{[`${m}-preview-active`]:!!b}),style:R}),S.createElement("div",{className:H(`${m}-dragger`,{[`${m}-dragger-disabled`]:!i,[`${m}-dragger-active`]:n}),onMouseDown:j,onTouchStart:A}),c&&S.createElement("div",{className:H(`${m}-collapse-bar`,`${m}-collapse-bar-start`,$(y)),onClick:()=>s(o,"start")},S.createElement(F,{className:H(`${m}-collapse-icon`,`${m}-collapse-start`)})),l&&S.createElement("div",{className:H(`${m}-collapse-bar`,`${m}-collapse-bar-end`,$(C)),onClick:()=>s(o,"end")},S.createElement(Q,{className:H(`${m}-collapse-icon`,`${m}-collapse-end`)})))},qe=e=>{const{componentCls:t}=e;return{[`&-rtl${t}-horizontal`]:{[`> ${t}-bar`]:{[`${t}-bar-collapse-previous`]:{insetInlineEnd:0,insetInlineStart:"unset"},[`${t}-bar-collapse-next`]:{insetInlineEnd:"unset",insetInlineStart:0}}},[`&-rtl${t}-vertical`]:{[`> ${t}-bar`]:{[`${t}-bar-collapse-previous`]:{insetInlineEnd:"50%",insetInlineStart:"unset"},[`${t}-bar-collapse-next`]:{insetInlineEnd:"50%",insetInlineStart:"unset"}}}}},ne={position:"absolute",top:"50%",left:{_skip_check_:!0,value:"50%"},transform:"translate(-50%, -50%)"},Ze=e=>{const{componentCls:t,colorFill:a,splitBarDraggableSize:o,splitBarSize:n,splitTriggerSize:f,controlItemBgHover:d,controlItemBgActive:u,controlItemBgActiveHover:i,prefixCls:c}=e,l=`${t}-bar`,x=`${t}-mask`,E=`${t}-panel`,v=e.calc(f).div(2).equal(),s=`${c}-bar-preview-offset`,p={position:"absolute",background:e.colorPrimary,opacity:.2,pointerEvents:"none",transition:"none",zIndex:1,display:"none"};return{[t]:Object.assign(Object.assign(Object.assign({},Ee(e)),{display:"flex",width:"100%",height:"100%",alignItems:"stretch",[`> ${l}`]:{flex:"none",position:"relative",userSelect:"none",[`${l}-dragger`]:Object.assign(Object.assign({},ne),{zIndex:1,"&::before":Object.assign({content:'""',background:d},ne),"&::after":Object.assign({content:'""',background:a},ne),[`&:hover:not(${l}-dragger-active)`]:{"&::before":{background:u}},"&-active":{zIndex:2,"&::before":{background:i}},[`&-disabled${l}-dragger`]:{zIndex:0,"&, &:hover, &-active":{cursor:"default","&::before":{background:d}},"&::after":{display:"none"}}}),[`${l}-collapse-bar`]:Object.assign(Object.assign({},ne),{zIndex:e.zIndexPopupBase,background:d,fontSize:e.fontSizeSM,borderRadius:e.borderRadiusXS,color:e.colorText,cursor:"pointer",opacity:0,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{background:u},"&:active":{background:i}}),"&:hover, &:active":{[`${l}-collapse-bar-hover-only`]:{opacity:1}},[`${l}-collapse-bar-hover-only`]:{"@media(hover:none)":{opacity:1}},[`${l}-collapse-bar-always-hidden`]:{display:"none"},[`${l}-collapse-bar-always-visible`]:{opacity:1}},[x]:{position:"fixed",zIndex:e.zIndexPopupBase,inset:0,"&-horizontal":{cursor:"col-resize"},"&-vertical":{cursor:"row-resize"}},"&-horizontal":{flexDirection:"row",[`> ${l}`]:{width:0,[`${l}-preview`]:Object.assign(Object.assign({height:"100%",width:n},p),{[`&${l}-preview-active`]:{display:"block",transform:`translateX(var(--${s}))`}}),[`${l}-dragger`]:{cursor:"col-resize",height:"100%",width:f,"&::before":{height:"100%",width:n},"&::after":{height:o,width:n}},[`${l}-collapse-bar`]:{width:e.fontSizeSM,height:e.controlHeightSM,"&-start":{left:{_skip_check_:!0,value:"auto"},right:{_skip_check_:!0,value:v},transform:"translateY(-50%)"},"&-end":{left:{_skip_check_:!0,value:v},right:{_skip_check_:!0,value:"auto"},transform:"translateY(-50%)"}}}},"&-vertical":{flexDirection:"column",[`> ${l}`]:{height:0,[`${l}-preview`]:Object.assign(Object.assign({height:n,width:"100%"},p),{[`&${l}-preview-active`]:{display:"block",transform:`translateY(var(--${s}))`}}),[`${l}-dragger`]:{cursor:"row-resize",width:"100%",height:f,"&::before":{width:"100%",height:n},"&::after":{width:o,height:n}},[`${l}-collapse-bar`]:{height:e.fontSizeSM,width:e.controlHeightSM,"&-start":{top:"auto",bottom:v,transform:"translateX(-50%)"},"&-end":{top:v,bottom:"auto",transform:"translateX(-50%)"}}}},[E]:{overflow:"auto",padding:"0 1px",scrollbarWidth:"thin",boxSizing:"border-box","&-hidden":{padding:0,overflow:"hidden"},[`&:has(${t}:only-child)`]:{overflow:"hidden"}}}),qe(e))}},Je=e=>{var t;const a=e.splitBarSize||2,o=e.splitTriggerSize||6,n=e.resizeSpinnerSize||20,f=(t=e.splitBarDraggableSize)!==null&&t!==void 0?t:n;return{splitBarSize:a,splitTriggerSize:o,splitBarDraggableSize:f,resizeSpinnerSize:n}},Ke=Oe("Splitter",Ze,Je),Qe=e=>{const{prefixCls:t,className:a,style:o,layout:n="horizontal",children:f,rootClassName:d,onResizeStart:u,onResize:i,onResizeEnd:c,lazy:l}=e,{getPrefixCls:x,direction:E,className:v,style:s}=je("splitter"),p=x("splitter",t),z=Pe(p),[y,C,m]=Ke(p,z),r=n==="vertical",w=E==="rtl",b=!r&&w,M=He(f),[I,h]=k.useState(),j=N=>{const{offsetWidth:g,offsetHeight:L}=N,D=r?L:g;D!==0&&h(D)},[A,_,B,T,$,R]=We(M,I),F=De(M,_,w),[Q,O,P,X,G]=Fe(M,F,B,I,R,w),q=K(N=>{Q(N),u?.(_)}),U=K((N,g,L)=>{const D=O(N,g);L?c?.(D):i?.(D)}),V=K(N=>{P(),N||c?.(_)}),Z=K((N,g)=>{const L=X(N,g);i?.(L),c?.(L)}),W=H(p,a,`${p}-${n}`,{[`${p}-rtl`]:w},d,v,m,z,C),ee=`${p}-mask`,te=S.useMemo(()=>{const N=[];let g=0;for(let L=0;L<M.length;L+=1)g+=B[L],N.push(g);return N},[B]),de=Object.assign(Object.assign({},s),o);return y(S.createElement(Ne,{onResize:j},S.createElement("div",{style:de,className:W},M.map((N,g)=>{const L=S.createElement(Xe,Object.assign({},N,{prefixCls:p,size:A[g]}));let D=null;const J=F[g];if(J){const ue=(te[g-1]||0)+T[g],fe=(te[g+1]||100)-$[g+1],me=(te[g-1]||0)+$[g],be=(te[g+1]||100)-T[g+1];D=S.createElement(Ge,{lazy:l,index:g,active:G===g,prefixCls:p,vertical:r,resizable:J.resizable,ariaNow:te[g]*100,ariaMin:Math.max(ue,fe)*100,ariaMax:Math.min(me,be)*100,startCollapsible:J.startCollapsible,endCollapsible:J.endCollapsible,showStartCollapsibleIcon:J.showStartCollapsibleIcon,showEndCollapsibleIcon:J.showEndCollapsibleIcon,onOffsetStart:q,onOffsetUpdate:(he,ge,Se,ve)=>{let ae=r?Se:ge;b&&(ae=-ae),U(he,ae,ve)},onOffsetEnd:V,onCollapse:Z,containerSize:I||0})}return S.createElement(S.Fragment,{key:`split-panel-${g}`},L,D)}),typeof G=="number"&&S.createElement("div",{"aria-hidden":!0,className:H(ee,`${ee}-${n}`)}))))},oe=Qe;oe.Panel=Ve;const ce=`# 这是一个 Markdown 页面

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

[Markdown](md-page)

[多文件上传](files-upload)

[复制到剪贴板](/react-components/copy-to-clipboard-page)

[复制到剪贴板](react-components/copy-to-clipboard-page)

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

[Markdown](md-page)

[多文件上传](files-upload)

[复制到剪贴板](/react-components/copy-to-clipboard-page)

[复制到剪贴板](react-components/copy-to-clipboard-page)

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
`,{TextArea:et}=Be;function lt(){const e=ke.c(13),t=Re(),[a,o]=k.useState(t==="en"?pe:ce);let n,f;e[0]!==t?(n=()=>{o(t==="en"?pe:ce)},f=[t],e[0]=t,e[1]=n,e[2]=f):(n=e[1],f=e[2]),k.useEffect(n,f);let d;e[3]===Symbol.for("react.memo_cache_sentinel")?(d=Y.jsx("div",{className:"text-lg font-bold mb-3",children:"Markdown 编辑"}),e[3]=d):d=e[3];let u;e[4]===Symbol.for("react.memo_cache_sentinel")?(u=E=>o(E.target.value),e[4]=u):u=e[4];let i;e[5]!==a?(i=Y.jsx(oe.Panel,{collapsible:!0,children:Y.jsxs("div",{className:"p-4",children:[d,Y.jsx(et,{value:a,onChange:u,rows:15})]})}),e[5]=a,e[6]=i):i=e[6];let c;e[7]===Symbol.for("react.memo_cache_sentinel")?(c=Y.jsx("div",{className:"text-lg font-bold mb-3",children:"Markdown 预览（边框内的内容）"}),e[7]=c):c=e[7];let l;e[8]!==a?(l=Y.jsx(oe.Panel,{collapsible:!0,children:Y.jsxs("div",{className:"p-4",children:[c,Y.jsx("div",{className:"border border-gray-300 dark:border-gray-700 rounded p-4",children:Y.jsx(_e,{md:a})})]})}),e[8]=a,e[9]=l):l=e[9];let x;return e[10]!==i||e[11]!==l?(x=Y.jsxs(oe,{className:"h-full",children:[i,l]}),e[10]=i,e[11]=l,e[12]=x):x=e[12],x}export{lt as default};
