import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="sm:pt-40 pt-20 lg:pt-52">
      <div className="flex w-full lg:w-auto flex-col items-center lg:mx-28">
        <div
          style={{ borderWidth: "1px", backgroundColor: "#487C05" }}
          className="w-full pt-9 pb-11 px-7 lg:px-60 lg:mx-28 flex relative overflow-hidden justify-center"
        >
          <div
            style={{ maxWidth: "707px", letterSpacing: "-0.64px" }}
            className="lg:text-4xl sm:text-3xl text-2xl text-center w-full"
          >
            <span
              style={{ fontSize: "32px", zIndex: "3" }}
              className=" font-bold leading-10 relative "
            >
              Discover how <span style={{ color: "#FE6E00" }}>capax fidum</span>{" "}
              Solutions can empower your business to achieve new height.
            </span>
          </div>
          <div className="absolute w-52 -left-20 -bottom-36 lg:-left-32 lg:-top-0 rotate-45">
            {" "}
            <img alt="design-element" src="/images/bottom.png" />
          </div>
          <div className="absolute w-52 -rotate-45 -right-16 -bottom-24 lg:-bottom-8 lg:-right-16">
            {" "}
            <img alt="design-element" src="/images/bottom.png" />
          </div>
        </div>
        <div></div>
      </div>

      <div className="flex md:py-20 md:justify-between xl:justify-around  md:gap-32 md:items-center md:flex-row md:px-24 flex-col justify-center px-4 pt-11">
        <img
          className="md:basis-1/2 md:max-w-xl  w-full h-96 rounded-3xl bg-cover bg-center"
          style={{
            backgroundImage: `url(/images/about.png)`,
          }}
        />
        <div className="md:basis-1/2 md:max-w-xl  flex flex-col gap-8 md:items-start items-center py-12">
          <div className=" text-3xl leading-10 font-bold">About Us</div>
          <span className=" text-sm leading-7 ">
            At Capax Fidum Solutions, we understand the success of your business
            depends on the strength and efficiency of your IT infrastructure.
            That’s why we are dedicated to providing a comprehensive range of
            innovative and reliable IT solutions to help your company thrive in
            digital age. With our expertise and commitment to excellence, we
            empower businesses like yours to achieve their full potential.
            Partner with us and experience the difference Capax Fidum Solutions
            can make.
          </span>
          <Link
            style={{ color: "#1053F3" }}
            className="flex gap-1 underline underline-offset-2"
            to="/contact"
          >
            <span>Contact Us Today </span> <img src="/images/arrow-1.svg" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
