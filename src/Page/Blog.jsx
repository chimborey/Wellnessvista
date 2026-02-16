import React from 'react'

const Blog = () => {
      return (
            <section className="w-full py-14 overflow-hidden bg-green-900">
                  <div className="container flex-col flex items-center mt-12">
                        {/*  */}
                        <div className='flex flex-col justify-start items-start text-left mr-auto'>
                              <h2 className="text-3xl font-bold mb-8">Our Blog</h2>
                              <p className=" text-gray-300 max-w-2xl">Stay updated with the latest health tips, news, and insights from our experts.</p>
                        </div>


                        {/*  */}

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-7 cursor-pointer'>
                              <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-110 duration-300 ease-linear' data-aos="fade-right" data-aos-delay="100">
                                    <img src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/140396060InternationalMedicalDoctor.jpg=ws1280x960" alt="Blog Post 1" className='w-full md:h-48 object-cover hover:scale-110 duration-300 ease-linear' />
                                    <div className='p-4'>
                                          <h3 className='text-xl font-semibold mb-2'>The Importance of Mental Health in Daily Life</h3>
                                          <p className='text-gray-300'>Learn how maintaining good mental health can positively impact your daily routine and overall quality of life.</p>
                                    </div>
                              </div>

                              <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-110 duration-300 ease-linear' data-aos="fade-up" data-aos-delay="200">
                                    <img src="https://www.doctors-hospital.net/_next/image?url=https%3A%2F%2Fwww.hcadam.com%2Fapi%2Fpublic%2Fcontent%2Fweb-p-9b71b87f06ab4287afba5217c20df182%3Fv%3Da4634a84&w=3840&q=75" alt="Blog Post 1" className='w-full md:h-48 object-cover hover:scale-110 duration-300 ease-linear' />
                                    <div className='p-4'>
                                          <h3 className='text-xl font-semibold mb-2'>Nutrition and Its Impact on Physical Health</h3>
                                          <p className='text-gray-300'>Discover how a balanced diet contributes to better physical health and overall well-being.</p>
                                    </div>
                              </div>


                              <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-110 duration-300 ease-linear' data-aos="fade-left" data-aos-delay="300">
                                    <img src="https://www.keckmedicine.org/wp-content/uploads/2021/11/Medical-doctors-and-nurse-practitioners-discuss-paperwork-in-a-hallway.jpg" alt="Blog Post 1" className='w-full md:h-48 object-cover hover:scale-110 duration-300 ease-linear' />
                                    <div className='p-4'>
                                          <h3 className='text-xl font-semibold mb-2'>The Role of Sleep in Maintaining Good Health</h3>
                                          <p className='text-gray-300'>Learn how adequate sleep is essential for physical and mental well-being, and how poor sleep can lead to various health issues.</p>
                                    </div>
                              </div>


                              <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-110 duration-300 ease-linear' data-aos="fade-right" data-aos-delay="400">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTDTV9ryL_jgCNUmwZoVpcFSdJey2ebokSg&s" alt="Blog Post 1" className='w-full md:h-48 object-cover hover:scale-110 duration-300 ease-linear' />
                                    <div className='p-4'>
                                          <h3 className='text-xl font-semibold mb-2'>The Importance of Regular Exercise</h3>
                                          <p className='text-gray-300'>Regular exercise is crucial for maintaining physical and mental health. It helps reduce the risk of chronic diseases, improves mood, and boosts energy levels.</p>
                                    </div>
                              </div>

                              <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-110 duration-300 ease-linear' data-aos="fade-up" data-aos-delay="500">
                                    <img src="https://www.umhs-sk.org/hubfs/Doctors%20rushing%20to%20emergency%20room.jpeg" alt="Blog Post 1" className='w-full md:h-48 object-cover hover:scale-110 duration-300 ease-linear' />
                                    <div className='p-4'>
                                          <h3 className='text-xl font-semibold mb-2'>The Role of Healthcare in Preventing Illness</h3>
                                          <p className='text-gray-300'>Accessing quality healthcare services regularly is essential for preventing illnesses and maintaining overall health. Early detection and timely treatment of health issues can significantly improve outcomes and reduce the risk of complications.</p>
                                    </div>
                              </div>


                              <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-110 duration-300 ease-linear' data-aos="fade-left" data-aos-delay="500">
                                    <img src="https://www.umhs-sk.org/hs-fs/hubfs/emergency-room-doctor-with-patient.jpg?width=500&height=345&name=emergency-room-doctor-with-patient.jpg" alt="Blog Post 1" className='w-full md:h-48 object-cover hover:scale-110 duration-300 ease-linear' />
                                    <div className='p-4'>
                                          <h3 className='text-xl font-semibold mb-2'>10 Tips for a Healthier Lifestyle</h3>
                                          <p className='text-gray-300'>Adopting a healthy lifestyle involves making conscious choices that support physical and mental well-being. Here are 10 practical tips to help you live a healthier life:</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default Blog