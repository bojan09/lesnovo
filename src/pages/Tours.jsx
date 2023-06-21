import React from "react";

// assets
import mountainBiker from "../assets/tours/the_mountain_biker.jpg";
import forestHiker from "../assets/tours/forest_explorer.jpg";
import snowAdventurer from "../assets/tours/winter_explorer.jpg";

const Tours = () => {
  return (
    <div className="text-center my-[5rem]">
      <h1 className="primary-heading sm:text-4xl xs:text-xl font-semibold my-[2rem]">
        EXCITING TOURS FOR ADVENTUROUS PEOPLE
      </h1>

      {/* The cave Explorer */}
      <div>
        <img src={mountainBiker} alt="mountainBiker" />
        <h1>The mountain biker</h1>
        <div>
          <p>3 day tours</p>
          <p>Up to 10 people</p>
          <p>2 tour guides</p>
          <p>Sleep in cozy hotel</p>
          <p>Difficulty: easy</p>
        </div>
      </div>
      {/* The forest Hiker */}
      <div>
        <img src={forestHiker} alt="forestHiker" />
        <h1>The forest hiker</h1>
        <div>
          <p>7 day tours</p>
          <p>Up to 40 people</p>
          <p>6 tour guides</p>
          <p>Sleep in provided tents</p>
          <p>Difficulty: medium</p>
        </div>
      </div>
      {/* The snow Adventurer */}
      <div>
        <img src={snowAdventurer} alt="snowAdventurer" />
        <h1>The snow adventurer</h1>
        <div>
          <p>5 day tours</p>
          <p>Up to 15 people</p>
          <p>3 tour guides</p>
          <p>Sleep in provided tents</p>
          <p>Difficulty: hard</p>
        </div>
      </div>
    </div>
  );
};

export default Tours;
