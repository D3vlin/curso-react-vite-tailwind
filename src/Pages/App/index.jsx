import { useContext } from 'react'
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { Signin } from '../Signin'
import { Navbar } from '../../Components/Navbar'
import { ShoppingCartProvider, initializeLocalStorage, ShoppingCartContext } from '../../Context'
import './App.css'

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext)

  //SignOut
  const parsedSignOut = JSON.parse(localStorage.getItem('sign-out'))
  const isUserSignOut = context.signOut || parsedSignOut

  //Account
  const parsedAccount = JSON.parse(localStorage.getItem('account'))
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  let routes = useRoutes([
    { path: '/', element: (hasUserAnAccount && !isUserSignOut) ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/curso-react-vite-tailwind', element: (hasUserAnAccount && !isUserSignOut) ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/clothes', element: (hasUserAnAccount && !isUserSignOut) ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/electronics', element: (hasUserAnAccount && !isUserSignOut) ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/furnitures', element: (hasUserAnAccount && !isUserSignOut) ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/toys', element: (hasUserAnAccount && !isUserSignOut) ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/others', element: (hasUserAnAccount && !isUserSignOut) ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/:last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <Signin /> },
    { path: '/*', element: <NotFound /> }
  ])

  return (
    routes
  )
}

const App = () => {
initializeLocalStorage()

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
