import React from "react";

// assets
import heroImg from "../assets/hero2.jpg";

const Home = () => {
  return (
    <div className="header  rounded-md ">
      <div className="grid place-items-center gap-6 pt-[35vh]">
        <h1 className="text-white md:text-8xl xs:text-2xl uppercase tracking-[2rem] xs:tracking-[1.5rem]">
          Lesnovo
        </h1>
        <p className="text-white md:text-xl xs:text-sm uppercase tracking-[.3rem]">
          is where adventure happens
        </p>
        <button className="hover:bg-gradient-to-r from-primaryColor to-primaryDarkColor text-grayDarkThreeColor hover:text-white bg-white px-7 py-4  rounded-full mt-[4rem] shadow-xl">
          <a className="uppercase text-xl " href="#contact">
            Discover out tours
          </a>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Home;
