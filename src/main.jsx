import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Landing from './pages/Landing'
import Demo from './components/Demo'
import Mission from './components/Mission'
import ContactUs from './components/ContactUs'
import Dashboard from './pages/Dashboard'
import Dash from './components/dash'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
    
    
  </React.StrictMode>,
)
