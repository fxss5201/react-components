import { configureStore } from '@reduxjs/toolkit'
import config from '@/config'
import router from '@/router'
import themeReducer from './themeSlice'
import routeLoadingReducer from './routeLoadingSlice'
import layoutStateReducer from './layoutStateSlice'
import activitysReducer from './activitysSlice'
import layoutTabsReducer from './layoutTabsSlice'
import userReducer, { changeUserInfo, onlyChangeUserInfo, type UserState } from './userSlice'
import watermarkReducer from './watermarkSlice'
import systemSetReducer from './systemSetSlice'

const store =  configureStore({
  reducer: {
    theme: themeReducer,
    routeLoading: routeLoadingReducer,
    layoutState: layoutStateReducer,
    activitys: activitysReducer,
    layoutTabs: layoutTabsReducer,
    user: userReducer,
    watermark: watermarkReducer,
    systemSet: systemSetReducer,
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const BASE_URL = import.meta.env.BASE_URL
export const loginFn = (userInfo: UserState['value']) => {
  localStorage.setItem(config.loginLocalStorageKey, JSON.stringify(userInfo))
  store.dispatch(changeUserInfo(userInfo))
  router.navigate('/')
}
export const onlyLoginFn = (userInfo: UserState['value']) => {
  store.dispatch(onlyChangeUserInfo(userInfo))
  const pathname = window.location.pathname
  if (pathname === BASE_URL + 'login') {
    router.navigate('/')
  }
}
export const logoutFn = () => {
  localStorage.removeItem(config.loginLocalStorageKey)
  store.dispatch(changeUserInfo({ id: '', name: '', img: undefined, badge: 0, permissionList: [] }))
  router.navigate('/login')
}
export const onlyLogoutFn = () => {
  store.dispatch(onlyChangeUserInfo({ id: '', name: '', img: undefined, badge: 0, permissionList: [] }))
  const pathname = window.location.pathname
  const whiteList = config.whiteList.map(x => BASE_URL + x.replace(/^\//, ''))
  if (!whiteList.includes(pathname)) {
    router.navigate('/login')
  }
}

