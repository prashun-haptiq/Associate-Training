import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
// import Mission from '../components/Mission'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import SimpleSlider from '../components/SimpleSlider';

const MainLayout = () => {
  return (
    <div>
      <Header/>
       <Navbar/>
    <div>
        <Outlet/>
        <Footer/>
        
    </div>
    </div>
  )
}

export default MainLayout
