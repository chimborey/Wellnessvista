import React from 'react'
import A1 from '../assets/a1.jpg'
const About = () => {
      return (
            <section className="w-full overflow-hidden bg-gray-100 py-14">
                  <div className="container mx-auto px-4 mt-12">
                        <h2 className="font-title text-left mb-8" data-aos= 'zoom-in' data-aos-delay='100'>About Us</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>
                              {/* about-left */}
                              <div className='flex flex-col justify-between items-start gap-4' data-aos= 'fade-right' data-aos-delay='200'>
                                    <p className="font-desc text-left max-w-3xl">
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum impedit provident voluptates blanditiis ipsum illo. Odio, ad? Placeat rerum pariatur eaque ipsam natus, rem quae esse atque deleniti iste neque corrupti vitae amet odit, ad ipsum eligendi, accusantium minus voluptatum nemo. Consequuntur facere quia rem consectetur!
                                    </p>

                                    <p className="font-desc text-left max-w-3xl">
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum impedit provident voluptates blanditiis ipsum illo. Odio, ad? Placeat rerum pariatur eaque ipsam natus, rem quae esse atque deleniti iste neque corrupti vitae amet odit, ad ipsum eligendi, accusantium minus voluptatum nemo. Consequuntur facere quia rem consectetur!
                                    </p>

                                    <p className="font-desc text-left max-w-3xl">
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum impedit provident voluptates blanditiis ipsum illo. Odio, ad? Placeat rerum pariatur eaque ipsam natus, rem quae esse atque deleniti iste neque corrupti vitae amet odit, ad ipsum eligendi, accusantium minus voluptatum nemo. Consequuntur facere quia rem consectetur!
                                    </p>
                              </div>

                              {/* about-right */}
                              <div className='flex justify-center items-center' data-aos= 'fade-left' data-aos-delay='300'>
                                    <img src={A1} alt="About Us" className="w-full h-full object-cover rounded-lg shadow-lg" />
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default About