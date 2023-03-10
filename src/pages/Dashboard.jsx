import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Bill_dash from '../components/Bill_dash'
import Biz_dash from '../components/Biz_dash'
import Contact_dash from '../components/Contact_dash'
import Dash from '../components/dash'
import Dash_sidebar from '../components/Dash_sidebar'
import Refer_dash from '../components/Refer_dash'

const Dashboard = () => {
  return (
    <div className='bg-gray-100 font-Poppins'>
      <Dash_sidebar />
      <Routes>
        <Route path='/dashboard' element={<Dash />} />
        <Route path='/business-profile' element={<Biz_dash />} />
        <Route path='/contact-us' element={<Contact_dash />} />
        <Route path='/billing' element={<Bill_dash />} />
        <Route path='/refer' element={<Refer_dash />} />
      </Routes>
    </div>
  )
}

export default Dashboard