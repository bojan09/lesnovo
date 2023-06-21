import React, { useState } from "react";

// assets
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="">
      <img
        src={!toggle ? menu : close}
        className="w-[70px] h-[70px] object-contain cursor-pointer fixed right-6 top-5 sm:right-8 sm:top-7 lg:right-[4rem] lg:top-[3rem] bg-slate-100 p-4 rounded-full"
        alt="nav menu"
        onClick={() => setToggle(!toggle)}
      />

      <ul
        className={
          toggle
            ? "grid justify-center items-center bg-gradient-to-br from-primaryDarkColor to-primaryLightColor h-[100vh] w-[100vw] z-10 py-[8rem] xs:text-[1.75rem] sm:text-[2rem]"
            : "hidden"
        }
      >
        <li className="nav_link" onClick={() => setToggle(!toggle)}>
          <a href="#about" className="">
            <span>01</span>About Lesnovo
          </a>
        </li>
        <li className="nav_link" onClick={() => setToggle(!toggle)}>
          <a href="#features" className="">
            <span>02</span>Your benfits
          </a>
        </li>
        <li className="nav_link" onClick={() => setToggle(!toggle)}>
          <a href="#tours" className="">
            <span>03</span>Popular tours
          </a>
        </li>
        <li className="nav_link" onClick={() => setToggle(!toggle)}>
          <a href="#testimonials" className="">
            <span>04</span>Stories
          </a>
        </li>
        <li className="nav_link" onClick={() => setToggle(!toggle)}>
          <a href="#contact" className="">
            <span>05</span>Book now
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
