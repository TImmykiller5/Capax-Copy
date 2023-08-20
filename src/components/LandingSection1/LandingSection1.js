import React from "react";
import "./LandingSection1.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";


function LandingSection1() {
  return (
    <div className="w-full h-screen flex  flex-col">
      <div className=" flex flex-col  items-center justify-center  basis-7/12 bg-white">
        <div className=" sm:gap-0 sm:pt-40 pt-24 lg:pt-52 md:w-7/12 mx-4 max-w-3xl flex  flex-col items-center  justify-center text-center ">
          <div className=" ">
            <span className="sm:text-5xl font-extrabold text-4xl">
              Empowering Your Business Through Cutting-Edge IT Services
            </span>
          </div>
          <div className="mt-2 h-10 sm:mb-0 ">
            <img alt="swiss-icon" src="/images/swiss.svg" />
          </div>
          <div className="pb-10">
            <span className="font-medium text-sm sm:text-base ">
              We take pride in delivering exceptional IT services that transform
              businesses. With our deep industry knowledge, technical prowess,
              and unwavering commitment to client satisfaction, we are your
              trusted partner on the path to success
            </span>
          </div>
          <div className="">
            <Link to="/contact">
            <Button text={"Get Started Today"} />
            </Link>
          </div>
        </div>
      </div>
      <div className=" h-full sm:basis-5/12 relative bg-white">
        <div className="w-full h-full">
          <div className="w-full h-full absolute bottom-0 lg:px-20">
            <div className="flex w-full h-full relative overflow-hidden">
              <img alt="design element" className="w-1/3 absolute" id="img-bot-1" src="/images/bottom.png" />
              <img alt="design element" className="md:w-1/3 hidden lg:block w-0 absolute" id="img-bot-2" src="/images/bottom.png" />
              <img alt="design element" className="w-1/3 absolute" id="img-bot-3" src="/images/bottom.png" />
            </div>
          </div>
        </div>
        <div className="image-bottom  w-full">
          <div className="flex h-72 relative">
            <div className="ellipse1 blur-3xl w-2/6 absolute h-72"></div>
            <div className="ellipse2 blur-3xl w-2/6 absolute h-72"></div>
            <div className="ellipse3 blur-3xl w-2/6 absolute h-72"></div>
            <div className="ellipse4 blur-3xl:w-2/6 absolute h-72"></div>
          </div>
        </div>
      </div>
      <div className="backdrop-container">
        <div className="flex backdrop-container-inner">
          <div className="h-full blur-sm w-full bd1"></div>
          <div className="h-full blur-sm w-full bd2"></div>
          <div className="h-full blur-sm w-full bd3"></div>
          <div className="h-full blur-sm w-full bd4"></div>
        </div>
      </div>
    </div>
  );
}

export default LandingSection1;
