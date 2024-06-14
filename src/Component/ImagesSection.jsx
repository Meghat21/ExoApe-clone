import React from 'react'

function ImagesSection() {
  return (
    <div className='w-full h-[70vh] bg-white flex items-center justify-center overflow-hidden'>
    <div className="w-[40%] h-1/2 relative">
        <div className="w-20 h-[7rem] -right-1/3 top-6 absolute ">
            <img src='https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)' className='w-full h-full object-cover' alt="" />
        </div>
        <div className="w-[8rem] aspect-video -left-1/2 top-1/3 absolute ">
        <video className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' muted autoPlay loop src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
        </div>
        <div className="w-[9rem] aspect-video  -left-[70%] -bottom-10 absolute ">
        <video className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' muted autoPlay loop src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
        </div>
        <div className="w-[10rem] aspect-[1.5/1] -right-[70%] -bottom-[35%] absolute ">
        <video className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' muted autoPlay loop src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
        </div>

        <img src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)" className='w-full h-full object-cover' alt="" />
    </div>
    </div>
  )
}

export default ImagesSection
