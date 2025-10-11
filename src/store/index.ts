import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import routeLoadingReducer from './routeLoadingSlice'
import layoutStateReducer from './layoutStateSlice'

const store =  configureStore({
  reducer: {
    theme: themeReducer,
    routeLoading: routeLoadingReducer,
    layoutState: layoutStateReducer,
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
