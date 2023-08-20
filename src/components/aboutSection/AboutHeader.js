import React from "react";
import "./about.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";


function AboutHeader({noline}) {
  return (
    <div className=" xl:px-32 px-4 ">
      
      <div
        className="  xl:w-full md:block lg:mx-16 hidden xl:mx-0  bg-gray-300 mt-8 mb-20"
        style={{ height: "2px" }}
      ></div>

      <div className="md:flex md:flex-row flex flex-col  gap-14 items-center justify-between xl:px-12">
        <div className="img-cont" >
          <img
            src="/images/about-man.png"
            className=""
            width={550}
            alt="pointing man"
          />
        </div>
        <div>
          <div  style={{ maxWidth: "590px" }}>
            <span className="text-center text-base leading-8">
              At Capax Fidum Solution, we take pride in delivering exceptional
              IT services that transform businesses. With our deep industry
              knowledge, technical prowess, and unwavering commitment to client
              satisfaction, we are your trusted partner on the path to success.
              Contact us today and discover how Capax Fidum Solutions can
              empower your business to achieve new height.
            </span>
          </div>
          <div className="md:block flex justify-center pt-11">
            <Link to={"/contact"}>
            <Button text={"Get Started Today"} />
            </Link>
          </div>
          
        </div>
      </div>
      <div className="mt-32 mb-28 font-bold leading-8 text-center md:text-left  text-2xl md:text-3xl lg:text-6xl ">
            <span className=" ">
              Discover how <span style={{'color':'#1053F3'}}>capax fidum</span> Solutions can empower your business to
              achieve new height
            </span>
          </div>
    </div>
  );
}

export default AboutHeader;
