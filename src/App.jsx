import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/home/Homepage'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ShopPage from './pages/shop-page/ShopPage'


function App() {
  const [count, setCount] = useState(0);

  const routes = createBrowserRouter(
    [
      {
        path:"/",
        element: <Homepage/>
      },
      {
        path:"/shop",
        element: <ShopPage/>
      }
    ]
  )

  return (
    <>
     <RouterProvider router={routes} />
    </>
  )
}

export default App
