import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import { useNavigateFn } from '../Hooks/useNavigateFn'

function SearchParamsPage() {
  const { i18n } = useTranslation()
  const navigate = useNavigateFn()
  
  return (
    <div className='px-4 pb-4'>
      <div>{ i18n.language === 'en' ? 'We can control whether the page header, page menu, page tab, page breadcrumb, page footer, and collapse menu navigation in the page layout are displayed through the route search parameter (SearchParams).' : '我们可以通过路由搜索参数（SearchParams）来控制页面布局中的 页面头、页面菜单、页面Tab、页面面包屑导航、页脚、收起菜单 是否显示。' }</div>
      <div className='my-4'>
        <span className='mr-2'>{ i18n.language === 'en' ? 'Close Page Header:' : '关闭页面头：' }</span>
        <Button onClick={() => navigate('/copy-to-clipboard-page?hideHead=true')}>{ i18n.language === 'en' ? 'Jump to copy to clipboard' : '跳转到复制到剪贴板' }</Button>
      </div>
      <div className='my-4'>
        <span className='mr-2'>{ i18n.language === 'en' ? 'Close Page Menu:' : '关闭页面菜单：' }</span>
        <Button onClick={() => navigate('/copy-to-clipboard-page?hideMenu=1')}>{ i18n.language === 'en' ? 'Jump to copy to clipboard' : '跳转到复制到剪贴板' }</Button>
      </div>
      <div className='my-4'>
        <span className='mr-2'>{ i18n.language === 'en' ? 'Close Page Footer:' : '关闭页面页脚：' }</span>
        <Button onClick={() => navigate('/copy-to-clipboard-page?hideFooter=1')}>{ i18n.language === 'en' ? 'Jump to copy to clipboard' : '跳转到复制到剪贴板' }</Button>
      </div>
      <div className='my-4'>
        <span className='mr-2'>{ i18n.language === 'en' ? 'Close Page Breadcrumb:' : '关闭页面面包屑导航：' }</span>
        <Button onClick={() => navigate('/copy-to-clipboard-page?hideBreadcrumb=1')}>{ i18n.language === 'en' ? 'Jump to copy to clipboard' : '跳转到复制到剪贴板' }</Button>
      </div>
      <div className='my-4'>
        <span className='mr-2'>{ i18n.language === 'en' ? 'Close Page Tabs:' : '关闭页面Tab导航：' }</span>
        <Button onClick={() => navigate('/copy-to-clipboard-page?hideTabs=1')}>{ i18n.language === 'en' ? 'Jump to copy to clipboard' : '跳转到复制到剪贴板' }</Button>
      </div>
      <div className='my-4'>
        <span className='mr-2'>{ i18n.language === 'en' ? 'Collapse Menu:' : '收起菜单：' }</span>
        <Button onClick={() => navigate('/copy-to-clipboard-page?collapseMenu=1')}>{ i18n.language === 'en' ? 'Jump to copy to clipboard' : '跳转到复制到剪贴板' }</Button>
      </div>
      <div className='my-4'>
        <span className='mr-2'>{ i18n.language === 'en' ? 'Close All:' : '全部关闭：' }</span>
        <Button onClick={() => navigate('/copy-to-clipboard-page?hideTabs=1&hideBreadcrumb=1&hideFooter=1&hideMenu=1&hideHead=1&collapseMenu=1')}>{ i18n.language === 'en' ? 'Jump to copy to clipboard' : '跳转到复制到剪贴板' }</Button>
      </div>
    </div>
  )
}

export default SearchParamsPage
