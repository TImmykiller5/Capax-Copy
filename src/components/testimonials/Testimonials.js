import React from "react";
import "./Testimonial.css";

function Testimonials() {
  return (
    <div
      className="w-full mt-24 sm:pb-16 text-center"
      style={{ background: "#FFF8DE" }}
    >
      <div className="testimonial sm:bg-transparent sm:pb-8 px-1 bg-white w-full sm:pt-16 text-2xl md:text-3xl lg:text-5xl  md:px-28 font-bold ">
        <div
          className="flex lg:max-w-7xl"
          style={
            {
              // lineHeight: "119.231%",
              // letterSpacing: "-1.04px",
            }
          }
        >
          <span className="">
            Discover how <span style={{ color: "#1053F3" }}>capax fidum</span>{" "}
            Solutions can empower your business to ach... Testimonials
          </span>
        </div>
      </div>
      <div className="lg:pt-8 relative z-20" style={{ background: "#F9F9F9" }}>
        <div className="lg:px-28  md:py-10">
          <div
            className="flex flex-col md:flex-row items-center md:items-center md:justify-evenly rounded-lg"
            style={{ background: "#FFFEFC" }}
          >
            <div>
              <div className="flex max-w-sm flex-col gap-3 p-10 leading-8">
                <span className="font-semibold text">Sarah Thompson</span>
                <span className="text-xs">
                  <span className=" font-bold text-base leading-3">"</span>Capax Fidum Solutions has been an instrumental partner in
                  propelling our business forward. Their unparalleled IT
                  services have streamlined our operations and enhanced our
                  efficiency. Their team's commitment to understanding our
                  unique needs and delivering tailored solutions is truly
                  remarkable. Thanks to their expertise, we've achieved levels
                  of growth we once only dreamed of.<span className=" font-bold text-base leading-3">"</span>
                </span>
              </div>
            </div>
            <div>
              <div className="flex max-w-sm flex-col gap-3 p-10 leading-8">
                <span className="font-semibold">Mark Davis</span>
                <span className="text-xs">
                  <span className=" font-bold text-base leading-3">"</span>Partnering with Capax Fidum Solutions was a game-changer for
                  our company. Their comprehensive IT services have not only
                  modernized our processes but also boosted our competitive
                  edge. The dedication they show in addressing our concerns
                  promptly and their innovative approach to problem-solving have
                  earned our trust. Our journey with Capax Fidum has been
                  nothing short of transformative.<span className=" font-bold text-base leading-3">"</span>
                </span>
              </div>
            </div>
            <div>
              <div className="flex max-w-sm flex-col gap-3 p-10 leading-8">
                <span className="font-semibold"> Emily Ramirez</span>
                <span className="text-xs">
                  <span className=" font-bold text-base leading-3">"</span>Capax Fidum Solutions turned our e-commerce vision into
                  reality. Their team seamlessly integrated cutting-edge IT
                  solutions that perfectly aligned with our brand's identity and
                  goals. The personalized attention they provided made us feel
                  like we were their only client. With their support, we've
                  witnessed a surge in online sales and customer engagement.
                  It's clear that Capax Fidum Solutions genuinely cares about
                  our success.<span className=" font-bold text-base leading-3">"</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <div className="w-full h-80 absolute -bottom-20 ">
          <div className="flex w-full h-full relative overflow-hidden">
            <img
              className="w-1/3 absolute"
              id="img-testimonial-1"
              src="/images/bottom.png"
            />
            <img
              className="w-1/3 absolute"
              id="img-testimonial-2"
              src="/images/bottom.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
