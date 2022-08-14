import React from "react";
import trophy from "../assets/trophyIcon.png";

const Trophy = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white">
      <img src={trophy} alt="trophy" />
      <div className="flex flex-col justify-center items-center w-full ">
        <h2 className="text-2xl">
          15<span className="text-base">th</span> Years{" "}
        </h2>
        <p className="text-sm italic">
          This Year Winner to Tomatus{" "}
          <span className="text-red-500"> Congratulation! </span>
        </p>
        <p className="text-base italic">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country.
        </p>
      </div>
    </div>
  );
};

export default Trophy;
