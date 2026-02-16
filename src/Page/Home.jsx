import React from 'react'
import Hero from '../Components/Hero'
import About from './About'
import Services from './Services'
import Doctors from './Doctors'
import Blog from './Blog'


const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Blog />
    </main>
  )
}

export default Home