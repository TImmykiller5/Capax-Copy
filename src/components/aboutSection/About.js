import React from "react";
import "./about.css";
import data from "./Services.json";
import { Link } from "react-router-dom";

function About({ number }) {
  const even = (n) => {
    return n % 2 == 0;
  };
  console.log(even(2));

  const { services } = data;
  return (
    <div>
      {services.slice(0, number).map((service, i) => {
        return (
          <div key={i}>
            {even(i) ? (
              <div className="lg:flex lg:flex-row flex flex-col lg:gap-14 items-center justify-between px-2 lg:px-32 pb-20">
                <div
                  className="about-img-cont lg:basis-1/2 rounded-3xl bg-cover"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                ></div>
                <div className="lg:basis-1/2 lg:block flex flex-col items-center text-center">
                  <div
                    style={{ color: "#1053F3" }}
                    className="font-bold text-3xl mb-1 mt-6 lg:mt-0"
                  >
                    {service.title}
                  </div>
                  <div className="font-bold text-3xl pb-8">{service.sub}</div>
                  <div className="md:text-base text-sm leading-8">
                    {service.text}
                  </div>
                  <div className="pt-8">
                    <Link
                      style={{ color: "#1053F3" }}
                      className="flex gap-1 underline underline-offset-2"
                      to="/contact"
                    >
                      <span>Contact Us Today </span>{" "}
                      <img alt="arrow-icon" src="/images/arrow-1.svg" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="lg:flex lg:flex-row-reverse flex flex-col  lg:gap-14 items-center justify-between px-2 lg:px-32 pb-20">
                <div
                  className="about-img-cont lg:basis-1/2 rounded-3xl bg-cover"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                ></div>
                <div className="lg:basis-1/2 lg:block flex flex-col items-center text-center">
                  <div
                    style={{ color: "#1053F3" }}
                    className="font-bold text-3xl mb-1 mt-6 lg:mt-0"
                  >
                    {service.title}
                  </div>
                  <div className="font-bold text-3xl pb-8">{service.sub}</div>
                  <div className="md:text-base text-sm leading-8">
                    {service.text}
                  </div>
                  <div className="pt-8">
                    <Link
                      style={{ color: "#1053F3" }}
                      className="flex gap-1 underline underline-offset-2"
                      to="/contact"
                    >
                      <span>Contact Us Today </span>{" "}
                      <img alt="arrow-icon" src="/images/arrow-1.svg" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div className={`${number > 7 && "h-0 w-0 hidden"} text-center pt-8`}>
        <Link to={"/services"}>
        <button
          style={{
            padding: "8px 20px",
            width: "185px",
            height: "48px",
            border: "2px solid #1053f3",
            borderRadius: "48px",
          }}
        >
          {" "}
          See all services{" "}
        </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
