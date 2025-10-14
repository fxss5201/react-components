import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '../store'
import { setLayoutActiveTab, setLayoutTabs, addLayoutTabs, removeLayoutTabs, clearLayoutTabs } from '../store/layoutTabsSlice'
import { type ChangeLayoutTabsPayloadAction } from '../store/layoutTabsSlice'

export function useLayoutTabs() {
  const layoutTabsState = useSelector((state: RootState) => state.layoutTabs.value)
  const { layoutTabs, layoutActiveTab } = layoutTabsState

  const dispatch = useDispatch<AppDispatch>()
  const setLayoutActiveTabCallback = useCallback((value: string) => dispatch(setLayoutActiveTab(value)), [dispatch])
  const setLayoutTabsCallback = useCallback((value: string[]) => dispatch(setLayoutTabs(value)), [dispatch])
  const addLayoutTabsCallback = useCallback((value: ChangeLayoutTabsPayloadAction) => dispatch(addLayoutTabs(value)), [dispatch])
  const removeLayoutTabsCallback = useCallback((value: ChangeLayoutTabsPayloadAction) => dispatch(removeLayoutTabs(value)), [dispatch])
  const clearLayoutTabsCallback = useCallback(() => dispatch(clearLayoutTabs()), [dispatch])

  return {
    layoutTabs, layoutActiveTab,
    setLayoutActiveTab: setLayoutActiveTabCallback,
    setLayoutTabs: setLayoutTabsCallback,
    addLayoutTabs: addLayoutTabsCallback,
    removeLayoutTabs: removeLayoutTabsCallback,
    clearLayoutTabs: clearLayoutTabsCallback
  }
}
