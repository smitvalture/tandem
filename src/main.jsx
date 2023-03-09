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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
    
    
  </React.StrictMode>,
)
