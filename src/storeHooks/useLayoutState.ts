import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '../store'
import { changeHeadShow, changeMenuShow, changeMenuCollapsed, changeFooterShow, changeBreadcrumbShow, changeTabsShow } from '../store/layoutStateSlice'

export function useLayoutState() {
  const layoutState = useSelector((state: RootState) => state.layoutState.value)
  const { footerShow, headShow, menuShow, menuCollapsed, breadcrumbShow, tabsShow } = layoutState

  const dispatch = useDispatch<AppDispatch>()
  const changeHeadShowCallback = (value: boolean) => dispatch(changeHeadShow(value))
  const changeMenuShowCallback = (value: boolean) => dispatch(changeMenuShow(value))
  const changeMenuCollapsedCallback = (value: boolean) => dispatch(changeMenuCollapsed(value))
  const changeFooterShowCallback = (value: boolean) => dispatch(changeFooterShow(value))
  const changeBreadcrumbShowCallback = (value: boolean) => dispatch(changeBreadcrumbShow(value))
  const changeTabsShowCallback = (value: boolean) => dispatch(changeTabsShow(value))

  return {
    headShow, menuShow, menuCollapsed, footerShow, breadcrumbShow, tabsShow,
    changeHeadShow: changeHeadShowCallback,
    changeMenuShow: changeMenuShowCallback,
    changeMenuCollapsed: changeMenuCollapsedCallback,
    changeFooterShow: changeFooterShowCallback,
    changeBreadcrumbShow: changeBreadcrumbShowCallback,
    changeTabsShow: changeTabsShowCallback,
  }
}
