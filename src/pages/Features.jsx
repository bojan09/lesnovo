import React from "react";

import globe from "../assets/features/globe.png";
import compas from "../assets/features/compas.png";
import map from "../assets/features/map.png";
import heart from "../assets/features/heart.png";

const Features = () => {
  return (
    <div className="features py-[5rem] my-[5rem]">
      <div className="skew-y-[7deg]  md:flex justify-center items-center">
        <div className="text-center py-3 px-4">
          <img src={globe} alt="globe" className="mx-auto my-2" />
          <h1 className="my-2 text-[#f9f9f9] text-lg font-semibold">
            EXPLORE THE WORLD
          </h1>
          <p className="text-lg text-[#f9f9f9]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            voluptate at minima neque doloribus saepe nulla quo ipsam numquam
            enim.
          </p>
        </div>

        <div className="text-center py-3 px-4">
          <img src={compas} alt="globe" className="mx-auto my-2" />
          <h1 className="my-2 text-[#f9f9f9] text-lg font-semibold">
            MEET NATURE
          </h1>
          <p className="text-lg text-[#f9f9f9]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            voluptate at minima neque doloribus saepe nulla quo ipsam numquam
            enim.
          </p>
        </div>

        <div className="text-center py-3 px-4">
          <img src={map} alt="globe" className="mx-auto my-2" />
          <h1 className="my-2 text-[#f9f9f9] text-lg font-semibold">
            FIND YOUR WAY
          </h1>
          <p className="text-lg text-[#f9f9f9]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            voluptate at minima neque doloribus saepe nulla quo ipsam numquam
            enim.
          </p>
        </div>

        <div className="text-center py-3 px-4">
          <img src={heart} alt="globe" className="mx-auto my-2" />
          <h1 className="my-2 text-[#f9f9f9] text-lg font-semibold">
            LIVE A HEALTHIER LIFE
          </h1>
          <p className="text-lg text-[#f9f9f9]">
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
