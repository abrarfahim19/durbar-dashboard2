import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import food from "../assets/trophyIcon.png";

const ReviewItem = () => {
  return (
    <div className="flex justify-around items-center  m-1  bg-[#32363f]  p-4 ">
      <div className="content-center w-2/12 text-sm">
        <img src={food} alt="food" className="w-10" />
      </div>
      <div className="flex flex-col justify-center items-start w-6/12">
        <h2 className="text-slate-100"> Beef Burger</h2>
        <p className=" text-[#B0CAD1]">
          Wooow...! so delicious..! bla bla bla...
        </p>
      </div>
      <div className="w-4/12">
        <div className="flex flex-col justify-between items-end">
          <div className="flex justify-center">
            <AiFillStar className="text-orange-400 text-lg" />{" "}
            <AiFillStar className="text-orange-400  text-lg" />
            <AiFillStar className="text-orange-400  text-lg" />
            <AiFillStar className="text-orange-400  text-lg" />
            <AiOutlineStar className="text-orange-400  text-lg" s />
          </div>
          <p className="text-[#B0CAD1]">27 January, 2022 @9.30</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
