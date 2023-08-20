import React from "react";
import AboutHeader from "../../components/aboutSection/AboutHeader";
import Button from "../../components/button/Button";
import ContactInput from "./ContactInput";
import './Contact.css'

function Contact() {
  return (
    <div className="w-full  relative sm:pt-40 pt-20 lg:pt-52">
      <div className="flex w-full lg:w-auto flex-col items-center lg:mx-28">
        <div
        
          style={{ backgroundColor: "#1053F3" }}
          className="w-full pt-9 pb-11 px-7 lg:px-60 lg:mx-28 flex relative overflow-hidden justify-center"
        >
          <div style={{ maxWidth:'707px', letterSpacing:'-0.64px'}}  className="lg:text-4xl sm:text-3xl text-2xl text-center w-full">
            <span
              style={{  zIndex:'3' }}
              className=" font-bold leading-10 relative text-white"
            >
              Discover how <span style={{ color: "#FFE500" }}>capax fidum</span>{" "}
              Solutions can empower your business to achieve new height.
            </span>
          </div>
            <div className="absolute w-52 -left-20 -bottom-36 lg:-left-20 lg:-top-0  rotate-45"> <img alt="designelement" src="/images/bottom.png"/></div>
            <div className="absolute w-52 -rotate-45 -right-16 -bottom-24 lg:-bottom-8 lg:-right-16"> <img alt="designelement" src="/images/bottom.png"/></div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col items-center gap-14 justify-center relative pb-36 pt-16">
        <form  className="w-full max-w-4xl">
          <div className="grid mx-4 md:grid-cols-2 gap-7 md:gap-5 ">
            <div className="md:col-span-1 col-span-2">
              <ContactInput
                type={"text"}
                placeholder={"Enter Your Full Name"}
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <ContactInput
                type={"text"}
                placeholder={"Enter your email address"}
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <ContactInput type={"select"} placeholder={"Select Category"} />
            </div>
            <div className="md:col-span-1 col-span-2">
              <ContactInput
                type={"text"}
                placeholder={"Enter your phone number"}
              />
            </div>
            <div className="col-span-2">
              {" "}
              <ContactInput
                type={"text-area"}
                placeholder={"Enter your details"}
                height={true}
              />
            </div>
            
          </div>
        </form>
        <div></div>
        <div>
            <Button text={'Submit'}/>
        </div>
      </div>
      <div className="md:flex md:flex-row flex flex-col  gap-14 items-center justify-between xl:px-12">
        <div className="img-cont">
          <img
            src="/images/about-man.png"
            className=""
            width={550}
            alt="pointing man"
          />
        </div>
        <div>
          <div className="px-4" style={{ maxWidth: "590px" }}>
            <span className="text-center text-base leading-8">
              At Capax Fidum Solution, we take pride in delivering exceptional
              IT services that transform businesses. With our deep industry
              knowledge, technical prowess, and unwavering commitment to client
              satisfaction, we are your trusted partner on the path to success.
              Contact us today and discover how Capax Fidum Solutions can
              empower your business to achieve new height.
            </span>
          </div>
          <div className="md:block flex justify-center pb-20 pt-11 ">
            <Button text={"Get Started Today"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
