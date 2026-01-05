import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './locales/index'
import { RouterProvider } from 'react-router/dom'
import router from './router'
import store from './store/index'
import { Provider } from 'react-redux'
import { setupProdMockServer } from './mockProdServer'
import './TabCommunicationOnMessage'

if (import.meta.env.PROD) setupProdMockServer()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
