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
        className="w-[45px] h-[45px] object-contain cursor-pointer fixed right-4 top-2 "
        alt="nav menu"
        onClick={() => setToggle(!toggle)}
      />

      <ul
        className={
          toggle
            ? "flex flex-col justify-center items-center gap-10 bg-red-200 h-[100vh] w-[100vw] z-10"
            : "hidden"
        }
      >
        <li className="" onClick={() => setToggle(!toggle)}>
          <a href="#about" className="">
            <span>01</span>About Natous
          </a>
        </li>
        <li className="" onClick={() => setToggle(!toggle)}>
          <a href="#features" className="">
            <span>02</span>Your benfits
          </a>
        </li>
        <li className="" onClick={() => setToggle(!toggle)}>
          <a href="#tours" className="">
            <span>03</span>Popular tours
          </a>
        </li>
        <li className="" onClick={() => setToggle(!toggle)}>
          <a href="#testimonials" className="">
            <span>04</span>Stories
          </a>
        </li>
        <li className="" onClick={() => setToggle(!toggle)}>
          <a href="#contact" className="">
            <span>05</span>Book now
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
