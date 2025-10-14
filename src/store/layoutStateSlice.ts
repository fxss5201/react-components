import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type LayoutState = {
  value: {
    // 是否显示头部
    headShow: boolean
    // 是否显示菜单
    menuShow: boolean
    // 是否折叠菜单
    menuCollapsed: boolean
    // 是否显示Footer
    footerShow: boolean
    // 是否显示面包屑导航
    breadcrumbShow: boolean
    // 是否显示标签页
    tabsShow: boolean
  }
}

const initialState: LayoutState = {
  value: {
    headShow: true,
    menuShow: true,
    menuCollapsed: false,
    footerShow: true,
    breadcrumbShow: true,
    tabsShow: true,
  }
}

export const layoutStateSlice = createSlice({
  name: 'layoutState',
  initialState,
  reducers: {
    changeHeadShow: (state, action: PayloadAction<boolean>) => {
      state.value.headShow = action.payload
    },
    changeMenuShow: (state, action: PayloadAction<boolean>) => {
      state.value.menuShow = action.payload
    },
    changeMenuCollapsed: (state, action: PayloadAction<boolean>) => {
      state.value.menuCollapsed = action.payload
    },
    changeFooterShow: (state, action: PayloadAction<boolean>) => {
      state.value.footerShow = action.payload
    },
    changeBreadcrumbShow: (state, action: PayloadAction<boolean>) => {
      state.value.breadcrumbShow = action.payload
    },
    changeTabsShow: (state, action: PayloadAction<boolean>) => {
      state.value.tabsShow = action.payload
    },
  }
})

export const { changeHeadShow, changeMenuShow, changeMenuCollapsed, changeFooterShow, changeBreadcrumbShow, changeTabsShow } = layoutStateSlice.actions

export default layoutStateSlice.reducer