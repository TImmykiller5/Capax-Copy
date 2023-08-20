import React from "react";

function ContactInput({ type, placeholder, height }) {
  return (
    <div className="w-full">
      <div className="w-full">
        {type == "select" ? (
          <div
            style={{ background: "#F2F5FF", color: "#7E7E7E" }}
            className={`${
              height && "h-36"
            } flex w-full h-14 gap-2 px-5 py-5 items-start rounded-lg`}
          >
            <img alt='footer-icons' src="/images/profile-tick.svg" className="" />
            <select
              title="number"
              name="number"
              id="number"
              style={{ background: "#F2F5FF", backgroundImage: "/image/" }}
              className=" focus:border-none focus:outline-none leading-6 k w-11/12 text-xs"
            >
              <option value="" disabled selected>
                {placeholder}
              </option>
              <option value="+234">+234</option>
              <option value="+233">+233</option>
              <option value="+222">+222</option>
              <option value="+44">+44</option>
            </select>
          </div>
        ) : type == "text" ? (
          <div
            style={{ background: "#F2F5FF", color: "#7E7E7E" }}
            className={`${
              height && "h-36"
            } flex w-full h-14 gap-2 px-5 py-5 items-start rounded-lg`}
          >
            <img alt='footer-icons' src="/images/profile-tick.svg" className="" />
            <input
              style={{ background: "#F2F5FF" }}
              type={type}
              placeholder={placeholder}
              className={`h-full focus:border-none focus:outline-none leading-6  w-11/12 text-xs`}
            />
          </div>
        ) : (
          <div
            style={{ background: "#F2F5FF", color: "#7E7E7E" }}
            className={`${
              height && "h-36"
            } flex w-full h-14 gap-2 px-5 py-5 items-start rounded-lg`}
          >
            <img alt='footer-icons' src="/images/profile-tick.svg" className="" />
            <textarea
              style={{ background: "#F2F5FF" }}
              type={type}
              placeholder={placeholder}
              className={`h-full focus:border-none focus:outline-none leading-6  w-11/12 text-xs`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactInput;
