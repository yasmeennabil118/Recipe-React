import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  )
}
