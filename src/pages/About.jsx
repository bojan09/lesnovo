import React from "react";

// assets
import img_1 from "../assets/cave/cave_01.jpg";
import img_2 from "../assets/cave/cave_3.jpg";
import img_3 from "../assets/cave/cave_02.jpg";

const About = () => {
  return (
    <div className="text-center  h-[100vh]">
      <h1 className="primary-heading text-3xl font-semibold my-[2rem]">
        EXCITING TOURS FOR ADVENTUROUS PEOPLE
      </h1>

      {/* Container */}
      <div className=" flex justify-around gap-[6rem] p-3 py-[3rem]">
        {/* Left Container */}
        <div className="w-[40%] text-start flex flex-col justify-center items-center gap-12">
          <div className="w-[50ch] ">
            <h1 className="mb-6">YOU'RE GOING TO FALL IN LOVE WITH NATURE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui.
            </p>
          </div>
          <div className="w-[50ch]">
            <h1 className="mb-6">LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui.
            </p>
          </div>
          <button className="border-b-2 border-primaryColor px-2 py-1 hover:bg-primaryColor transition-all duration-200 ease-in hover:text-white scale-100 hover:scale-105">
            <a href="#contact">Learn more →</a>
          </button>
        </div>

        {/* Right Container */}
        <div className="w-[50%] relative">
          <img
            src={img_1}
            alt="img_1"
            className="w-[500px]  h-[350px] object-cover absolute top-0 left-[-10rem] rounded-lg hover:z-10 scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
          />
          <img
            src={img_2}
            alt="img_2"
            className="w-[500px] h-[350px] object-cover absolute top-10 left-[15rem] rounded-lg hover:z-10 scale-100 hover:scale-105 transition-all duration-200 ease-in-out"
          />
          <img
            src={img_3}
            alt="img_3"
            className="w-[500px] h-[350px] object-cover absolute top-[20rem] left-[5rem] rounded-lg hover:z-10 scale-100 hover:scale-105 transition-all duration-200 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
