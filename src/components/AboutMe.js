import React from "react";
import person from "../assets/trophyIcon.png";
import { ImFacebook, ImLinkedin, ImTwitter } from "react-icons/im";
const AboutMe = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg text-white font-bold text-left italic">
        About Me
      </h2>
      <div className="flex flex-col justify-center items-center">
        <div className="w-40 h-40 rounded-full flex items-center justify-center bg-slate-100">
          <img src={person} className="w-20" alt="" />
        </div>
        <em className="text-xl font-bold text-white">HisenBerg</em>
        <p className="text-[#B0CAD1] font-semibold">Artist</p>
        <p className="text-[#B0CAD1]">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country.
        </p>
        <p className="text-white mt-2">
          <span className="text-red-500">Mobile Number</span>: +8801627038567
        </p>
        <button className="rounded-full py-2 px-4 w-44 bg-orange-600 mt-2 text-white font-semibold">
          {" "}
          Profile
        </button>
        <div className="flex justify-between items-center">
          <ImFacebook className="text-white text-lg m-3" />
          <ImTwitter className="text-white text-lg m-3" />
          <ImLinkedin className="text-white text-lg m-3" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
