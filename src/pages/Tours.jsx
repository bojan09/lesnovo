import React from "react";

// assets
import mountainBiker from "../assets/tours/the_mountain_biker.jpg";
import forestHiker from "../assets/tours/forest_explorer.jpg";
import snowAdventurer from "../assets/tours/winter_explorer.jpg";

const Tours = () => {
  return (
    <div className=" text-center my-[5rem]">
      <h1 className="primary-heading sm:text-4xl xs:text-xl font-semibold my-[2rem]">
        MOST POPULAR TOURS
      </h1>

      {/* Container */}
      <div className="flex justify-evenly items-center">
        {/* The cave Explorer */}
        <div className="flex flex-col px-4">
          {/* Image */}
          <div className="popular_tours_img mountain_biker relative">
            <h1 className="absolute bottom-[3.2rem] right-2 bg-gradient-to-b from-secondaryLightColor to-secondaryDarkColor xs:text-2xl md:text-3xl uppercase p-2 text-white text-left font-light opacity-80">
              The mountain biker
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 mb-12 mt-5">
            <p className="border-b-2 pb-1 w-[90%] mb-1">3 day tours</p>
            <p className="border-b-2 pb-1 w-[90%] mb-1">Up to 10 people</p>
            <p className="border-b-2 pb-1 w-[90%] mb-1">2 tour guides</p>
            <p className="border-b-2 pb-1 w-[90%] mb-1">Sleep in cozy hotel</p>
            <p className="mb-1">Difficulty: easy</p>
          </div>
        </div>
        {/* The forest Hiker */}
        <div className="flex flex-col px-4">
          {/* Image */}
          <div className="popular_tours_img forest_hiker relative">
            <h1 className="absolute bottom-[3.2rem] right-2 bg-gradient-to-b from-primaryDarkColor to-primaryLightColor xs:text-2xl md:text-3xl uppercase p-2 text-white font-light opacity-80">
              The forest hiker
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 mb-12 mt-5">
            <p className="border-b-2 pb-1 w-[90%] mb-1">7 day tours</p>
            <p className="border-b-2 pb-1 w-[90%] mb-1">Up to 40 people</p>
            <p className="border-b-2 pb-1 w-[90%] mb-1">6 tour guides</p>
            <p className="border-b-2 pb-1 w-[90%] mb-1">
              Sleep in provided tents
            </p>
            <p className="mb-1">Difficulty: medium</p>
          </div>
        </div>
        {/* The snow Adventurer */}
        <div className="flex flex-col px-4">
          {/* Image */}
          <div className="popular_tours_img snow_adventurer relative">
            <h1 className="absolute bottom-[3.2rem] right-2 bg-gradient-to-b from-tertiaryDarkColor to-tertiaryLightColor xs:text-2xl md:text-3xl uppercase p-2 text-white font-light opacity-80">
              The snow adventurer
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 mb-12 mt-5">
            <p className="border-b-2 pb-1 w-[90%] mb-1">5 day tours</p>
            <p className="border-b-2 pb-1 w-[90%] mb-1">Up to 15 people</p>
            <p className="border-b-2 pb-1 w-[90%] mb-1">3 tour guides</p>
            <p className="border-b-2 pb-1 w-[90%] mb-1">
              Sleep in provided tents
            </p>
            <p className=" mb-1">Difficulty: hard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
