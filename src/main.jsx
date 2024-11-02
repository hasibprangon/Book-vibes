import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Default from './components/Default/Default.jsx'
import Error from './components/Error/Error.jsx'
import DashBoard from './components/DashBoard/DashBoard.jsx'
import Home from './components/Home/Home.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Default></Default>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/dashboard',
        element:<DashBoard></DashBoard>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
    router={router}
    ></RouterProvider>
  </StrictMode>,
)
