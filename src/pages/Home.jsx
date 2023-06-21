import React from "react";

const Home = () => {
  return (
    <div className="hero rounded-md ">
      <div className="grid place-items-center gap-6 pt-[35vh]">
        <h1 className="text-white text-center md:text-8xl xs:text-3xl uppercase tracking-[2rem] xs:tracking-[1.5rem]">
          Lesnovo
        </h1>
        <p className="text-white text-center md:text-xl xs:text-sm uppercase tracking-[.3rem]">
          is where adventure happens
        </p>
        <button className="hover:bg-gradient-to-r from-primaryColor to-primaryDarkColor text-grayDarkThreeColor hover:text-white bg-white sm:px-7 sm:py-4 px-3 py-3 rounded-full mt-[4rem] shadow-xl">
          <a className="uppercase sm:text-xl xs:text-lg" href="#contact">
            Discover out tours
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
