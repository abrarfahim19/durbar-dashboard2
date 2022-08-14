import React, { useState } from "react";
import {
  AiOutlineBell,
  AiOutlineDown,
  AiOutlineMenuFold,
  AiOutlineSearch,
} from "react-icons/ai";
import Logo from "../../assets/Logo.svg";
import MobileSide from "./MobileSide";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <div className="bg-[#32363f] ">
    <div className="container mx-auto flex justify-between items-center bg-[#32363f]">
      <div className="flex justify-between items-center">
        <div className="hidden md:block pr-5">
          <div className=" flex justify-between items-center w-72 bg-[#32363f]">
            <img src={Logo} className={`h-10 block`} alt="" />
            <AiOutlineMenuFold className="text-3xl text-white" />
          </div>
        </div>
        <div className="flex justify-center it rounded-full py-2 px-4 bg-slate-700 md:block hidden">
          <input
            className="bg-slate-700 focus:outline-none text-white"
            type="text"
            placeholder="Search..."
          />
          <button>
            <AiOutlineSearch className="text-white text-xl" />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <AiOutlineBell className="m-3 text-red-700 text-2xl md:block hidden" />
        <div className="m-3 rounded-full h-10 w-10 bg-blue-600 border-2 border-orange-500 md:block hidden"></div>
        <h3 className="m-3 text-white md:block hidden">Walter White</h3>
        <AiOutlineDown className="m-3 text-white md:block hidden" />
      </div>
        <MobileSide className="md:hidden block"/>
    </div>
    </div>
  );
};

export default Header;
