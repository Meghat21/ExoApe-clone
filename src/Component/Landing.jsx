import React from 'react'

function Landing() {
  return (
    <div className='w-full h-[150vh] sm:h-[250vh] relative'>
      <div className="picture w-full h-full">
        <img src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" className='w-full h-full object-cover' alt="" />
      </div>
      <div className="w-full absolute top-0">
      <div className="text max-w-screen-xl top-0 h-full mx-auto px-5 sm:px-10 absolute text-white">
      <div className="para mt-72 sm:mt-[35rem]">
        <p className='text-white text-md sm:text-3xl'>GLobal digital design studio partening</p>
        <p className='text-white text-md sm:text-3xl'>with brands and bussiness that create</p>
        <p className='text-white text-md sm:text-3xl'>expectional and experience where people</p>
        <p className='text-white text-md sm:text-3xl'>live , work and unwind</p>
      </div>
      <div className="headings mt-5 sm:mt-10">
        <h1 className='text-6xl sm:text-[19rem] font-light leading-none tracking-tighter'>Digital</h1> 
        <h1 className='text-6xl sm:text-[19rem] font-light leading-none tracking-tighter'>Design</h1>  
        <h1 className='text-6xl sm:text-[19rem] font-light leading-none tracking-tighter'>Experience</h1>  
      </div>
        <div className="para2 mt-20 sm:w-1/3">
            <p className='sm:text-xl'>We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. Unforgettable journeys start with a click.</p>
            <a href="" className='border-b-[.3px] sm:text-xl sm:border-b-[1px] border-zinc-100 pb-1 mt-10 inline-block'>The Studio</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Landing
