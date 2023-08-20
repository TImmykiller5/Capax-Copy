import React from "react";
import AboutHeader from'../aboutSection/AboutHeader' 
import About from "../aboutSection/About";
import AboutTop from "../aboutSection/AboutTop";
import Testimonials from "../testimonials/Testimonials";

function LandingSection2() {
  return (
    <div className="w-full relative z-10 bg-white">
      <AboutTop/>
      <AboutHeader/>
      <About number={4}/>
      <Testimonials/>
    </div>
  );
}

export default LandingSection2;
