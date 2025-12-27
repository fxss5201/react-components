import{b as r,R as G,j as t}from"./@uiw/react-codemirror-dimZJgSu.js";import{x as Be,N as Ie,O as re,y as ve,a7 as je,a8 as Ee,a4 as J,a9 as se,aa as de,p as E,z as ie,E as ke,H as ce,a0 as $e,ab as Re,ac as De,ad as Ne,ae as ue,af as we,ag as Fe,ah as He,ai as Ae,aj as oe,ak as Me,al as Oe,c as pe,am as ze,S as Le}from"./index-Cu686E0i.js";import{M as qe}from"./MDXRender-BBvYu2-Q.js";import{P as M}from"./Playground-5R6frOv8.js";import{T as _e}from"./TablePage-Ck3KPSb-.js";import{_ as Ge}from"./react-syntax-highlighter-DW6ulm9l.js";import Ve from"./StudentsPage-BeDTece0.js";import Ke from"./StudentsBoxPage-kAcj3egh.js";import We from"./StudentsBoxManualPage-DvFayR2c.js";import Je from"./StudentsBoxOperationPage-CblD-8Ld.js";import{u as me}from"./@mdx-js/react-BwGmxI0N.js";import"./markdown-plugins-CqPL4kxN.js";import"./react-markdown-U0gPFawi.js";import"./index-D6hL_xQQ.js";import"./isBrowser-xthWFnXw.js";import"./isObjectLike-Dgt2gYKP.js";import"./use-immer.module--qy1-jU-.js";import"./FormBlock-CLTBqBmg.js";import"./progress-BsJPGnFI.js";import"./iconUtil-BMDL6EDQ.js";import"./index-oD-Nz_1Z.js";import"./index-DBFX2cnV.js";import"./index-D71U_GTy.js";import"./index-Dn-IxR0R.js";import"./TablePageBox-CwFN2g1j.js";const Xe=e=>{const{paddingXXS:n,lineWidth:a,tagPaddingHorizontal:l,componentCls:o,calc:d}=e,s=d(l).sub(a).equal(),c=d(n).sub(a).equal();return{[o]:{...ve(e),display:"inline-block",height:"auto",paddingInline:s,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",backgroundColor:e.defaultBg,border:`${re(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${o}-close-icon`]:{marginInlineStart:c,fontSize:e.tagIconSize,color:e.colorIcon,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive},"&-disabled":{cursor:"not-allowed",[`&:not(${o}-checkable-checked)`]:{color:e.colorTextDisabled,"&:hover":{backgroundColor:"transparent"}},[`&${o}-checkable-checked`]:{color:e.colorTextDisabled,backgroundColor:e.colorBgContainerDisabled},"&:hover, &:active":{backgroundColor:e.colorBgContainerDisabled,color:e.colorTextDisabled},[`&:not(${o}-checkable-checked):hover`]:{color:e.colorTextDisabled}},"&-group":{display:"flex",flexWrap:"wrap",gap:e.paddingXS}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:s}},[`&${e.componentCls}-solid`]:{borderColor:"transparent",color:e.colorTextLightSolid,backgroundColor:e.colorBgSolid,[`&${o}-default`]:{color:e.solidTextColor}},[`${o}-filled`]:{borderColor:"transparent",backgroundColor:e.tagBorderlessBg},[`&${o}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",backgroundColor:e.colorBgContainerDisabled,a:{cursor:"not-allowed",pointerEvents:"none",color:e.colorTextDisabled,"&:hover":{color:e.colorTextDisabled}},"a&":{"&:hover, &:active":{color:e.colorTextDisabled}},[`&${o}-outlined`]:{borderColor:e.colorBorderDisabled},[`&${o}-solid, &${o}-filled`]:{color:e.colorTextDisabled,[`${o}-close-icon`]:{color:e.colorTextDisabled}},[`${o}-close-icon`]:{cursor:"not-allowed",color:e.colorTextDisabled,"&:hover":{color:e.colorTextDisabled}}}}},X=e=>{const{lineWidth:n,fontSizeIcon:a,calc:l}=e,o=e.fontSizeSM;return Ie(e,{tagFontSize:o,tagLineHeight:re(l(e.lineHeightSM).mul(o).equal()),tagIconSize:l(a).sub(l(n).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},Q=e=>{const n=je(new Ee(e.colorBgSolid),"#fff")?"#000":"#fff";return{defaultBg:new J(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText,solidTextColor:n}},U=Be("Tag",e=>{const n=X(e);return Xe(n)},Q),ge=r.forwardRef((e,n)=>{const{prefixCls:a,style:l,className:o,checked:d,children:s,icon:c,onChange:y,onClick:b,disabled:u,...P}=e,{getPrefixCls:k,tag:x}=r.useContext(se),S=r.useContext(de),C=u??S,$=w=>{C||(y?.(!d),b?.(w))},m=k("tag",a),[R,D]=U(m),N=E(m,`${m}-checkable`,{[`${m}-checkable-checked`]:d,[`${m}-checkable-disabled`]:C},x?.className,o,R,D);return r.createElement("span",{...P,ref:n,style:{...l,...x?.style},className:N,onClick:$},c,r.createElement("span",null,s))});function Qe(e,n){const{id:a,prefixCls:l,rootClassName:o,className:d,style:s,classNames:c,styles:y,disabled:b,options:u,value:P,defaultValue:k,onChange:x,multiple:S,...C}=e,{getPrefixCls:$,direction:m,className:R,style:D,classNames:N,styles:w}=ie("tag"),T=$("tag",l),B=`${T}-checkable-group`,V=ke(T),[O,z]=U(T,V),[F,H]=ce([N,c],[w,y],{props:e}),L=r.useMemo(()=>(u||[]).map(i=>i&&typeof i=="object"?i:{value:i,label:i}),[u]),[A,K]=$e(k,P),g=(i,h)=>{let I=null;if(S){const v=A||[];I=i?[].concat(Ge(v),[h.value]):v.filter(j=>j!==h.value)}else I=i?h.value:null;K(I),x?.(I)},q=G.useRef(null);r.useImperativeHandle(n,()=>({nativeElement:q.current}));const W=Re(C,{aria:!0,data:!0});return G.createElement("div",{...W,className:E(B,R,o,{[`${B}-disabled`]:b,[`${B}-rtl`]:m==="rtl"},O,z,d,F.root),style:{...D,...H.root,...s},id:a,ref:q},L.map(i=>G.createElement(ge,{key:i.value,className:E(`${B}-item`,F.item),style:H.item,checked:S?(A||[]).includes(i.value):A===i.value,onChange:h=>g(h,i),disabled:b},i.label)))}const Ue=G.forwardRef(Qe);function Ye(e,n){const{color:a,variant:l,bordered:o}=e;return r.useMemo(()=>{const d=a?.endsWith("-inverse");let s;l?s=l:d?s="solid":o===!1?s="filled":s=n||"filled";const c=d?a?.replace("-inverse",""):a,y=De(a),b=Ne(a),u={};if(!y&&!b&&c)if(s==="solid")u.backgroundColor=a;else{const P=new J(c).toHsl();P.l=.95,u.backgroundColor=new J(P).toHexString(),u.color=a,s==="outlined"&&(u.borderColor=a)}return[s,c,y,b,u]},[a,l,o,n])}const Ze=e=>we(e,(n,{textColor:a,lightBorderColor:l,lightColor:o,darkColor:d})=>({[`${e.componentCls}${e.componentCls}-${n}:not(${e.componentCls}-disabled)`]:{[`&${e.componentCls}-outlined`]:{backgroundColor:o,borderColor:l,color:a},[`&${e.componentCls}-solid`]:{backgroundColor:d,borderColor:d,color:e.colorTextLightSolid},[`&${e.componentCls}-filled`]:{backgroundColor:o,color:a}}})),en=ue(["Tag","preset"],e=>{const n=X(e);return Ze(n)},Q);function nn(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const _=(e,n,a)=>{const l=nn(a);return{[`${e.componentCls}${e.componentCls}-${n}:not(${e.componentCls}-disabled)`]:{[`&${e.componentCls}-outlined`]:{backgroundColor:e[`color${l}Bg`],borderColor:e[`color${l}Border`],color:e[`color${a}`]},[`&${e.componentCls}-solid`]:{backgroundColor:e[`color${a}`],borderColor:e[`color${a}`]},[`&${e.componentCls}-filled`]:{backgroundColor:e[`color${l}Bg`],color:e[`color${a}`]}}}},tn=ue(["Tag","status"],e=>{const n=X(e);return[_(n,"success","Success"),_(n,"processing","Info"),_(n,"error","Error"),_(n,"warning","Warning")]},Q),an=r.forwardRef((e,n)=>{const{prefixCls:a,className:l,rootClassName:o,style:d,children:s,icon:c,color:y,variant:b,onClose:u,bordered:P,disabled:k,href:x,target:S,styles:C,classNames:$,...m}=e,{getPrefixCls:R,direction:D,className:N,variant:w,style:T,classNames:B,styles:V}=ie("tag"),[O,z,F,H,L]=Ye(e,w),A=F||H,K=r.useContext(de),g=k??K,{tag:q}=r.useContext(se),[W,i]=r.useState(!0),h=Fe(m,["closeIcon","closable"]),I={...e,color:z,variant:O,disabled:g,href:x,target:S,icon:c},[v,j]=ce([B,$],[V,C],{props:I}),fe=r.useMemo(()=>{let f={...j.root,...T,...d};return g||(f={...L,...f}),f},[j.root,T,d,L,g]),p=R("tag",a),[xe,be]=U(p),he=E(p,N,v.root,`${p}-${O}`,{[`${p}-${z}`]:A,[`${p}-hidden`]:!W,[`${p}-rtl`]:D==="rtl",[`${p}-disabled`]:g},l,o,xe,be),Z=f=>{g||(f.stopPropagation(),u?.(f),!f.defaultPrevented&&i(!1))},[,ye]=He(oe(e),oe(q),{closable:!1,closeIconRender:f=>{const Te=r.createElement("span",{className:`${p}-close-icon`,onClick:Z},f);return Ae(f,Te,te=>({onClick:ae=>{te?.onClick?.(ae),Z(ae)},className:E(te?.className,`${p}-close-icon`)}))}}),Pe=typeof m.onClick=="function"||s&&s.type==="a",ee=Me(c,{className:E(r.isValidElement(c)?c.props?.className:"",v.icon),style:j.icon}),Se=ee?r.createElement(r.Fragment,null,ee,s&&r.createElement("span",{className:v.content,style:j.content},s)):s,Ce=x?"a":"span",ne=r.createElement(Ce,{...h,ref:n,className:he,style:fe,href:g?void 0:x,target:S,onClick:g?void 0:h.onClick,...x&&g?{"aria-disabled":!0}:{}},Se,ye,F&&r.createElement(en,{key:"preset",prefixCls:p}),H&&r.createElement(tn,{key:"status",prefixCls:p}));return Pe?r.createElement(Oe,{component:"Tag"},ne):ne}),Y=an;Y.CheckableTag=ge;Y.CheckableTagGroup=Ue;const on=[{title:"Name",dataIndex:"name",key:"name",render:e=>t.jsx("a",{children:e})},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:(e,{tags:n})=>t.jsx(ze,{gap:"small",align:"center",wrap:!0,children:n.map(a=>{let l=a.length>5?"geekblue":"green";return a==="loser"&&(l="volcano"),t.jsx(Y,{color:l,children:a.toUpperCase()},a)})})},{title:"Action",key:"action",render:(e,n)=>t.jsxs(Le,{size:"middle",children:[t.jsxs("a",{children:["Invite ",n.name]}),t.jsx("a",{children:"Delete"})]})}],ln=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park",tags:["cool","teacher"]}];function rn(){const e=pe.c(1);let n;return e[0]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsx(_e,{localKey:"TablePageDemo",columns:on,dataSource:ln,formBlockFull:!0}),e[0]=n):n=e[0],n}const sn=`import TablePage from '@/components/TablePage'
import { Flex, Space, Tag } from 'antd'
import type { TableProps } from 'antd'

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <Flex gap="small" align="center" wrap>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </Flex>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

function TablePageDemo() {
  return (
    <TablePage
      localKey='TablePageDemo'
      columns={columns}
      dataSource={data}
      formBlockFull={true}
      />
  )
}

export default TablePageDemo
`,dn=`import { useEffect, useState } from 'react'
import { Button, Form, App, Result } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import type { TableProps } from 'antd'
import type { StudentType } from '@/types/studentType'
import { useRequest } from 'ahooks'
import { studentListHttp, addStudentHttp, putStudentHttp, delStudentHttp } from '@/service/student'
import TablePage from '@/components/TablePage'
import { useTranslation } from 'react-i18next'

function StudentsPage() {
  const { t } = useTranslation()
  const { modal } = App.useApp()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [formModal] = Form.useForm()
  const [formQuery] = Form.useForm()
  const [formData, setFormData] = useState<StudentType>()
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    if (isModalOpen) {
      formModal.setFieldsValue(formData)
    } else {
      formModal.resetFields()
    }
  }, [isModalOpen, formData, formModal])

  const { data: tableData, error, loading, refresh, run: getStudentListRun } = useRequest(studentListHttp, {
    defaultParams: [
      {
        page,
        pageSize,
      }
    ],
    onSuccess: (res) => {
      const data = res?.data?.data
      setTotal(data.total)
      if (data.total > 0 && page > 1 && data.data.length === 0) {
        const newPage = Math.ceil(data.total / pageSize)
        setPage(newPage)
        getStudentListRun({
          page: newPage,
          pageSize,
          ...formQuery.getFieldsValue()
        })
      }
    }
  })
  const { run: addStudentRun, loading: addLoading } = useRequest(addStudentHttp, {
    manual: true,
    onSuccess: () => {
      refresh()
      setIsModalOpen(false)
    }
  })
  const { run: putStudentRun, loading: putLoading } = useRequest(putStudentHttp, {
    manual: true,
    onSuccess: () => {
      refresh()
      setIsModalOpen(false)
    }
  })
  const { runAsync: deleteStudentRun } = useRequest(delStudentHttp, {
    manual: true
  })
  const handleDeleteOk = async (id: number) => {
    await deleteStudentRun(id)
    refresh()
  }
  
  const columns: TableProps<StudentType>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '操作',
      dataIndex: 'action',
      render: (_, record) => (
        <>
          <Button color='primary' variant='text' size='small'
            onClick={() => {
              setIsEdit(true)
              setFormData({
                ...record
              })
              setIsModalOpen(true)
            }}
          >编辑</Button>
          <Button color='danger' variant='text' size='small'
            onClick={() => {
              modal.confirm({
                title: '删除提示',
                content: \`确认删除学生 \${record.name} 吗？\`,
                closable: true,
                onOk() {
                  return handleDeleteOk(record.id!)
                }
              })
            }}
          >删除</Button>
        </>
      ),
    },
  ]

  if (error) {
    return (
      <Result
        status='error'
        title={error.message}
        extra={[
          <Button key='Request Again' onClick={refresh} loading={loading}>{t('components.TablePage.Request Again', { defaultValue: '重新请求' })}</Button>,
        ]}
      />
    )
  }

  const handleModalOk = (values: StudentType) => {
    if (isEdit) {
      putStudentRun({
        ...formData,
        ...values
      })
    } else {
      addStudentRun(values)
    }
  }
  const handleModalCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='px-4'>
      <TablePage<StudentType>
        rowKey='id'
        loading={loading}
        columns={columns}
        dataSource={tableData?.data?.data?.data || []}
        bordered
        sticky={{
          offsetHeader: 158,
        }}
        scroll={{
          scrollToFirstRowOnChange: true
        }}
        pagination={{
          current: page,
          pageSize,
          total,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total) => \`共 \${total} 条记录\`,
        }}
        onChange={(pagination) => {
          setPage(pagination.current!)
          setPageSize(pagination.pageSize!)
          getStudentListRun({
            page: pagination.current!,
            pageSize: pagination.pageSize!,
          })
        }}
        localKey='StudentsPage'
        formBlockProps={{
          form: formQuery,
          layout: 'inline',
          onFinish: (values) => {
            setPage(1)
            getStudentListRun({
              page: 1,
              pageSize,
              ...values
            })
          },
          items: [
            {
              type: 'Input',
              name: 'name',
              label: null,
              fieldProps: {
                prefix: <SearchOutlined />,
                allowClear: true,
                placeholder: '请输入姓名'
              },
            },
            {
              type: 'Button',
              fieldProps: {
                type: 'primary',
                htmlType: 'submit',
                children: '搜索'
              },
              label: null
            },
          ]
        }}
        actions={(
          <Button color='primary' onClick={() => {
            setIsEdit(false)
            setFormData({
              name: '',
              age: 0,
              groupId: undefined,
            })
            setIsModalOpen(true)
          }}>添加学生</Button>
        )}
        formModalProps={{
          title: isEdit ? '编辑学生' : '添加学生',
          open: isModalOpen,
          onCancel: handleModalCancel,
          okButtonProps: { autoFocus: true, htmlType: 'submit' },
          confirmLoading: isEdit ? putLoading : addLoading,
          modalRender: (dom) => (
            <Form
              form={formModal}
              onFinish={(values) => handleModalOk(values)}
            >
              {dom}
            </Form>
          ),
          forceRender: true,
          formBlockItems: [
            {
              type: 'Input',
              name: 'name',
              label: '姓名',
              rules: [{ required: true }],
              className: 'pt-4',
              fieldProps: {
                allowClear: true,
                placeholder: '请输入姓名'
              },
            },
            {
              type: 'InputNumber',
              name: 'age',
              label: '年龄',
              rules: [{ required: true }],
              fieldProps: {
                min: 1,
                placeholder: '请输入年龄',
                className: 'w-full',
              },
            },
          ]
        }}
      />
    </div>
  )
}

export default StudentsPage
`,cn=`import { useRef } from 'react'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import type { TableProps } from 'antd'
import type { StudentType } from '@/types/studentType'
import { studentListHttp, addStudentHttp, putStudentHttp, delStudentHttp } from '@/service/student'
import TablePageBox from '@/components/TablePageBox'

function StudentsBoxPage() {
  const tablePageBoxRef: Parameters<typeof TablePageBox<StudentType>>[0]['ref'] = useRef(null)

  const columns: TableProps<StudentType>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
  ]

  return (
    <div className='px-4'>
      <TablePageBox<StudentType>
        ref={tablePageBoxRef}
        modalTitle='学生'
        tablePageProps={{
          rowKey: 'id',
          columns,
          localKey: 'StudentsBoxPage',
          formBlockProps: {
            items: [
              {
                type: 'Input',
                name: 'name',
                label: null,
                fieldProps: {
                  prefix: <SearchOutlined />,
                  allowClear: true,
                  placeholder: '请输入姓名'
                },
              },
              {
                type: 'Button',
                fieldProps: {
                  type: 'primary',
                  htmlType: 'submit',
                  children: '搜索'
                },
                label: null
              },
            ]
          },
          actions: (
            <Button color='primary' onClick={() => {
              tablePageBoxRef.current?.modalAddFn({
                name: '',
                age: 0,
                groupId: undefined,
              })
            }}>添加学生</Button>
          ),
          formModalProps: {
            formBlockItems: [
              {
                type: 'Input',
                name: 'name',
                label: '姓名',
                rules: [{ required: true }],
                className: 'pt-4',
                fieldProps: {
                  allowClear: true,
                  placeholder: '请输入姓名'
                },
              },
              {
                type: 'InputNumber',
                name: 'age',
                label: '年龄',
                rules: [{ required: true }],
                fieldProps: {
                  min: 1,
                  placeholder: '请输入年龄',
                  className: 'w-full',
                },
              },
            ]
          }
        }}
        getFn={studentListHttp}
        addFn={addStudentHttp}
        putFn={putStudentHttp}
        delFn={delStudentHttp}
      />
    </div>
  )
}

export default StudentsBoxPage
`,un=`import { useRef, useState } from 'react'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import type { TableProps } from 'antd'
import type { StudentType, StudentGroupType } from '@/types/studentType'
import { studentGroupsHttp, studentListHttp, addStudentHttp, putStudentHttp, getStudentByIdHttp, delStudentHttp } from '@/service/student'
import TablePageBox from '@/components/TablePageBox'
import { useRequest } from 'ahooks'

function StudentsBoxManualPage() {
  const tablePageBoxRef: Parameters<typeof TablePageBox<StudentType>>[0]['ref'] = useRef(null)
  const [groups, setGroups] = useState<StudentGroupType[]>([])
  const [, setGroupId] = useState<number>()
  const { loading } = useRequest(studentGroupsHttp, {
    retryCount: 3,
    onSuccess: (res) => {
      const data = res?.data?.data || []
      const groupId = data[0]?.id
      setGroups(data)
      setGroupId(groupId)
      tablePageBoxRef.current?.formQuery.setFieldsValue({
        groupId,
      })
      tablePageBoxRef.current?.getRun({
        page: 1,
        pageSize: 10,
        groupId,
      })
    }
  })

  const columns: TableProps<StudentType>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
  ]

  return (
    <div className='px-4'>
      <TablePageBox<StudentType>
        ref={tablePageBoxRef}
        modalTitle='学生'
        tablePageProps={{
          rowKey: 'id',
          columns,
          localKey: 'StudentsBoxManualPage',
          formBlockProps: {
            items: [
              {
                type: 'Select',
                name: 'groupId',
                label: null,
                fieldProps: {
                  loading,
                  allowClear: true,
                  placeholder: '请选择组',
                  options: groups.map((item) => ({
                    label: item.name,
                    value: item.id,
                  })),
                  style: {
                    width: '218px',
                  },
                },
              },
              {
                type: 'Input',
                name: 'name',
                label: null,
                fieldProps: {
                  prefix: <SearchOutlined />,
                  allowClear: true,
                  placeholder: '请输入姓名'
                },
              },
              {
                type: 'Button',
                fieldProps: {
                  type: 'primary',
                  htmlType: 'submit',
                  children: '搜索'
                },
                label: null
              },
            ]
          },
          actions: (
            <Button color='primary' onClick={() => {
              tablePageBoxRef.current?.modalAddFn({
                name: '',
                age: 0,
                groupId: undefined,
              })
            }}>添加学生</Button>
          ),
          formModalProps: {
            formBlockItems: [
              {
                type: 'Select',
                name: 'groupId',
                label: '分组',
                rules: [{ required: true }],
                className: 'pt-4',
                fieldProps: {
                  loading,
                  allowClear: true,
                  placeholder: '请选择组',
                  options: groups.map((item) => ({
                    label: item.name,
                    value: item.id,
                  })),
                },
              },
              {
                type: 'Input',
                name: 'name',
                label: '姓名',
                rules: [{ required: true }],
                fieldProps: {
                  allowClear: true,
                  placeholder: '请输入姓名'
                },
              },
              {
                type: 'InputNumber',
                name: 'age',
                label: '年龄',
                rules: [{ required: true }],
                fieldProps: {
                  min: 1,
                  placeholder: '请输入年龄',
                  className: 'w-full',
                },
              },
            ]
          }
        }}
        getFn={studentListHttp}
        getOptions={{
          manual: true,
        }}
        getItemFn={getStudentByIdHttp}
        addFn={addStudentHttp}
        putFn={putStudentHttp}
        delFn={delStudentHttp}
      />
    </div>
  )
}

export default StudentsBoxManualPage
`,pn=`import { useRef } from 'react'
import { Button } from 'antd'
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import type { TableProps } from 'antd'
import type { StudentType } from '@/types/studentType'
import { studentListHttp, addStudentHttp, putStudentHttp, delStudentHttp } from '@/service/student'
import TablePageBox from '@/components/TablePageBox'

function StudentsBoxOperationPage() {
  const tablePageBoxRef: Parameters<typeof TablePageBox<StudentType>>[0]['ref'] = useRef(null)

  const columns: TableProps<StudentType>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '操作',
      dataIndex: 'action',
      render: (_, record) => (
        <>
          <Button color='primary' variant='text' size='small'
            icon={<EditOutlined />}
            onClick={() => {
              tablePageBoxRef.current?.modalEditFn(record)
            }}
          ></Button>
          <Button color='danger' variant='text' size='small'
            icon={<DeleteOutlined />}
            onClick={() => {
              tablePageBoxRef.current?.modalDeleteFn(record)
            }}
          ></Button>
        </>
      ),
    },
  ]

  return (
    <div className='px-4'>
      <TablePageBox<StudentType>
        isCustomOperation={true}
        ref={tablePageBoxRef}
        modalTitle='学生'
        tablePageProps={{
          rowKey: 'id',
          columns,
          localKey: 'StudentsBoxOperationPage',
          formBlockProps: {
            items: [
              {
                type: 'Input',
                name: 'name',
                label: null,
                fieldProps: {
                  prefix: <SearchOutlined />,
                  allowClear: true,
                  placeholder: '请输入姓名'
                },
              },
              {
                type: 'Button',
                fieldProps: {
                  type: 'primary',
                  htmlType: 'submit',
                  children: '搜索'
                },
                label: null
              },
            ]
          },
          actions: (
            <Button color='primary' onClick={() => {
              tablePageBoxRef.current?.modalAddFn({
                name: '',
                age: 0,
                groupId: undefined,
              })
            }}>添加学生</Button>
          ),
          formModalProps: {
            formBlockItems: [
              {
                type: 'Input',
                name: 'name',
                label: '姓名',
                rules: [{ required: true }],
                className: 'pt-4',
                fieldProps: {
                  allowClear: true,
                  placeholder: '请输入姓名'
                },
              },
              {
                type: 'InputNumber',
                name: 'age',
                label: '年龄',
                rules: [{ required: true }],
                fieldProps: {
                  min: 1,
                  placeholder: '请输入年龄',
                  className: 'w-full',
                },
              },
            ]
          }
        }}
        getFn={studentListHttp}
        addFn={addStudentHttp}
        putFn={putStudentHttp}
        delFn={delStudentHttp}
      />
    </div>
  )
}

export default StudentsBoxOperationPage
`;function le(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...me(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"tablepage",children:"TablePage"}),`
`,t.jsxs(n.p,{children:[t.jsx(n.code,{children:"TablePage"})," 组件用于渲染表格页，支持配置表格、表格搜索、表格弹窗等操作。"]}),`
`,t.jsx(n.h2,{id:"目录",children:"目录"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.a,{href:"#api",children:"API"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"#%E5%8F%82%E6%95%B0-props",children:"参数 Props"})}),`
`]}),`
`]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.a,{href:"#%E6%BC%94%E7%A4%BA%E7%A4%BA%E4%BE%8B",children:"演示示例"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"#%E5%9F%BA%E6%9C%AC%E7%A4%BA%E4%BE%8B",children:"基本示例"})}),`
`,t.jsxs(n.li,{children:[t.jsx(n.a,{href:"#%E5%AD%A6%E7%94%9F%E7%AE%A1%E7%90%86",children:"学生管理"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"#tablepage-%E5%B1%95%E7%A4%BA",children:"TablePage 展示"})}),`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"#tablepagebox-%E5%B1%95%E7%A4%BA",children:"TablePageBox 展示"})}),`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"#tablepagebox-%E6%89%8B%E5%8A%A8%E8%AF%B7%E6%B1%82%E6%95%B0%E6%8D%AE",children:"TablePageBox 手动请求数据"})}),`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"#tablepagebox-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%93%8D%E4%BD%9C%E5%88%97",children:"TablePageBox 自定义操作列"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,t.jsx(n.h2,{id:"api",children:"API"}),`
`,t.jsx(n.h3,{id:"参数-props",children:"参数 Props"}),`
`,t.jsx(n.p,{children:t.jsx(n.a,{href:"https://github.com/fxss5201/react-components/blob/main/src/components/TablePage.tsx",children:"TablePage 参数"})}),`
`,t.jsx(n.h2,{id:"演示示例",children:"演示示例"}),`
`,t.jsx(n.h3,{id:"基本示例",children:"基本示例"}),`
`,t.jsx(M,{code:sn,title:"基本示例",description:"展示 TablePage 组件的基本用法。",children:t.jsx(rn,{})}),`
`,t.jsx(n.h3,{id:"学生管理",children:"学生管理"}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"注意：需要在本地运行项目，因为 学生管理 会访问 mock 接口"})}),`
`,t.jsx(n.h4,{id:"tablepage-展示",children:"TablePage 展示"}),`
`,t.jsx(M,{code:dn,title:"学生管理",description:"展示 TablePage 组件在学生管理场景下的用法。",children:t.jsx(Ve,{})}),`
`,t.jsx(n.h4,{id:"tablepagebox-展示",children:"TablePageBox 展示"}),`
`,t.jsxs(n.p,{children:[t.jsx(n.code,{children:"TablePageBox"})," 组件是在 ",t.jsx(n.code,{children:"TablePage"})," 组件的基础上添加了增删改查的接口封装能力。"]}),`
`,t.jsx(n.p,{children:t.jsx(n.a,{href:"https://github.com/fxss5201/react-components/blob/main/src/components/TablePageBox.tsx",children:"TablePageBox 参数"})}),`
`,t.jsx(M,{code:cn,title:"学生管理",description:"展示 TablePageBox 组件在学生管理场景下的用法。",children:t.jsx(Ke,{})}),`
`,t.jsx(n.h4,{id:"tablepagebox-手动请求数据",children:"TablePageBox 手动请求数据"}),`
`,t.jsx(M,{code:un,title:"学生管理",description:"展示 TablePageBox 组件 手动请求数据，且单行数据使用 `getItemFn` 函数获取 在学生管理场景下的用法。",children:t.jsx(We,{})}),`
`,t.jsx(n.h4,{id:"tablepagebox-自定义操作列",children:"TablePageBox 自定义操作列"}),`
`,t.jsx(M,{code:pn,title:"学生管理",description:"展示 TablePageBox 组件 自定义操作列 在学生管理场景下的用法。",children:t.jsx(Je,{})})]})}function mn(e={}){const{wrapper:n}={...me(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(le,{...e})}):le(e)}function On(){const e=pe.c(1);let n;return e[0]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsx("div",{className:"px-4 pb-4",children:t.jsx(qe,{children:t.jsx(mn,{})})}),e[0]=n):n=e[0],n}export{On as default};
