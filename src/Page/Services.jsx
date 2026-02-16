import React from 'react'
import { GrTest } from "react-icons/gr";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartPulse } from "react-icons/fa6";
const Services = () => {
  return (
    <section className="w-full overflow-hidden bg-gray-500 py-14">
      <div className="container mx-auto px-4 mt-12">
        <h2 className="font-title text-left mb-8" data-aos='zoom-in' data-aos-delay='100'>Our Services</h2>
        <p className="font-desc text-left max-w-3xl mb-7" data-aos='zoom-in' data-aos-delay='200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum impedit provident voluptates blanditiis ipsum illo. Odio, ad? Placeat rerum pariatur eaque ipsam natus, rem quae esse atque deleniti iste neque corrupti vitae amet odit, ad ipsum eligendi, accusantium minus voluptatum nemo. Consequuntur facere quia rem consectetur!</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-9'>
          {/* service 1 */}
          <div data-aos='fade-up' data-aos-delay='200'>
            <div className='bg-slate-950 p-6 rounded-lg shadow-lg hover:scale-105 ease-linear duration-300'>
              <GrTest className='text-4xl mb-4 text-red-500 text-center bg-green-300 rounded-full py-2 px-2 mx-auto' />
              <h3 className="font-title mb-4 mx-auto text-center">lab test</h3>
              <p className="font-desc text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum impedit provident voluptates blanditiis ipsum illo. Odio, ad? Placeat rerum pariatur eaque ipsam natus, rem quae esse atque deleniti iste neque corrupti vitae amet odit, ad ipsum eligendi, accusantium minus voluptatum nemo. Consequuntur facere quia rem consectetur!</p>
              <button className='text-teal-300 mt-4 mx-auto w-full'>Learn more</button>
            </div>
          </div>

          {/* service 2 */}
          <div data-aos='fade-up' data-aos-delay='300'>
            <div className='bg-slate-950 p-6 rounded-lg shadow-lg hover:scale-105 ease-linear duration-300'>
              <MdHealthAndSafety className='text-4xl mb-4 text-red-500 text-center bg-green-300 rounded-full py-2 px-2 mx-auto' />
              <h3 className="font-title mb-4 mx-auto text-center">health check</h3>
              <p className="font-desc text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum impedit provident voluptates blanditiis ipsum illo. Odio, ad? Placeat rerum pariatur eaque ipsam natus, rem quae esse atque deleniti iste neque corrupti vitae amet odit, ad ipsum eligendi, accusantium minus voluptatum nemo. Consequuntur facere quia rem consectetur!</p>
              <button className='text-teal-300 mt-4 mx-auto w-full'>Learn more</button>
            </div>
          </div>

          {/* service 3 */}
          <div data-aos='fade-up' data-aos-delay='400'>
            <div className='bg-slate-950 p-6 rounded-lg shadow-lg hover:scale-105 ease-linear duration-300'>
              <FaHeartPulse className='text-4xl mb-4 text-red-500 text-center bg-green-300 rounded-full py-2 px-2 mx-auto' />
              <h3 className="font-title mb-4 mx-auto text-center">heart health</h3>
              <p className="font-desc text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum impedit provident voluptates blanditiis ipsum illo. Odio, ad? Placeat rerum pariatur eaque ipsam natus, rem quae esse atque deleniti iste neque corrupti vitae amet odit, ad ipsum eligendi, accusantium minus voluptatum nemo. Consequuntur facere quia rem consectetur!</p>
              <button className='text-teal-300 mt-4 mx-auto w-full'>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services