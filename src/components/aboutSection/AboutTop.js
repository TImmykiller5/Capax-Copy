import React from 'react'

function AboutTop() {
  return (
    <div className="xl:flex xl:flex-row gap-8 flex flex-col justify-between items-center px-16 md:mb-0 mb-20 md:px-32 pt-20">
        <div className="">
          <div className="xl:w-72 font-bold text-2xl sm:text-3xl text-center md:text-3xl">
            We help real people do more with less money
          </div>
        </div>
        <div className=" sm:flex sm:flex-row sm:text-left flex flex-col text-center items-center gap-8">
          <div className="">
            <div className="about-header-text font-extrabold text-6xl lg:text-7xl">98%</div>
            <div className="text-sm">Client Satisfaction</div>
          </div>
          <div className="">
            <div className="about-header-text font-extrabold text-6xl lg:text-7xl">32%</div>
            <div className="text-sm">Decreased Expenses</div>
          </div>

          <div className="">
            <div className="about-header-text font-extrabold text-6xl lg:text-7xl">
              3.2M
            </div>
            <div className="text-sm">Money flow users</div>
          </div>
        </div>
      </div>
  )
}

export default AboutTop