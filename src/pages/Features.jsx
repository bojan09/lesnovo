import React from "react";

import globe from "../assets/features/globe.png";
import compas from "../assets/features/compas.png";
import map from "../assets/features/map.png";
import heart from "../assets/features/heart.png";

const Features = () => {
  return (
    <div className="features py-[5rem] sm:py-[10rem] my-[5rem]">
      <div className="skew-y-[7deg]  md:flex justify-center items-center gap-6 flex-wrap">
        <div className="mx-auto xs:my-4 sm:m-0 rounded-lg max-w-[20rem] max-h-[22rem] text-center py-3 px-4 bg-white opacity-80 scale-100 hover:scale-105 transition-all duration-200 ease-in-out">
          <img src={globe} alt="globe" className="mx-auto my-2 w-[50px]" />
          <h1 className="mt-12 text-[#333] text-lg font-semibold">
            EXPLORE THE WORLD
          </h1>
          <p className="text-lg text-[#333] pb-[3rem] pt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            voluptate at minima neque doloribus saepe nulla quo ipsam numquam
            enim.
          </p>
        </div>

        <div className="mx-auto xs:my-4 sm:m-0 rounded-lg max-w-[20rem] max-h-[22rem] text-center py-3 px-4 bg-white opacity-80 scale-100 hover:scale-105 transition-all duration-200 ease-in-out">
          <img src={compas} alt="globe" className="mx-auto my-2 w-[50px]" />
          <h1 className="mt-12 text-[#333] text-lg font-semibold">
            MEET NATURE
          </h1>
          <p className="text-lg text-[#333] pb-[3rem] pt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            voluptate at minima neque doloribus saepe nulla quo ipsam numquam
            enim.
          </p>
        </div>

        <div className="mx-auto xs:my-4 sm:m-0 rounded-lg max-w-[20rem] max-h-[22rem] text-center py-3 px-4 bg-white opacity-80 scale-100 hover:scale-105 transition-all duration-200 ease-in-out">
          <img src={map} alt="globe" className="mx-auto my-2 w-[50px]" />
          <h1 className="mt-12 text-[#333] text-lg font-semibold">
            FIND YOUR WAY
          </h1>
          <p className="text-lg text-[#333] pb-[3rem] pt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            voluptate at minima neque doloribus saepe nulla quo ipsam numquam
            enim.
          </p>
        </div>

        <div className="mx-auto xs:my-4 sm:m-0 rounded-lg max-w-[20rem] max-h-[22rem] text-center py-3 px-4 bg-white opacity-80 scale-100 hover:scale-105 transition-all duration-200 ease-in-out">
          <img src={heart} alt="globe" className="mx-auto my-2 w-[50px]" />
          <h1 className="mt-12 text-[#333] text-lg font-semibold">
            LIVE A HEALTHIER LIFE
          </h1>
          <p className="text-lg text-[#333] pb-[3rem] pt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            voluptate at minima neque doloribus saepe nulla quo ipsam numquam
            enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
