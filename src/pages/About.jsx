import React from "react";

// assets
import img_1 from "../assets/cave/cave_01.jpg";
import img_2 from "../assets/cave/cave_02.jpg";
import img_3 from "../assets/cave/cave_3.jpg";

const About = () => {
  return (
    <div className="text-center">
      <h1 className="primary-heading sm:text-4xl xs:text-xl font-semibold my-[2rem]">
        EXCITING TOURS FOR ADVENTUROUS PEOPLE
      </h1>

      {/* Container */}
      <div className="sm:flex mx-6 text-start">
        {/* Left Container */}
        <div className="sm:mt-[5rem] sm:flex-1 sm:flex flex-col justify-start items-center">
          <h1 className="mb-6 sm:text-xl">
            YOU'RE GOING TO FALL IN LOVE WITH NATURE
          </h1>
          <p className="sm:w-[50ch] sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui.
          </p>

          <h1 className="my-6 sm:text-xl">
            LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE
          </h1>
          <p className="sm:w-[50ch] sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui.
          </p>
          <button className="sm:mt-[5rem] mt-[2rem]  border-b-2 border-primaryColor px-2 py-1 hover:bg-primaryColor transition-all duration-200 ease-in hover:text-white scale-100 hover:scale-105 sm:text-xl xs:text-lg">
            <a href="#contact">Learn more →</a>
          </button>
        </div>

        {/* Right Container */}
        <div className="sm:flex-1 flex flex-col sm:flex-row my-12 gap-4">
          <img
            src={img_1}
            alt="img_1"
            className="ml-[5%] sm:mt-[20%] sm:w-[350px] sm:h-[350px]  w-[150px] h-[150px] object-cover rounded-lg hover:z-10 scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
          />
          <img
            src={img_2}
            alt="img_2"
            className="ml-[40%] mt-[-20%] lg:mt-[35%] lg:ml-[-5%] sm:mt-[90%] sm:ml-[-92%] sm:w-[350px] sm:h-[350px] w-[150px] h-[150px] rounded-lg hover:z-10 scale-100 hover:scale-105 transition-all duration-200 ease-in-out"
          />
          <img
            src={img_3}
            alt="img_3"
            className="ml-[20%] mt-[-15%] lg:ml-[-50%] lg:mt-[5%] sm:ml-[-100%] sm:mt-[170%] sm:w-[350px] sm:h-[350px]  w-[150px] h-[150px] rounded-lg hover:z-10 scale-100 hover:scale-105 transition-all duration-200 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
