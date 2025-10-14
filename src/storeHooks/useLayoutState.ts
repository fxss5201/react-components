import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '../store'
import { changeHeadShow, changeMenuShow, changeMenuCollapsed, changeFooterShow, changeBreadcrumbShow, changeTabsShow } from '../store/layoutStateSlice'

export function useLayoutState() {
  const layoutState = useSelector((state: RootState) => state.layoutState.value)
  const { footerShow, headShow, menuShow, menuCollapsed, breadcrumbShow, tabsShow } = layoutState

  const dispatch = useDispatch<AppDispatch>()
  const changeHeadShowCallback = useCallback((value: boolean) => dispatch(changeHeadShow(value)), [dispatch])
  const changeMenuShowCallback = useCallback((value: boolean) => dispatch(changeMenuShow(value)), [dispatch])
  const changeMenuCollapsedCallback = useCallback((value: boolean) => dispatch(changeMenuCollapsed(value)), [dispatch])
  const changeFooterShowCallback = useCallback((value: boolean) => dispatch(changeFooterShow(value)), [dispatch])
  const changeBreadcrumbShowCallback = useCallback((value: boolean) => dispatch(changeBreadcrumbShow(value)), [dispatch])
  const changeTabsShowCallback = useCallback((value: boolean) => dispatch(changeTabsShow(value)), [dispatch])

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
