import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '../store'
import { setLayoutActiveTab, setLayoutTabs, addLayoutTabs, removeLayoutTabs, clearLayoutTabs } from '../store/layoutTabsSlice'
import { type ChangeLayoutTabsPayloadAction } from '../store/layoutTabsSlice'

export function useLayoutTabs() {
  const layoutTabsState = useSelector((state: RootState) => state.layoutTabs.value)
  const { layoutTabs, layoutActiveTab } = layoutTabsState

  const dispatch = useDispatch<AppDispatch>()
  const setLayoutActiveTabCallback = (value: string) => dispatch(setLayoutActiveTab(value))
  const setLayoutTabsCallback = (value: string[]) => dispatch(setLayoutTabs(value))
  const addLayoutTabsCallback = (value: ChangeLayoutTabsPayloadAction) => dispatch(addLayoutTabs(value))
  const removeLayoutTabsCallback = (value: ChangeLayoutTabsPayloadAction) => dispatch(removeLayoutTabs(value))
  const clearLayoutTabsCallback = () => dispatch(clearLayoutTabs())

  return {
    layoutTabs, layoutActiveTab,
    setLayoutActiveTab: setLayoutActiveTabCallback,
    setLayoutTabs: setLayoutTabsCallback,
    addLayoutTabs: addLayoutTabsCallback,
    removeLayoutTabs: removeLayoutTabsCallback,
    clearLayoutTabs: clearLayoutTabsCallback
  }
}
