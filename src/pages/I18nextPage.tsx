import { useTranslation } from 'react-i18next'
import { Button, DatePicker } from 'antd'
import { useChangeLocale } from '../Hooks/useChangeLocale'

function I18nextPage() {
  const { t, i18n } = useTranslation()
  const changeLocale = useChangeLocale()

  return (
    <div className='p-4'>
      <p>当前语言: {i18n.language}</p>
      <Button type="primary" onClick={() => changeLocale(i18n.language === 'en' ? 'zh' : 'en')}>切换语言</Button>
      <div className='mt-4'>菜单：</div>
      <ul>
        <li>{t('Menu.home')}</li>
        <li>{t('Menu.i18next-page')}</li>
        <li>{t('Menu.md-page')}</li>
        <li>{t('Menu.files-upload')}</li>
      </ul>
      <div className='mt-4'>组件：</div>
      <DatePicker />
    </div>
  )
}

export default I18nextPage
