import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '../store'
import { changeHeadShow, changeMenuShow, changeMenuCollapsed, changeFooterShow, changeBreadcrumbShow } from '../store/layoutStateSlice'

export function useLayoutState() {
  const layoutState = useSelector((state: RootState) => state.layoutState.value)
  const { footerShow, headShow, menuShow, menuCollapsed, breadcrumbShow } = layoutState

  const dispatch = useDispatch<AppDispatch>()
  const changeHeadShowCallback = useCallback((value: boolean) => dispatch(changeHeadShow(value)), [dispatch])
  const changeMenuShowCallback = useCallback((value: boolean) => dispatch(changeMenuShow(value)), [dispatch])
  const changeMenuCollapsedCallback = useCallback((value: boolean) => dispatch(changeMenuCollapsed(value)), [dispatch])
  const changeFooterShowCallback = useCallback((value: boolean) => dispatch(changeFooterShow(value)), [dispatch])
  const changeBreadcrumbShowCallback = useCallback((value: boolean) => dispatch(changeBreadcrumbShow(value)), [dispatch])

  return {
    headShow, menuShow, menuCollapsed, footerShow, breadcrumbShow,
    changeHeadShow: changeHeadShowCallback,
    changeMenuShow: changeMenuShowCallback,
    changeMenuCollapsed: changeMenuCollapsedCallback,
    changeFooterShow: changeFooterShowCallback,
    changeBreadcrumbShow: changeBreadcrumbShowCallback,
  }
}
