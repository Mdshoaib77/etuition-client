import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Pages/Shared/Footer'
import Navbar from '../Pages/Shared/Navbar'

const RootLayouts = () => {
  return (
       <div>
       {/* <div className='max-w-6xl mx-auto px-4'> */}
       {/* <div className='max-w-7xl mx-auto'> */}
        <Navbar/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  )
}

export default RootLayouts
