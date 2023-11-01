
// React imports
import { BrowserRouter } from 'react-router-dom'

// Routes
import AppRoutes from './AppRoutes'

// General Styles
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
