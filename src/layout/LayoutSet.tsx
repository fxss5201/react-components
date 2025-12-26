import { useState } from 'react'
import { Popover, Drawer, Form, ColorPicker, Space, Button, theme as antdTheme } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import cn from 'classnames'
import { useAClassStyles } from '@/Hooks/useStyles'
import { useTranslation } from 'react-i18next'
import { useSystemSet } from '@/storeHooks/useSystemSet'

const { useToken } = antdTheme

function LayoutSet({ className, style }: { className?: string, style?: React.CSSProperties }) {
  const { styles: aClassStyles } = useAClassStyles()
  const { t } = useTranslation()
  const [ open, setOpen ] = useState(false)
  const { token } = useToken()
  const { systemSet, changeSystemSet } = useSystemSet()
  const [ systemSetForm ] = Form.useForm()

  return (
    <>
      <Popover content={t('system.System Setting', { defaultValue: '系统设置' })} classNames={{
        container: 'p-2'
      }}>
        <div className={cn('text-[24px] cursor-pointer', className, aClassStyles.aClass)} style={style}>
          <SettingOutlined onClick={() => setOpen(true)} />
        </div>
      </Popover>
      <Drawer
        title={t('system.System Setting', { defaultValue: '系统设置' })}
        closable={{ 'aria-label': 'Close Button' }}
        onClose={() => setOpen(false)}
        open={open}
        extra={
          <Space>
            <Button onClick={() => setOpen(false)}>{t('system.Cancel', { defaultValue: '取消' })}</Button>
            <Button type="primary" onClick={() => {
              systemSetForm.submit()
              setOpen(false)
            }}>{t('system.Confirm', { defaultValue: '确认' })}</Button>
          </Space>
        }
        destroyOnHidden
      >
        <Form
          form={systemSetForm}
          name='System Setting'
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ colorPrimary: systemSet.colorPrimary || token.colorPrimary }}
          onFinish={values => {
            changeSystemSet({ colorPrimary: values.colorPrimary })
          }}
        >
          <Form.Item
            label={t('system.Theme Color', { defaultValue: '主题颜色' })}
            name='colorPrimary'
            getValueFromEvent={e => {
              const hex = e.toHex()
              return hex.startsWith('#') ? hex : `#${hex}`
            }}
          >
            <ColorPicker
              format='hex'
              showText
              presets={[
                {
                  label: t('system.Preset Colors', { defaultValue: '预设颜色' }),
                  colors: ['#1677ff', '#ff0000', '#ffb800', '#16baaa', '#a233c6']
                }
              ]}
              disabledAlpha
              destroyOnHidden />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  )
}

export default LayoutSet
