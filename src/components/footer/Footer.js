import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

function Footer() {
  return (
    <div
      style={{ background: "#17181B" }}
      className="z-10 relative flex-col text-white"
    >
      <div className="  px-10 md:px-20  py-24   w-full ">
        <div className=" flex sm:items-center sm:flex-row flex-col  gap-10 sm:justify-center xl:justify-between sm:gap-12 w-full sm:flex-wrap">
          <div className="sm:hidden flex flex-col ">
            <div className="">
              <div className="font-bold ttext-lg sm:text-2xl mb-5">Newsletter</div>
              <div className="sm:text-sm text-xs leading-6 pb-3">
                Kindly submit your email to receive our newsletter
              </div>
              <form>
                <div className="flex bg-white w-72 md:w-80 h-12 gap-2 px-5 py-3 items-center rounded-3xl">
                  <img alt="icon" src="/images/direct-normal.svg" />
                  <input
                    type="text"
                    placeholder="Submt your email address"
                    className=" focus:border-none focus:outline-none leading-6 text-black w-11/12 text-xs"
                  />
                  <button
                    style={{ background: "#1053F3" }}
                    className=" px-4 py-1 font-semibold leading-6 text-sm rounded-3xl"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div>
            <div className="font-bold text-lg sm:text-2xl mb-5">
              <span>Capax Fidum</span>
            </div>
            <div className="gap-5 sm:text-sm text-xs flex mb-2">
              <img alt="icons" src="/images/direct.svg" />
              <span>info@capaxfidum.com</span>
            </div>
            <div className="gap-5 sm:text-sm text-xs flex mb-2">
              <img alt="icons" src="/images/link.svg" />
              <span>www.capaxfidum.com</span>
            </div>
            <div className="gap-5 sm:text-sm text-xs flex mb-1">
              <img alt="icons" src="/images/call-outgoing.svg" />
              <span>+2347065218666</span>
            </div>
            <div className="gap-5 sm:text-sm text-xs flex mb-5">
              <img alt="icons" src="/images/whatsapp.svg" />
              <span>+2347088280601</span>
            </div>
            <div className="hidden sm:block">
              <div className=" gap-5 flex mb-3">
                <span className=" sm:w-60 xl:w-full w-full overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="381"
                    height="2"
                    viewBox="0 0 381 2"
                    fill="none"
                  >
                    <path
                      d="M1 1L380 1.00003"
                      stroke="#B9B9B9"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="gap-3 flex">
                <img src="/images/facebook.svg" alt="facebook" />
                <img src="/images/instagram.svg" alt="instagram" />
                <img src="/images/twitter.svg" alt="twitter" />
                <img src="/images/linkedin.svg" alt="linkedin" />
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold text-lg sm:text-2xl mb-5">About us</div>
            <Link to={"/services"}><div className="text-sm leading-6">Our Services</div></Link>
            <Link to={"/contact"}><div className="text-sm leading-6">Our Contact</div></Link>
            <Link to={"/about"}><div className="text-sm leading-6">About Us</div></Link>
            <div className="text-sm leading-6">Career</div>
            <div className="text-sm leading-6">Terms & Services</div>
            <div className="text-sm leading-6">Privacy Policies</div>
          </div>
          <div className="">
            <div className="font-bold text-lg sm:text-2xl mb-5">Support</div>
            <div className="text-sm leading-6">Contact</div>
            <div className="text-sm leading-6">Legal Notice</div>
            <div className="text-sm leading-6">Site Map</div>
            <div className="text-sm leading-6">FAQ</div>
          </div>
          <div className="flex flex-col sm:block hidden items-end">
            <div className="">
              <div className="font-bold text-lg sm:text-2xl mb-5">Newsletter</div>
              <div className="text-sm leading-6 pb-3">
                Kindly submit your email to receive our newsletter
              </div>
              <form>
                <div className="flex bg-white w-80 h-12 gap-2 px-5 py-3 items-center rounded-3xl">
                  <img alt="direct-icon" src="/images/direct-normal.svg" />
                  <input
                    type="text"
                    placeholder="Submt your email address"
                    className=" focus:border-none focus:outline-none leading-6 text-black w-11/12 text-xs"
                  />
                  <button
                    style={{ background: "#1053F3" }}
                    className=" px-4 py-1 font-semibold leading-6 text-sm rounded-3xl"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="sm:hidden mt-10">
          <div className="gap-5 flex mb-3">
            <span className=" sm:w-60 xl:w-full w-full overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="381"
                height="2"
                viewBox="0 0 381 2"
                fill="none"
              >
                <path
                  d="M1 1L380 1.00003"
                  stroke="#B9B9B9"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
          <div className="gap-3 flex">
            <img src="/images/facebook.svg" alt="facebook" />
            <img src="/images/instagram.svg" alt="instagram" />
            <img src="/images/twitter.svg" alt="twitter" />
            <img src="/images/linkedin.svg" alt="linkedin" />
          </div>
        </div>
      </div>
      <div
        style={{ color: "#242427" }}
        className="sm:h-48 h-4 text-center pt-7  bg-white font-medium text-sm"
      >
        <div>
          <span>All RIght Reserved - Capax Fidum (2023)</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
