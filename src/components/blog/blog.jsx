import React from 'react'
import '../blog/blog.css'
import PostOne from '../../assets/One.png'
import PostTwo from '../../assets/Two.png'
import PostThree from '../../assets/Three.png'

function blog() {
  return (
    <>
    <section id='blog'>
    <div id='blogContainer' className='flex flex-col h-full w-full'>
        <div className="blogImage">
          <h1 className='blogHeading'> BLOG </h1>
        </div>
        <div className="blogPostContainer grid ml-20 md:ml-0 lg:ml-0 md:flex md:flex-wrap justify-center items-center h-full w-full overflow-hidden gap-4 md:gap-8">
          <div className="postOne items-center w-[70%] h-[70%] md:w-1/1 md:h-[32%] lg:w-1/4 lg:h-[75%] xl:w-1/4  flex flex-col space-y-3">
            <img src={PostOne} alt="" className="w-full mb-2" />
              <h2 className='postHeading text-center text-xl font-semibold mb-2'>Working World</h2>
                <br />
                <p className='postText text-sm mb-4 m-2'> The start of my journey into becoming an adult... </p>
              <button className='inline-block self-center px-8 py-4 bg-[#000000] text-white px-4 py-2 rounded-md hover:bg-[#D9171F]'> Read More </button>               
          </div>
          <div className="postTwo w-[70%] h-[70%] md:w-1/1 md:h-[32%] lg:w-1/4 lg:h-[75%] xl:w-1/4  flex flex-col space-y-3">
                    <img src={PostTwo} alt="" className="w-full mb-2"/>
                    <h2 className='postHeading text-center text-xl font-semibold mb-2'>New Beginnings</h2>
                    <br />
                    <p className='postText text-sm mb-4 m-2'> The opportunity I've been waiting for... </p>
                    <button className='inline-block self-center px-8 py-4 bg-[#000000] text-white px-4 py-2 rounded-md hover:bg-[#D9171F]'> Read More </button> 
                  </div>
                  <div className="postThree w-[70%] h-[70%] md:w-1/1 md:h-[32%] lg:w-1/4 lg:h-[75%] xl:w-1/4 flex flex-col space-y-3">
                    <img src={PostThree} alt="" className="w-full mb-2"/>
                    <h2 className='postHeading text-center text-xl font-semibold mb-2'>One Step Closer</h2>
                    <br />
                    <p className='postText text-sm mb-4 m-2'> 6 months later and phase 2 has begun... </p>
                    <button className='inline-block self-center px-8 py-4 bg-[#000000] text-white rounded-md hover:bg-[#D9171F]'> Read More </button> 
                  </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default blog
