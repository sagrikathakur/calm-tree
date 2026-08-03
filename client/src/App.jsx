import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Service from './pages/Service'
import WhyUs from './pages/WhyUs'
import MyJournal from './pages/MyJournal'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import DailyReminder from './pages/DailyReminder'
import MoodTracker from './pages/MoodTracker'
import PlayList from './pages/PlayList'
import SafetyProduct from './pages/SafetyProduct'
import ToDoList from './pages/ToDoList'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Login from './pages/Login'

const App = () => {
  return (
    <div className='min-h-screen bg-emerald-50/20 text-gray-800'>
      <Navbar />

      {/* setting up the routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<Service />} />
        <Route path='/why-us' element={<WhyUs />} />
        <Route path='/journal' element={<MyJournal />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/daily-reminder' element={<DailyReminder />} />
        <Route path='/mood-tracker' element={<MoodTracker />} />
        <Route path='/playlist' element={<PlayList />} />
        <Route path='/safety-product' element={<SafetyProduct />} />
        <Route path='/todo-list' element={<ToDoList />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<div className='p-8 text-center text-emerald-900 font-semibold text-xl'>404 - Page Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App