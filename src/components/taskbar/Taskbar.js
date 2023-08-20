import React, { useState } from "react";
import "./taskbar.css";
import { NavLink } from "react-router-dom";

function Taskbar() {
  const [open, setOpen] = useState(false)
  const navControl= () =>{
    setOpen(!open)
  }

  return (
    <div>
      <div className="hidden   nav md:flex items-center lg:px-32 pb-6 px-4 z-30  bg-white justify-between w-full fixed pt-12">
        <div className="">
          <div className="">
          <NavLink to={"/"} className=" text-sm">
          <img width={70} alt="capax fidum Logo" src="/images/Capax_Logo.png"/>
          </NavLink>
          </div>
        </div>
        <div className="flex items-center gap-8 font-normal">
          <NavLink to={"/"} className="opacity-70 text-sm">
            Home
          </NavLink>
          <NavLink to={"/services"} className="opacity-70 text-sm">
            Services
          </NavLink>
          <NavLink to={"/about"} className="opacity-70 text-sm">
            About Us
          </NavLink>
          <NavLink to={"/contact"} className=" text-sm">
            <button className="button2 w-44 relative z-10 text-white font-semibold text-sm px-5 py-2 rounded-3xl">
              Contact Us
            </button>
          </NavLink>
        </div>
      </div>
      <div  className={`fixed  z-40 top-0 py-3 text-xs sm:text-sm w-full bg-white md:hidden  font-semibold  pt-4 px-5`}>
        <div className="flex justify-between items-center">
          <div><NavLink to={"/"} className=" text-sm">
            <img width={50} alt="capax fidum Logo" src="/images/Capax_Logo.png"/>
          </NavLink></div>
        <button onClick={navControl}><img src="/images/menu.svg" alt="menu"/></button>
        </div>
        <div>
        

        <div className={`${open?'block h-fit ':'h-0 hidden'} mobile flex flex-col items-start pt-6 gap-6 font-normal`}>
          <NavLink onClick={navControl} to={"/"} className="w-full text-sm hover:bg-slate-300 rounded-md px-3 py-2">
            Home
          </NavLink>
          <NavLink onClick={navControl} to={"/services"} className="w-full text-sm hover:bg-slate-300 rounded-md px-3 py-2">
            Services
          </NavLink>
          <NavLink onClick={navControl} to={"/about"} className="w-full text-sm hover:bg-slate-300 rounded-md px-3 py-2">
            About Us
          </NavLink>
          <NavLink onClick={navControl} to={"/contact"} className="w-full text-sm hover:bg-slate-300 rounded-md px-3 py-2">
            
              Contact Us
            
          </NavLink>
        </div>
        </div>
      </div>
    </div>

  );
}

export default Taskbar;
