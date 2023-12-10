import { useRoutes } from "react-router-dom"

// Pages
// > Auth
import SignIn from "./signin"

// > General
import Home from "./home"
import NotFound from "./not-found"
import MyAccount from "./my-account"
import MyOrder from "./my-order"
import MyOrders from "./my-orders"

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/category/:category", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order/:id", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "*", element: <NotFound /> },
  ])

  return routes
}

export default AppRoutes
