import React from 'react'
import H1 from '../assets/h1.jpg'
const Hero = () => {
  return (
    <section className="w-full relative h-screen mt-12 py-14"  style={{backgroundImage: `url(${H1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} data-aos= 'zoom-in' data-aos-delay='100'>
      <main className='container flex flex-col gap-7 text-left justify-center items-start h-full'>
            <h3 className='font-title z-10' data-aos= 'zoom-in' data-aos-delay='200'>empowering health choices for a vibrant life you r trusted...</h3>
            <p className='font-desc z-10' data-aos= 'zoom-in' data-aos-delay='300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, exercitationem. Doloremque est ut pariatur quos veritatis minima recusandae illo aut ad commodi eum suscipit, eos enim odio numquam nisi repudiandae odit. Ea distinctio nam quidem iste repellat excepturi esse quaerat explicabo, debitis quisquam consectetur sapiente magni assumenda.</p>
            <button className='btn z-10' data-aos= 'zoom-in' data-aos-delay='400'>see services</button>
      </main>

      <div className='dark '></div>
    </section>
  )
}

export default Hero