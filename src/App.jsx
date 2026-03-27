import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Home from './Page/Home'
import Header from './Page/Header'
import Footer from './Page/Footer'
import About from './Page/About'
import Services from './Page/Services'
import Doctors from './Page/Doctors'
import Blog from './Page/Blog'
const App = () => {
  // AOS
  useEffect (() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
      <SpeedInsights />
    </BrowserRouter>
  )
}

export default App