import{b as ye,j as n}from"./@uiw/react-codemirror-dimZJgSu.js";import{c as w,F as x,Q as Fe,B as _e,U as he}from"./index-CwDalt6B.js";import{M as Pe}from"./MDXRender--j0cKFwg.js";import{P as k}from"./Playground-XZt4ylVh.js";import{F as B}from"./FormBlock-DxTtaAkV.js";import{u as be}from"./@mdx-js/react-BwGmxI0N.js";import"./react-syntax-highlighter-DW6ulm9l.js";import"./markdown-plugins-CqPL4kxN.js";import"./react-markdown-U0gPFawi.js";import"./Pagination-tZ5961FD.js";import"./progress-B267_-79.js";import"./iconUtil-nk-7A3wh.js";import"./index-C1Uc0xMy.js";import"./index-abs6yZev.js";import"./index-C7j3i05K.js";function ge(){const e=w.c(66);let l;e[0]===Symbol.for("react.memo_cache_sentinel")?(l=[],e[0]=l):l=e[0];const[o,t]=ye.useState(l),[s]=x.useForm(),{message:r}=Fe.useApp();let a;e[1]===Symbol.for("react.memo_cache_sentinel")?(a={allowClear:!0,placeholder:"请输入用户名"},e[1]=a):a=e[1];let i;e[2]===Symbol.for("react.memo_cache_sentinel")?(i={type:"Input",fieldProps:a,label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"}]},e[2]=i):i=e[2];let m;e[3]===Symbol.for("react.memo_cache_sentinel")?(m={allowClear:!0,placeholder:"请输入密码"},e[3]=m):m=e[3];let c;e[4]===Symbol.for("react.memo_cache_sentinel")?(c={type:"Password",fieldProps:m,label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}]},e[4]=c):c=e[4];let u;e[5]===Symbol.for("react.memo_cache_sentinel")?(u={allowClear:!0,placeholder:"请输入文本"},e[5]=u):u=e[5];let d;e[6]===Symbol.for("react.memo_cache_sentinel")?(d={type:"TextArea",fieldProps:u,label:"文本",name:"textAreaField",rules:[{required:!0,message:"请输入文本"}]},e[6]=d):d=e[6];let p;e[7]===Symbol.for("react.memo_cache_sentinel")?(p={allowClear:!0,placeholder:"请输入搜索"},e[7]=p):p=e[7];let f;e[8]===Symbol.for("react.memo_cache_sentinel")?(f={type:"Search",fieldProps:p,label:"搜索",name:"searchField",rules:[{required:!0,message:"请输入搜索"}]},e[8]=f):f=e[8];let C;e[9]===Symbol.for("react.memo_cache_sentinel")?(C={},e[9]=C):C=e[9];let S;e[10]===Symbol.for("react.memo_cache_sentinel")?(S={type:"OTP",fieldProps:C,label:"OTP",name:"otpField",rules:[{required:!0,message:"请输入OTP"}]},e[10]=S):S=e[10];let j;e[11]===Symbol.for("react.memo_cache_sentinel")?(j={allowClear:!0,placeholder:"请选择选项",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},e[11]=j):j=e[11];let v;e[12]===Symbol.for("react.memo_cache_sentinel")?(v={type:"Select",fieldProps:j,label:"选择项",name:"selectField",rules:[{required:!0,message:"请选择选项"}]},e[12]=v):v=e[12];let q;e[13]===Symbol.for("react.memo_cache_sentinel")?(q={type:"Checkbox",fieldProps:{children:"是否选中"},label:"多选框",name:"checkboxField",valuePropName:"checked"},e[13]=q):q=e[13];let A;e[14]===Symbol.for("react.memo_cache_sentinel")?(A={type:"CheckboxGroup",fieldProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},label:"多选框1",name:"checkboxGroupField"},e[14]=A):A=e[14];let E;e[15]===Symbol.for("react.memo_cache_sentinel")?(E={type:"Radio",fieldProps:{children:"是否选中"},label:"单选框",name:"radioField",valuePropName:"checked"},e[15]=E):E=e[15];let T;e[16]===Symbol.for("react.memo_cache_sentinel")?(T={options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},e[16]=T):T=e[16];let L;e[17]===Symbol.for("react.memo_cache_sentinel")?(L={type:"RadioGroup",fieldProps:T,label:"单选框",name:"radioGroupField",rules:[{required:!0,message:"请选择选项"}]},e[17]=L):L=e[17];let R;e[18]===Symbol.for("react.memo_cache_sentinel")?(R={allowClear:!0,placeholder:"请输入自动完成",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},e[18]=R):R=e[18];let I;e[19]===Symbol.for("react.memo_cache_sentinel")?(I={type:"AutoComplete",fieldProps:R,label:"自动完成",name:"autoCompleteField",rules:[{required:!0,message:"请输入自动完成"}]},e[19]=I):I=e[19];let z;e[20]===Symbol.for("react.memo_cache_sentinel")?(z={allowClear:!0,placeholder:"请选择级联选择",options:[{value:"zhejiang",label:"Zhejiang","aria-label":"Zhejiang","data-title":"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou","aria-label":"Hangzhou","data-title":"Hangzhou",children:[{value:"xihu",label:"West Lake","aria-label":"West Lake","data-title":"West Lake"}]}]}]},e[20]=z):z=e[20];let D;e[21]===Symbol.for("react.memo_cache_sentinel")?(D={type:"Cascader",fieldProps:z,label:"级联选择",name:"cascaderField",rules:[{required:!0,message:"请选择级联选择"}]},e[21]=D):D=e[21];let M;e[22]===Symbol.for("react.memo_cache_sentinel")?(M={allowClear:!0,format:"hex"},e[22]=M):M=e[22];let $;e[23]===Symbol.for("react.memo_cache_sentinel")?($={type:"ColorPicker",fieldProps:M,label:"颜色选择",name:"colorField",rules:[{required:!0,message:"请选择颜色"}]},e[23]=$):$=e[23];let N;e[24]===Symbol.for("react.memo_cache_sentinel")?(N={allowClear:!0,placeholder:"请选择日期",format:"YYYY-MM-DD"},e[24]=N):N=e[24];let O;e[25]===Symbol.for("react.memo_cache_sentinel")?(O={type:"DatePicker",fieldProps:N,label:"日期选择",name:"dateField",rules:[{required:!0,message:"请选择日期"}]},e[25]=O):O=e[25];let U;e[26]===Symbol.for("react.memo_cache_sentinel")?(U={allowClear:!0,placeholder:"请选择时间",format:"HH:mm:ss"},e[26]=U):U=e[26];let G;e[27]===Symbol.for("react.memo_cache_sentinel")?(G={type:"TimePicker",fieldProps:U,label:"时间选择",name:"timeField",rules:[{required:!0,message:"请选择时间"}]},e[27]=G):G=e[27];let H;e[28]===Symbol.for("react.memo_cache_sentinel")?(H={placeholder:"请输入数字",min:0,max:100},e[28]=H):H=e[28];let K;e[29]===Symbol.for("react.memo_cache_sentinel")?(K={type:"InputNumber",fieldProps:H,label:"数字输入",name:"numberField",rules:[{required:!0,message:"请输入数字"}]},e[29]=K):K=e[29];let Y;e[30]===Symbol.for("react.memo_cache_sentinel")?(Y={allowClear:!0,placeholder:"请输入提及",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},e[30]=Y):Y=e[30];let V;e[31]===Symbol.for("react.memo_cache_sentinel")?(V={type:"Mentions",fieldProps:Y,label:"提及",name:"mentionsField",rules:[{required:!0,message:"请输入提及"}]},e[31]=V):V=e[31];let W;e[32]===Symbol.for("react.memo_cache_sentinel")?(W={allowClear:!0},e[32]=W):W=e[32];let Z;e[33]===Symbol.for("react.memo_cache_sentinel")?(Z={type:"Rate",fieldProps:W,label:"评分",name:"rateField",rules:[{required:!0,message:"请选择评分"}]},e[33]=Z):Z=e[33];let X;e[34]===Symbol.for("react.memo_cache_sentinel")?(X={min:0,max:10},e[34]=X):X=e[34];let Q;e[35]===Symbol.for("react.memo_cache_sentinel")?(Q={type:"Slider",fieldProps:X,label:"滑动选择",name:"sliderField",rules:[{required:!0,message:"请选择滑动选择"}]},e[35]=Q):Q=e[35];let J;e[36]===Symbol.for("react.memo_cache_sentinel")?(J={type:"Switch",fieldProps:{checkedChildren:"开",unCheckedChildren:"关"},label:"开关",name:"switchField",valuePropName:"checked"},e[36]=J):J=e[36];let ee;e[37]===Symbol.for("react.memo_cache_sentinel")?(ee=[{key:"0",title:"选项1",description:"选项1的描述"},{key:"1",title:"选项2",description:"选项2的描述"}],e[37]=ee):ee=e[37];let le;e[38]===Symbol.for("react.memo_cache_sentinel")?(le=["待选项","已选项"],e[38]=le):le=e[38];let ne;e[39]===Symbol.for("react.memo_cache_sentinel")?(ne=h=>t(h),e[39]=ne):ne=e[39];let y;e[40]!==o?(y={dataSource:ee,render:Be,titles:le,showSearch:!0,filterOption:xe,targetKeys:o,onChange:ne},e[40]=o,e[41]=y):y=e[41];let re;e[42]===Symbol.for("react.memo_cache_sentinel")?(re=[{required:!0,message:"请选择穿梭框"}],e[42]=re):re=e[42];let F;e[43]!==y?(F={type:"Transfer",fieldProps:y,label:"穿梭框",name:"transferField",rules:re},e[43]=y,e[44]=F):F=e[44];let oe;e[45]===Symbol.for("react.memo_cache_sentinel")?(oe={allowClear:!0,placeholder:"请选择树选择",treeData:[{title:"选项1",value:"1",children:[{title:"选项1-1",value:"1-1"}]}]},e[45]=oe):oe=e[45];let te;e[46]===Symbol.for("react.memo_cache_sentinel")?(te={type:"TreeSelect",fieldProps:oe,label:"树选择",name:"treeSelectField",rules:[{required:!0,message:"请选择树选择"}]},e[46]=te):te=e[46];let ae;e[47]===Symbol.for("react.memo_cache_sentinel")?(ae={authorization:"authorization-text"},e[47]=ae):ae=e[47];let _;if(e[48]!==r){let h;e[50]===Symbol.for("react.memo_cache_sentinel")?(h=n.jsx(_e,{children:"点击上传"}),e[50]=h):h=e[50],_={name:"file",action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",headers:ae,onChange(b){b.file.status!=="uploading"&&console.log(b.file,b.fileList),b.file.status==="done"?r.success(`${b.file.name} file uploaded successfully`):b.file.status==="error"&&r.error(`${b.file.name} file upload failed.`),console.log(b.fileList)},children:h},e[48]=r,e[49]=_}else _=e[49];let se;e[51]===Symbol.for("react.memo_cache_sentinel")?(se=[{required:!0,message:"请上传文件"}],e[51]=se):se=e[51];let P;e[52]!==_?(P={type:"Upload",fieldProps:_,label:"上传文件",name:"uploadField",rules:se,valuePropName:"fileList",getValueFromEvent:ke},e[52]=_,e[53]=P):P=e[53];let ie;e[54]===Symbol.for("react.memo_cache_sentinel")?(ie={allowClear:!0,placeholder:"请输入密码"},e[54]=ie):ie=e[54];let me;e[55]===Symbol.for("react.memo_cache_sentinel")?(me={type:"FormPassword",fieldProps:ie,label:"密码",name:"passwordField",rules:[{required:!0,message:"请输入密码"}]},e[55]=me):me=e[55];let g;e[56]!==r?(g={type:"FormCaptcha",fieldProps:{allowClear:!0,placeholder:"请输入验证码",onGetCaptcha:async()=>new Promise(h=>{setTimeout(()=>{r.success("获取验证码成功！"),h()},2e3)})},label:"验证码",name:"captchaField"},e[56]=r,e[57]=g):g=e[57];let ce;e[58]===Symbol.for("react.memo_cache_sentinel")?(ce={type:"Button",fieldProps:{type:"primary",htmlType:"submit",children:"提交"},label:null},e[58]=ce):ce=e[58];let ue;e[59]!==F||e[60]!==P||e[61]!==g?(ue=[i,c,d,f,S,v,q,A,E,L,I,D,$,O,G,K,V,Z,Q,J,F,te,P,me,g,ce],e[59]=F,e[60]=P,e[61]=g,e[62]=ue):ue=e[62];const pe=ue;let de;return e[63]!==s||e[64]!==pe?(de=n.jsx(B,{name:"formBlockDemo",form:s,items:pe,onFinish:we}),e[63]=s,e[64]=pe,e[65]=de):de=e[65],de}function we(e){return console.log(e)}function ke(e){return Array.isArray(e)?e:e&&e.fileList}function xe(e,l){return l.title.indexOf(e)!==-1}function Be(e){return e.title}const Ce=`import { useState } from 'react'
import FormBlock from '@/components/FormBlock'
import type { FormItemsUnion } from '@/components/FormBlock'
import { Button, Form, App } from 'antd'

function FormBlockDemo() {
  const [targetKeys, setTargetKeys] = useState<string[]>([])
  const [form] = Form.useForm()
  const { message } = App.useApp()

  const items: FormItemsUnion[] = [
    {
      type: 'Input',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入用户名',
      },
      label: '用户名',
      name: 'username',
      rules: [{ required: true, message: '请输入用户名' }]
    },
    {
      type: 'Password',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入密码',
      },
      label: '密码',
      name: 'password',
      rules: [{ required: true, message: '请输入密码' }]
    },
    {
      type: 'TextArea',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入文本',
      },
      label: '文本',
      name: 'textAreaField',
      rules: [{ required: true, message: '请输入文本' }]
    },
    {
      type: 'Search',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入搜索',
      },
      label: '搜索',
      name: 'searchField',
      rules: [{ required: true, message: '请输入搜索' }]
    },
    {
      type: 'OTP',
      fieldProps: {},
      label: 'OTP',
      name: 'otpField',
      rules: [{ required: true, message: '请输入OTP' }]
    },
    {
      type: 'Select',
      fieldProps: {
        allowClear: true,
        placeholder: '请选择选项',
        options: [
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
        ]
      },
      label: '选择项',
      name: 'selectField',
      rules: [{ required: true, message: '请选择选项' }]
    },
    {
      type: 'Checkbox',
      fieldProps: {
        children: '是否选中'
      },
      label: '多选框',
      name: 'checkboxField',
      valuePropName: 'checked',
    },
    {
      type: 'CheckboxGroup',
      fieldProps: {
        options: [
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
        ]
      },
      label: '多选框1',
      name: 'checkboxGroupField'
    },
    {
      type: 'Radio',
      fieldProps: {
        children: '是否选中'
      },
      label: '单选框',
      name: 'radioField',
      valuePropName: 'checked',
    },
    {
      type: 'RadioGroup',
      fieldProps: {
        options: [
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
        ]
      },
      label: '单选框',
      name: 'radioGroupField',
      rules: [{ required: true, message: '请选择选项' }]
    },
    {
      type: 'AutoComplete',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入自动完成',
        options: [
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
        ]
      },
      label: '自动完成',
      name: 'autoCompleteField',
      rules: [{ required: true, message: '请输入自动完成' }]
    },
    {
      type: 'Cascader',
      fieldProps: {
        allowClear: true,
        placeholder: '请选择级联选择',
        options: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            'aria-label': 'Zhejiang',
            'data-title': 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                'aria-label': 'Hangzhou',
                'data-title': 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                    'aria-label': 'West Lake',
                    'data-title': 'West Lake',
                  },
                ],
              }
            ]
          }
        ]
      },
      label: '级联选择',
      name: 'cascaderField',
      rules: [{ required: true, message: '请选择级联选择' }]
    },
    {
      type: 'ColorPicker',
      fieldProps: {
        allowClear: true,
        format: 'hex'
      },
      label: '颜色选择',
      name: 'colorField',
      rules: [{ required: true, message: '请选择颜色' }]
    },
    {
      type: 'DatePicker',
      fieldProps: {
        allowClear: true,
        placeholder: '请选择日期',
        format: 'YYYY-MM-DD',
      },
      label: '日期选择',
      name: 'dateField',
      rules: [{ required: true, message: '请选择日期' }]
    },
    {
      type: 'TimePicker',
      fieldProps: {
        allowClear: true,
        placeholder: '请选择时间',
        format: 'HH:mm:ss',
      },
      label: '时间选择',
      name: 'timeField',
      rules: [{ required: true, message: '请选择时间' }]
    },
    {
      type: 'InputNumber',
      fieldProps: {
        placeholder: '请输入数字',
        min: 0,
        max: 100,
      },
      label: '数字输入',
      name: 'numberField',
      rules: [{ required: true, message: '请输入数字' }]
    },
    {
      type: 'Mentions',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入提及',
        options: [
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
        ]
      },
      label: '提及',
      name: 'mentionsField',
      rules: [{ required: true, message: '请输入提及' }]
    },
    {
      type: 'Rate',
      fieldProps: {
        allowClear: true
      },
      label: '评分',
      name: 'rateField',
      rules: [{ required: true, message: '请选择评分' }]
    },
    {
      type: 'Slider',
      fieldProps: {
        min: 0,
        max: 10,
      },
      label: '滑动选择',
      name: 'sliderField',
      rules: [{ required: true, message: '请选择滑动选择' }]
    },
    {
      type: 'Switch',
      fieldProps: {
        checkedChildren: '开',
        unCheckedChildren: '关',
      },
      label: '开关',
      name: 'switchField',
      valuePropName: 'checked',
    },
    {
      type: 'Transfer',
      fieldProps: {
        dataSource: [
          {
            key: '0',
            title: '选项1',
            description: '选项1的描述',
          },
          {
            key: '1',
            title: '选项2',
            description: '选项2的描述',
          },
        ],
        render: (item) => item.title,
        titles: ['待选项', '已选项'],
        showSearch: true,
        filterOption: (inputValue, option) =>
          option.title.indexOf(inputValue) !== -1,
        targetKeys,
        onChange: (nextTargetKeys) => setTargetKeys(nextTargetKeys as string[]),
      },
      label: '穿梭框',
      name: 'transferField',
      rules: [{ required: true, message: '请选择穿梭框' }]
    },
    {
      type: 'TreeSelect',
      fieldProps: {
        allowClear: true,
        placeholder: '请选择树选择',
        treeData: [
          {
            title: '选项1',
            value: '1',
            children: [
              {
                title: '选项1-1',
                value: '1-1',
              },
            ],
          },
        ],
      },
      label: '树选择',
      name: 'treeSelectField',
      rules: [{ required: true, message: '请选择树选择' }]
    },
    {
      type: 'Upload',
      fieldProps: {
        name: 'file',
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(\`\${info.file.name} file uploaded successfully\`);
          } else if (info.file.status === 'error') {
            message.error(\`\${info.file.name} file upload failed.\`);
          }
          console.log(info.fileList)
        },
        children: (
          <Button>点击上传</Button>
        ),
      },
      label: '上传文件',
      name: 'uploadField',
      rules: [{ required: true, message: '请上传文件' }],
      valuePropName: 'fileList',
      getValueFromEvent: (e) => {
        if (Array.isArray(e)) {
          return e
        }
        return e && e.fileList
      },
    },
    {
      type: 'FormPassword',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入密码',
      },
      label: '密码',
      name: 'passwordField',
      rules: [{ required: true, message: '请输入密码' }]
    },
    {
      type: 'FormCaptcha',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入验证码',
        onGetCaptcha: async () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              message.success('获取验证码成功！')
              resolve()
            }, 2000)
          })
        }
      },
      label: '验证码',
      name: 'captchaField'
    },
    {
      type: 'Button',
      fieldProps: {
        type: 'primary',
        htmlType: 'submit',
        children: '提交'
      },
      label: null
    },
  ]

  return (
    <FormBlock
      name='formBlockDemo'
      form={form}
      items={items}
      onFinish={values => console.log(values)}
    ></FormBlock>
  )
}

export default FormBlockDemo`;function Se(){const e=w.c(7),[l]=x.useForm();let o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o={allowClear:!0,placeholder:"请输入密码"},e[0]=o):o=e[0];let t;e[1]===Symbol.for("react.memo_cache_sentinel")?(t={type:"Password",fieldProps:o,label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}]},e[1]=t):t=e[1];let s;e[2]===Symbol.for("react.memo_cache_sentinel")?(s={allowClear:!0,placeholder:"请输入密码"},e[2]=s):s=e[2];let r;e[3]===Symbol.for("react.memo_cache_sentinel")?(r={type:"Password",fieldProps:s,label:"确认密码",name:"confirmPassword",dependencies:["password"],rules:[{required:!0,message:"请输入确认密码"},ve]},e[3]=r):r=e[3];let a;e[4]===Symbol.for("react.memo_cache_sentinel")?(a=[t,r,{type:"Button",fieldProps:{type:"primary",htmlType:"submit",children:"提交"},label:null}],e[4]=a):a=e[4];const i=a;let m;return e[5]!==l?(m=n.jsx(B,{name:"formBlockPassword",layout:"vertical",autoComplete:"off",form:l,items:i,onFinish:je}),e[5]=l,e[6]=m):m=e[6],m}function je(e){return console.log(e)}function ve(e){const{getFieldValue:l}=e;return{validator(o,t){return!t||l("password")===t?Promise.resolve():Promise.reject(new Error("两次输入密码不一致"))}}}const qe=`import FormBlock from '@/components/FormBlock'
import type { FormItemsUnion } from '@/components/FormBlock'
import { Form } from 'antd'

function FormBlockPassword() {
  const [form] = Form.useForm()
  const items: FormItemsUnion[] = [
    {
      type: 'Password',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入密码',
      },
      label: '密码',
      name: 'password',
      rules: [{ required: true, message: '请输入密码' }]
    },
    {
      type: 'Password',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入密码',
      },
      label: '确认密码',
      name: 'confirmPassword',
      dependencies: ['password'],
      rules: [
        { required: true, message: '请输入确认密码' },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve()
            }
            return Promise.reject(new Error('两次输入密码不一致'))
          }
        })
      ]
    },
    {
      type: 'Button',
      fieldProps: {
        type: 'primary',
        htmlType: 'submit',
        children: '提交'
      },
      label: null
    },
  ]

  return (
    <FormBlock
      name='formBlockPassword'
      layout='vertical'
      autoComplete='off'
      form={form}
      items={items}
      onFinish={values => console.log(values)}
    ></FormBlock>
  )
}

export default FormBlockPassword
`;function Ae(){const e=w.c(9),[l]=x.useForm();let o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o={allowClear:!0,placeholder:"请输入手机号",prefix:n.jsx(he,{})},e[0]=o):o=e[0];let t;e[1]===Symbol.for("react.memo_cache_sentinel")?(t={type:"Input",fieldProps:o,label:null,name:"mobileField",rules:[{required:!0,message:"请输入手机号"}]},e[1]=t):t=e[1];let s;e[2]===Symbol.for("react.memo_cache_sentinel")?(s={allowClear:!0,placeholder:"请输入密码"},e[2]=s):s=e[2];let r;e[3]===Symbol.for("react.memo_cache_sentinel")?(r={type:"FormPassword",fieldProps:s,label:null,name:"passwordField",rules:[{required:!0,message:"请输入密码"}]},e[3]=r):r=e[3];let a;e[4]===Symbol.for("react.memo_cache_sentinel")?(a={type:"FormRemember",fieldProps:{children:"记住密码"},label:null,name:"rememberField",valuePropName:"checked"},e[4]=a):a=e[4];let i;e[5]===Symbol.for("react.memo_cache_sentinel")?(i=[t,r,a,{type:"Button",fieldProps:{type:"primary",htmlType:"submit",children:"登录",block:!0},label:null}],e[5]=i):i=e[5];const m=i;let c;e[6]===Symbol.for("react.memo_cache_sentinel")?(c={width:500},e[6]=c):c=e[6];let u;return e[7]!==l?(u=n.jsx(B,{name:"formBlockLogin",autoComplete:"off",form:l,items:m,onFinish:Ee,size:"large",style:c}),e[7]=l,e[8]=u):u=e[8],u}function Ee(e){return console.log(e)}const Te=`import FormBlock from '@/components/FormBlock'
import type { FormItemsUnion } from '@/components/FormBlock'
import { Form } from 'antd'
import { MobileOutlined } from '@ant-design/icons'

function FormBlockLogin() {
  const [form] = Form.useForm()
  const items: FormItemsUnion[] = [
    {
      type: 'Input',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入手机号',
        prefix: <MobileOutlined />,
      },
      label: null,
      name: 'mobileField',
      rules: [{ required: true, message: '请输入手机号' }]
    },
    {
      type: 'FormPassword',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入密码',
      },
      label: null,
      name: 'passwordField',
      rules: [{ required: true, message: '请输入密码' }]
    },
    {
      type: 'FormRemember',
      fieldProps: {
        children: '记住密码',
      },
      label: null,
      name: 'rememberField',
      valuePropName: 'checked',
    },
    {
      type: 'Button',
      fieldProps: {
        type: 'primary',
        htmlType: 'submit',
        children: '登录',
        block: true,
      },
      label: null
    },
  ]
  return (
    <FormBlock
      name='formBlockLogin'
      autoComplete='off'
      form={form}
      items={items}
      onFinish={values => console.log(values)}
      size='large'
      style={{ width: 500 }}
    ></FormBlock>
  )
}

export default FormBlockLogin
`;function Le(){const e=w.c(12),[l]=x.useForm();let o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o={gutter:{xs:8,sm:16,md:24},justify:"space-between"},e[0]=o):o=e[0];let t;e[1]===Symbol.for("react.memo_cache_sentinel")?(t={},e[1]=t):t=e[1];let s;e[2]===Symbol.for("react.memo_cache_sentinel")?(s={allowClear:!0,placeholder:"请输入用户名"},e[2]=s):s=e[2];let r;e[3]===Symbol.for("react.memo_cache_sentinel")?(r={type:"Col",fieldProps:t,childrenProps:[{type:"Input",fieldProps:s,label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"}]}]},e[3]=r):r=e[3];let a;e[4]===Symbol.for("react.memo_cache_sentinel")?(a={span:12},e[4]=a):a=e[4];let i;e[5]===Symbol.for("react.memo_cache_sentinel")?(i={allowClear:!0,placeholder:"请输入密码"},e[5]=i):i=e[5];let m;e[6]===Symbol.for("react.memo_cache_sentinel")?(m={type:"Row",fieldProps:o,childrenProps:[r,{type:"Col",fieldProps:a,childrenProps:[{type:"Password",fieldProps:i,label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}]}]}]},e[6]=m):m=e[6];let c;e[7]===Symbol.for("react.memo_cache_sentinel")?(c={allowClear:!0,placeholder:"请输入文本"},e[7]=c):c=e[7];let u;e[8]===Symbol.for("react.memo_cache_sentinel")?(u={type:"TextArea",fieldProps:c,label:"文本",name:"textAreaField",rules:[{required:!0,message:"请输入文本"}]},e[8]=u):u=e[8];let d;e[9]===Symbol.for("react.memo_cache_sentinel")?(d=[m,u,{type:"Button",fieldProps:{type:"primary",htmlType:"submit",children:"提交"},label:null}],e[9]=d):d=e[9];const p=d;let f;return e[10]!==l?(f=n.jsx(B,{name:"formBlockRowCol",form:l,items:p,onFinish:Re}),e[10]=l,e[11]=f):f=e[11],f}function Re(e){return console.log(e)}const Ie=`import FormBlock from '@/components/FormBlock'
import type { FormItemsUnion } from '@/components/FormBlock'
import { Form } from 'antd'

function FormBlockRowCol() {
  const [form] = Form.useForm()

  const items: FormItemsUnion[] = [
    {
      type: 'Row',
      fieldProps: {
        gutter: { xs: 8, sm: 16, md: 24 },
        justify: 'space-between'
      },
      childrenProps: [
        {
          type: 'Col',
          fieldProps: {},
          childrenProps: [
            {
              type: 'Input',
              fieldProps: {
                allowClear: true,
                placeholder: '请输入用户名',
              },
              label: '用户名',
              name: 'username',
              rules: [{ required: true, message: '请输入用户名' }]
            }
          ]
        },
        {
          type: 'Col',
          fieldProps: {
            span: 12,
          },
          childrenProps: [
            {
              type: 'Password',
              fieldProps: {
                allowClear: true,
                placeholder: '请输入密码',
              },
              label: '密码',
              name: 'password',
              rules: [{ required: true, message: '请输入密码' }]
            },
          ]
        }
      ]
    },
    {
      type: 'TextArea',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入文本',
      },
      label: '文本',
      name: 'textAreaField',
      rules: [{ required: true, message: '请输入文本' }]
    },
    {
      type: 'Button',
      fieldProps: {
        type: 'primary',
        htmlType: 'submit',
        children: '提交'
      },
      label: null
    },
  ]

  return (
    <FormBlock
      name='formBlockRowCol'
      form={form}
      items={items}
      onFinish={values => console.log(values)}
    ></FormBlock>
  )
}

export default FormBlockRowCol`;function ze(){const e=w.c(11),[l]=x.useForm();let o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o={allowClear:!0,placeholder:"请输入手机号",prefix:n.jsx(he,{})},e[0]=o):o=e[0];let t;e[1]===Symbol.for("react.memo_cache_sentinel")?(t={type:"Input",fieldProps:o,label:null,name:"mobileField",rules:[{required:!0,message:"请输入手机号"}]},e[1]=t):t=e[1];let s;e[2]===Symbol.for("react.memo_cache_sentinel")?(s={allowClear:!0,placeholder:"请输入密码"},e[2]=s):s=e[2];let r;e[3]===Symbol.for("react.memo_cache_sentinel")?(r={type:"FormPassword",fieldProps:s,label:null,name:"passwordField",rules:[{required:!0,message:"请输入密码"}]},e[3]=r):r=e[3];let a;e[4]===Symbol.for("react.memo_cache_sentinel")?(a={align:"center",justify:"space-between"},e[4]=a):a=e[4];let i;e[5]===Symbol.for("react.memo_cache_sentinel")?(i={type:"Checkbox",fieldProps:{children:"记住密码"},label:null,name:"rememberField",valuePropName:"checked"},e[5]=i):i=e[5];let m;e[6]===Symbol.for("react.memo_cache_sentinel")?(m={type:"Flex",fieldProps:a,childrenProps:[i,{type:"Button",fieldProps:{size:"small",type:"link",children:"忘记密码",onClick:Me},label:null}]},e[6]=m):m=e[6];let c;e[7]===Symbol.for("react.memo_cache_sentinel")?(c=[t,r,m,{type:"Button",fieldProps:{type:"primary",htmlType:"submit",children:"登录",block:!0},label:null}],e[7]=c):c=e[7];const u=c;let d;e[8]===Symbol.for("react.memo_cache_sentinel")?(d={width:500},e[8]=d):d=e[8];let p;return e[9]!==l?(p=n.jsx(B,{name:"formBlockFlexLogin",autoComplete:"off",form:l,items:u,onFinish:De,size:"large",style:d}),e[9]=l,e[10]=p):p=e[10],p}function De(e){return console.log(e)}function Me(){return console.log("忘记密码")}const $e=`import FormBlock from '@/components/FormBlock'
import type { FormItemsUnion } from '@/components/FormBlock'
import { Form } from 'antd'
import { MobileOutlined } from '@ant-design/icons'

function FormBlockFlexLogin() {
  const [form] = Form.useForm()
  const items: FormItemsUnion[] = [
    {
      type: 'Input',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入手机号',
        prefix: <MobileOutlined />,
      },
      label: null,
      name: 'mobileField',
      rules: [{ required: true, message: '请输入手机号' }]
    },
    {
      type: 'FormPassword',
      fieldProps: {
        allowClear: true,
        placeholder: '请输入密码',
      },
      label: null,
      name: 'passwordField',
      rules: [{ required: true, message: '请输入密码' }]
    },
    {
      type: 'Flex',
      fieldProps: {
        align: 'center',
        justify: 'space-between'
      },
      childrenProps: [
        {
          type: 'Checkbox',
          fieldProps: {
            children: '记住密码',
          },
          label: null,
          name: 'rememberField',
          valuePropName: 'checked',
        },
        {
          type: 'Button',
          fieldProps: {
            size: 'small',
            type: 'link',
            children: '忘记密码',
            onClick: () => console.log('忘记密码')
          },
          label: null
        }
      ]
    },
    {
      type: 'Button',
      fieldProps: {
        type: 'primary',
        htmlType: 'submit',
        children: '登录',
        block: true,
      },
      label: null
    },
  ]
  return (
    <FormBlock
      name='formBlockFlexLogin'
      autoComplete='off'
      form={form}
      items={items}
      onFinish={values => console.log(values)}
      size='large'
      style={{ width: 500 }}
    ></FormBlock>
  )
}

export default FormBlockFlexLogin
`;function fe(e){const l={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...be(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l.h1,{id:"formblock",children:"FormBlock"}),`
`,n.jsx(l.p,{children:"FormBlock 组件用于渲染表单块，支持输入、选择、上传等操作。"}),`
`,n.jsx(l.h2,{id:"目录",children:"目录"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsxs(l.li,{children:[n.jsx(l.a,{href:"#api",children:"API"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:n.jsx(l.a,{href:"#%E5%8F%82%E6%95%B0-props",children:"参数 Props"})}),`
`]}),`
`]}),`
`,n.jsxs(l.li,{children:[n.jsx(l.a,{href:"#%E6%BC%94%E7%A4%BA%E7%A4%BA%E4%BE%8B",children:"演示示例"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:n.jsx(l.a,{href:"#%E5%9F%BA%E6%9C%AC%E7%A4%BA%E4%BE%8B",children:"基本示例"})}),`
`,n.jsx(l.li,{children:n.jsx(l.a,{href:"#%E5%AF%86%E7%A0%81%E7%A1%AE%E8%AE%A4%E7%A4%BA%E4%BE%8B",children:"密码确认示例"})}),`
`,n.jsx(l.li,{children:n.jsx(l.a,{href:"#%E7%99%BB%E5%BD%95%E7%A4%BA%E4%BE%8B",children:"登录示例"})}),`
`,n.jsx(l.li,{children:n.jsx(l.a,{href:"#%E8%A1%8C%E5%88%97%E7%A4%BA%E4%BE%8B",children:"行列示例"})}),`
`,n.jsx(l.li,{children:n.jsx(l.a,{href:"#%E5%BC%B9%E6%80%A7%E7%99%BB%E5%BD%95%E7%A4%BA%E4%BE%8B",children:"弹性登录示例"})}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(l.h2,{id:"api",children:"API"}),`
`,n.jsx(l.h3,{id:"参数-props",children:"参数 Props"}),`
`,n.jsx(l.p,{children:n.jsx(l.a,{href:"https://github.com/fxss5201/react-components/blob/main/src/components/FormBlock.tsx",children:"FormBlock 参数"})}),`
`,n.jsx(l.h2,{id:"演示示例",children:"演示示例"}),`
`,n.jsx(l.h3,{id:"基本示例",children:"基本示例"}),`
`,n.jsx(k,{code:Ce,title:"基本示例",description:"展示 FormBlock 组件的基本用法。",children:n.jsx(ge,{})}),`
`,n.jsx(l.h3,{id:"密码确认示例",children:"密码确认示例"}),`
`,n.jsx(k,{code:qe,title:"密码确认示例",description:"展示 FormBlock 组件的密码确认用法。",children:n.jsx(Se,{})}),`
`,n.jsx(l.h3,{id:"登录示例",children:"登录示例"}),`
`,n.jsx(k,{code:Te,title:"登录示例",description:"展示 FormBlock 组件的登录用法。",children:n.jsx(Ae,{})}),`
`,n.jsx(l.h3,{id:"行列示例",children:"行列示例"}),`
`,n.jsx(k,{code:Ie,title:"行列示例",description:"展示 FormBlock 组件的行列用法。",children:n.jsx(Le,{})}),`
`,n.jsx(l.h3,{id:"弹性登录示例",children:"弹性登录示例"}),`
`,n.jsx(k,{code:$e,title:"弹性登录示例",description:"展示 FormBlock 组件的弹性登录用法。",children:n.jsx(ze,{})})]})}function Ne(e={}){const{wrapper:l}={...be(),...e.components};return l?n.jsx(l,{...e,children:n.jsx(fe,{...e})}):fe(e)}function rl(){const e=w.c(1);let l;return e[0]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx("div",{className:"px-4 pb-4",children:n.jsx(Pe,{children:n.jsx(Ne,{})})}),e[0]=l):l=e[0],l}export{rl as default};
