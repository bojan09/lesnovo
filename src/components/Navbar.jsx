import "./Navbar.css";
import React, { useState } from "react";

// assets
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label
        for="navi-toggle"
        className="navigation__button flex justify-center items-center"
      >
        {/* <span className="navigation__icon">&nbsp;</span> */}
        <img
          src={!toggle ? menu : close}
          className="w-[60%] h-[60%] object-contain cursor-pointer "
          alt="nav menu"
          onClick={() => setToggle(!toggle)}
        />
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item" onClick={() => setToggle(!toggle)}>
            <a href="#about" className="navigation__link">
              <span>01</span>About Natous
            </a>
          </li>
          <li className="navigation__item" onClick={() => setToggle(!toggle)}>
            <a href="#features" className="navigation__link">
              <span>02</span>Your benfits
            </a>
          </li>
          <li className="navigation__item" onClick={() => setToggle(!toggle)}>
            <a href="#tours" className="navigation__link">
              <span>03</span>Popular tours
            </a>
          </li>
          <li className="navigation__item" onClick={() => setToggle(!toggle)}>
            <a href="#testimonials" className="navigation__link">
              <span>04</span>Stories
            </a>
          </li>
          <li className="navigation__item" onClick={() => setToggle(!toggle)}>
            <a href="#contact" className="navigation__link">
              <span>05</span>Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
