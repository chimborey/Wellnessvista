import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Doctors = () => {

      // slider settings
      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                  {
                        breakpoint: 1024,
                        settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1,
                              infinite: true,
                              dots: true
                        }
                  },
                  {
                        breakpoint: 768,
                        settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1,
                              infinite: true,
                              dots: true
                        }
                  },
                  {
                        breakpoint: 600,
                        settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              infinite: true,
                              dots: true
                        }
                  },
                  {
                        breakpoint: 480,
                        settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              infinite: true,
                              dots: true
                        }
                  },
            ]
      };
      return (
            <section className="w-full overflow-hidden bg-gray-500 py-14">
                  <div className="container mt-12 flex-col fllex items-center">

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                              <div className='flex flex-col items-start mr-auto'>
                                    <h2 className="font-title text-left" data-aos='zoom-in' data-aos-delay='100'>Our Doctors</h2>
                                    <p className="font-desc text-left max-w-3xl mb-7" data-aos='zoom-in' data-aos-delay='200'>Lorem ipsum dolor sit amet consectetur.</p>
                              </div>
                        </div>

                        <div className='mt-5 slider-container w-full' data-aos='zoom-in' data-aos-delay='300'>
                              <Slider {...settings} className=' md:-translate-x-0'>
                                    <div className='h-[370px] w-full rounded-xl shadow-[rgba(0, 0, 0, 0.24)_0px_3px_8px] mb-2 cursor-pointer bg-slate-700'>
                                          <img src="https://www.yourfreecareertest.com/wp-content/uploads/2016/07/What-does-a-Physician-Doctor-do.jpg" alt="doctor" className='h-56 w-full object-cover rounded-md' />

                                          <div className=' flex flex-col justify-between items-center text-center px-3 py-2'>
                                                <h3 className="text-xl font-bold mt-2">Dr. John Smith</h3>
                                                <p className="text-gray-600">Cardiologist</p>
                                          </div>
                                    </div>

                                    <div className='h-[370px] md:w-full sm:w-[230px] rounded-xl shadow-[rgba(0, 0, 0, 0.24)_0px_3px_8px] mb-2 cursor-pointer bg-slate-700'>
                                          <img src="https://cdn.prod.website-files.com/62d4f06f9c1357a606c3b7ef/65ddf3cdf19abaf5688af2f8_shutterstock_1933145801%20(1).jpg" alt="doctor" className='h-56 w-full object-cover rounded-md' />

                                          <div className=' flex flex-col justify-between items-center text-center px-3 py-2'>
                                                <h3 className="text-xl font-bold mt-2">Dr. Emily Johnson</h3>
                                                <p className="text-gray-600">Pediatrician</p>
                                          </div>
                                    </div>

                                    <div className='h-[370px] rounded-xl shadow-[rgba(0, 0, 0, 0.24)_0px_3px_8px] mb-2 cursor-pointer bg-slate-700'>
                                          <img src="https://yorktownhealthvh.com/wp-content/uploads/2025/05/Is-An-Internist-A-Primary-Care-Physician.jpg" alt="doctor" className='h-56 w-full object-cover rounded-md' />

                                          <div className=' flex flex-col justify-between items-center text-center px-3 py-2'>
                                                <h3 className="text-xl font-bold mt-2">Dr. Michael Brown</h3>
                                                <p className="text-gray-600">Internist</p>
                                          </div>
                                    </div>


                                    <div className='h-[370px] rounded-xl shadow-[rgba(0, 0, 0, 0.24)_0px_3px_8px] mb-2 cursor-pointer bg-slate-700'>
                                          <img src="https://theseniorsoup.com/wp-content/uploads/2023/05/blog_01_16_pcp.webp" alt="doctor" className='h-56 w-full object-cover rounded-md' />

                                          <div className=' flex flex-col justify-between items-center text-center px-3 py-2'>
                                                <h3 className="text-xl font-bold mt-2">Dr. Sarah Williams</h3>
                                                <p className="text-gray-600">Family Physician</p>
                                          </div>
                                    </div>

                                    <div className='h-[370px] rounded-xl shadow-[rgba(0, 0, 0, 0.24)_0px_3px_8px] mb-2 cursor-pointer bg-slate-700'>
                                          <img src="https://www.shutterstock.com/image-photo/black-man-doctor-tablet-medical-260nw-2545848829.jpg" alt="doctor" className='h-56 w-full object-cover rounded-md' />

                                          <div className=' flex flex-col justify-between items-center text-center px-3 py-2'>
                                                <h3 className="text-xl font-bold mt-2">Dr. Robert Davis</h3>
                                                <p className="text-gray-600">Cardiologist</p>
                                          </div>
                                    </div>


                                    <div className='h-[370px] rounded-xl shadow-[rgba(0, 0, 0, 0.24)_0px_3px_8px] mb-2 cursor-pointer bg-slate-700'>
                                          <img src="https://cff2.earth.com/uploads/2024/04/23090320/Patients-were-less-likely-to-need-readmission-to-the-hospital-within-30-days-of-discharge-when-treated-by-a-female-doctor-1400x850.jpeg" alt="doctor" className='h-56 w-full object-cover rounded-md' />

                                          <div className=' flex flex-col justify-between items-center text-center px-3 py-2'>
                                                <h3 className="text-xl font-bold mt-2">Dr. Emily Johnson</h3>
                                                <p className="text-gray-600">Neurologist</p>
                                          </div>
                                    </div>


                                    <div className='h-[370px] rounded-xl shadow-[rgba(0, 0, 0, 0.24)_0px_3px_8px] mb-2 cursor-pointer bg-slate-700'>
                                          <img src="https://media.istockphoto.com/id/2206891026/photo/smiling-bald-doctor-wearing-white-coat-and-stethoscope.jpg?s=612x612&w=0&k=20&c=nD7XRajDLl2vsaz9kgi-qPVG_g91ELimHUa7z86YFgU=" alt="doctor" className='h-56 w-full object-cover rounded-md' />

                                          <div className=' flex flex-col justify-between items-center text-center px-3 py-2'>
                                                <h3 className="text-xl font-bold mt-2">Dr. Michael Brown</h3>
                                                <p className="text-gray-600">Pediatrician</p>
                                          </div>
                                    </div>

                                    <div className='h-[370px] rounded-xl shadow-[rgba(0, 0, 0, 0.24)_0px_3px_8px] mb-2 cursor-pointer bg-slate-700'>
                                          <img src="https://media.istockphoto.com/id/1222195932/photo/friendly-doctor-asking-about-patients-health-using-mobile-phone.jpg?s=612x612&w=0&k=20&c=1iymES3a4bUi9sMGqnryY0ssR2O9eG3jc_cmenLr8p8=" alt="doctor" className='h-56 w-full object-cover rounded-md' />

                                          <div className=' flex flex-col justify-between items-center text-center px-3 py-2'>
                                                <h3 className="text-xl font-bold mt-2">Dr. John Smith</h3>
                                                <p className="text-gray-600">Cardiologist</p>
                                          </div>
                                    </div>
                              </Slider>
                        </div>
                  </div>
            </section>
      )
}

export default Doctors