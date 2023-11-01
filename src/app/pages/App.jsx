
// React imports
import { BrowserRouter } from 'react-router-dom'

// Routes
import AppRoutes from './AppRoutes'

// Components
import Navbar from '../components/Navbar'

// General Styles
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
