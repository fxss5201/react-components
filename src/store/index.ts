import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import routeLoadingReducer from './routeLoadingSlice'

const store =  configureStore({
  reducer: {
    theme: themeReducer,
    routeLoading: routeLoadingReducer,
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
