import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import routeLoadingReducer from './routeLoadingSlice'
import layoutStateReducer from './layoutStateSlice'
import activitysReducer from './activitysSlice'
import layoutTabsReducer from './layoutTabsSlice'
import userReducer from './userSlice'
import watermarkReducer from './watermarkSlice'

const store =  configureStore({
  reducer: {
    theme: themeReducer,
    routeLoading: routeLoadingReducer,
    layoutState: layoutStateReducer,
    activitys: activitysReducer,
    layoutTabs: layoutTabsReducer,
    user: userReducer,
    watermark: watermarkReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
