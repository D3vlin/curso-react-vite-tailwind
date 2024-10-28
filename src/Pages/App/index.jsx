import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { Signin } from '../Signin'
import { Navbar } from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/myaccount', element: <MyAccount /> },
    { path: '/myorder', element: <MyOrder /> },
    { path: '/myorders', element: <MyOrders /> },
    { path: '/signin', element: <Signin /> },
    { path: '/*', element: <NotFound /> }
  ])

  return (
    routes
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App
