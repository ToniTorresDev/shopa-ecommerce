
// React imports
import { BrowserRouter } from 'react-router-dom'

// Routes
import AppRoutes from './AppRoutes'

// Components
import Navbar from '../components/Navbar'

import { ShoppingCartProvider } from '../context'

// General Styles
import './App.css'

// Components
import Cart from '../components/Cart'

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Cart />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
