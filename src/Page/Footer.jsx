import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <section className="w-full py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">WellnessVista</h2>
            <p className="text-gray-400">Your trusted partner in health and wellness.</p>
          </div>

          <div className='flex justify-between items-center flex-col'>
            <h2 className="text-lg font-semibold">About Us</h2>
            <div className='flex justify-between flex-col items-start mt-2'>
              <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">About</Link>
              <Link to="/services" className="text-gray-300 hover:text-green-400 transition-colors">Services</Link>
              <Link to="/doctors" className="text-gray-300 hover:text-green-400 transition-colors">Doctors</Link>
              <Link to="/blog" className="text-gray-300 hover:text-green-400 transition-colors">Blog</Link>
            </div>
          </div>


          <div>
            <h2 className="text-lg font-semibold">Services</h2>
            <ul className="mt-2 text-gray-300 capitalize">
              <li className="mb-1 hover:text-green-400 transition-colors cursor-pointer">lab test</li>
              <li className="mb-1 hover:text-green-400 transition-colors cursor-pointer">health check</li>
              <li className="mb-1 hover:text-green-400 transition-colors cursor-pointer">heart health</li>
            </ul>
          </div>


          <div>
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="mt-2 text-gray-300">123 Wellness St, Healthy City, HC 12345</p>
            <p className="mt-1 text-gray-300">Email:
              <a href="mailto:contact@wellnessvista.com" className="text-green-400 hover:underline"> contact@wellnessvista.com</a>
            </p>
            <p className="mt-1 text-gray-300">Phone: <a href="tel:+1234567890" className="text-green-400 hover:underline">+1 (234) 567-890</a></p>



          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400 transition-colors">Facebook</a>
            <a href="#" className="hover:text-green-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-green-400 transition-colors">Instagram</a>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} WellnessVista. All rights reserved.
        </div>
      </div>
    </section>
  )
}

export default Footer