import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type activitysInitialState = {
  value: {
    layoutTabs: string[]
    layoutActiveTab: string
  }
}

export type ChangeLayoutTabsPayloadAction = string | {
  value: string
  activeTab: string
}

const initialState: activitysInitialState = {
  value: {
    layoutTabs: [],
    layoutActiveTab: ''
  }
}

export const layoutTabsSlice = createSlice({
  name: 'layoutTabs',
  initialState,
  reducers: {
    setLayoutActiveTab: (state, action: PayloadAction<string>) => {
      state.value.layoutActiveTab = action.payload
    },
    setLayoutTabs: (state, action: PayloadAction<string[]>) => {
      state.value.layoutTabs = action.payload
    },
    // 添加 layoutTabs 项，支持字符串和对象 {value: string, activeTab: string} ，字符串时只会添加，不会修改 layoutActiveTab，对象时会先添加 value 项，activeTab 存在时再修改 layoutActiveTab 为 activeTab
    addLayoutTabs: (state, action: PayloadAction<ChangeLayoutTabsPayloadAction>) => {
      const payload = action.payload
      if (typeof payload === 'string') {
        if (!state.value.layoutTabs.includes(payload)) {
          state.value.layoutTabs.push(payload)
        }
      } else {
        if (!state.value.layoutTabs.includes(payload.value)) {
          const oldActiveTab = state.value.layoutActiveTab
          const oldActiveTabIndex = state.value.layoutTabs.indexOf(oldActiveTab)
          // 插入到旧 activeTab 后面
          state.value.layoutTabs.splice(oldActiveTabIndex + 1, 0, payload.value)
        }
        if (payload.activeTab) {
          state.value.layoutActiveTab = payload.activeTab
        }
      }
    },
    // 删除 layoutTabs 项，支持字符串和对象 {value: string, activeTab: string} ，字符串时只会删除，不会修改 layoutActiveTab，对象时会先删除 value 项，activeTab 存在时再修改 layoutActiveTab 为 activeTab
    removeLayoutTabs: (state, action: PayloadAction<ChangeLayoutTabsPayloadAction>) => {
      const payload = action.payload
      if (typeof payload === 'string') {
        state.value.layoutTabs = state.value.layoutTabs.filter(item => item !== payload)
      } else {
        state.value.layoutTabs = state.value.layoutTabs.filter(item => item !== payload.value)
        if (payload.activeTab) {
          state.value.layoutActiveTab = payload.activeTab
        }
      }
    },
    clearLayoutTabs: (state) => {
      state.value.layoutTabs = []
      state.value.layoutActiveTab = ''
    }
  }
})

export const { setLayoutActiveTab, setLayoutTabs, addLayoutTabs, removeLayoutTabs, clearLayoutTabs } = layoutTabsSlice.actions

export default layoutTabsSlice.reducer
