import React from "react";
import ReviewItem from "./ReviewItem";

const RecentReviews = () => {
  return (
    <div>
      <div className="flex justify-between items-center text-white">
        <h3 className="">Top Menu List</h3>
        <h3 className="text-red-500"> View All</h3>
      </div>
      <div className="flex flex-col justify-around w-full">
        {
          [...Array(5)].map((e,index)=><ReviewItem />)
          
        }
      </div>
    </div>
  );
};

export default RecentReviews;
