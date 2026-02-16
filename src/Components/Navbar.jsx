import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdCloseFullscreen } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {

      // scrolled
      const [scrolled, setScrolled] = useState(false)
      useEffect (() =>{
            const handleScroll = ()=>{
                  setScrolled(window.scrollY > 50)
            }
            window.addEventListener('scroll', handleScroll)
            return () => {
                  window.removeEventListener('scroll', handleScroll)
            }
      })

      // active menu
      const [isActive, setIsActive] = useState('home')

      // hamburger
      const [isOpen, setIsOpen] = useState(false)
      const toggleMenu = () => {
            setIsOpen(!isOpen)
      }
  return (
    <section className={`w-full fixed top-0 left-0 z-50 shadow-md backdrop-blur-md border-slate-700 ${scrolled ? '' : 'bg-emerald-600'}`}>
      <main className='container flex justify-between items-center h-14' data-aos="zoom-in" data-aos-duration="1000">
            {/* logo */}
            <Link to='/' className='font-title'>WellnessVista</Link>
            {/* menu */}
            <nav className='py-14 hidden md:block'>
                  <div className='flex justify-between items-center gap-9'>
                        <Link to='/' className='font-text' onClick={()=> setIsActive("home")}>{isActive === "home" ? <hr />: <></>}home</Link>
                        <Link to='/about' className='font-text' onClick={()=> setIsActive("about")}>{isActive === "about" ? <hr />: <></>}about us</Link>
                        <Link to='/services' className='font-text' onClick={()=> setIsActive("services")}>{isActive === "services" ? <hr />: <></>}services</Link>
                        <Link to='/doctors' className='font-text' onClick={()=> setIsActive("doctors")}>{isActive === "doctors" ? <hr />: <></>}doctors</Link>
                        <Link to='/blog' className='font-text' onClick={()=> setIsActive("blog")}>{isActive === "blog" ? <hr />: <></>}blog</Link>
                  </div>
            </nav>

            {/* btn */}
            <div className='flex justify-between items-center gap-3'>
                  {/* contact */}
                  <button className='btn'>contact us</button>
                  {/* hamburger */}
                  <div className='md:hidden text-blue-950 cursor-pointer ml-4'>
                        {
                              isOpen ? <MdCloseFullscreen size={25} onClick={toggleMenu} /> : <GiHamburgerMenu size={25} onClick={toggleMenu} />
                        }
                  </div>
            </div>
      </main>


      {/* mobile menu */}
      <nav  className={`py-14 md:hidden absolute w-full left-0 bg-emerald-600 transition-all duration-300 ${isOpen ? 'top-14' : '-top-[400px]'}`}>
            <div className='flex flex-col justify-center items-center gap-9'>
                  <Link to='/' className='font-text' onClick={()=> setIsActive("home")}>{isActive === "home" ? <hr />: <></>}home</Link>
                  <Link to='/about' className='font-text' onClick={()=> setIsActive("about")}>{isActive === "about" ? <hr />: <></>}about us</Link>
                  <Link to='/services' className='font-text' onClick={()=> setIsActive("services")}>{isActive === "services" ? <hr />: <></>}services</Link>
                  <Link to='/doctors' className='font-text' onClick={()=> setIsActive("doctors")}>{isActive === "doctors" ? <hr />: <></>}doctors</Link>
                  <Link to='/blog' className='font-text' onClick={()=> setIsActive("blog")}>{isActive === "blog" ? <hr />: <></>}blog</Link>
            </div>
            </nav>
    </section>
      )
}

export default Navbar