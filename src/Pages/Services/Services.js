import React from 'react'
import About from '../../components/aboutSection/About'
import Testimonials from '../../components/testimonials/Testimonials'

function Services() {
  return (
    <div className='sm:pt-40 pt-20 lg:pt-52'>
        <div  className="flex w-full lg:w-auto flex-col items-center lg:mx-28">
        <div 
        
          style={{  'borderWidth':'1px' }}
          className="w-full pt-9 pb-11 px-7 lg:px-60 lg:mx-28 flex relative overflow-hidden justify-center"
        >
          <div style={{ maxWidth:'707px', letterSpacing:'-0.64px'}} className="lg:text-4xl sm:text-3xl text-2xl text-center w-full">
            <span
              style={{ fontSize: "32px", zIndex:'3' }}
              className=" font-bold leading-10 relative "
            >
              Discover how <span style={{ color: "#FE6E00" }}>capax fidum</span>{" "}
              Solutions can empower your business to achieve new height.
            </span>
          </div>
            <div className="absolute w-52 -left-20 -bottom-36 lg:-left-32 lg:-top-0 rotate-45"> <img al src="/images/bottom.png"/></div>
            <div className="absolute w-52 -rotate-45 -right-16 -bottom-24 lg:-bottom-8 lg:-right-16"> <img al src="/images/bottom.png"/></div>
        </div>
        <div></div>
      </div>
        <div className=' pt-32 pb-20'>
            <About number={8}/>
        </div>
        <div className=''>
            <Testimonials/>
        </div>
    </div>
  )
}

export default Services