import React from "react";
import { AiOutlineBell, AiOutlineDown, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div className="bg-[#32363f] ">
      <div className="container mx-auto flex justify-between items-center h-20">
        <div className="flex justify-center it rounded-full py-2 px-4 bg-slate-700">
          <input
            className="bg-slate-700 focus:outline-none text-white"
            type="text"
            placeholder="Search..."
          />
          <button>
            <AiOutlineSearch className="text-white text-xl" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <AiOutlineBell className="m-3 text-red-700 text-2xl" />
          <div className="m-3 rounded-full h-10 w-10 bg-blue-600 border-2 border-orange-500"></div>
          <h3 className="m-3 text-white md:block hidden">Walter White</h3>
          <AiOutlineDown className="m-3 text-white md:block hidden" />
        </div>
      </div>
    </div>
  );
};

export default Header;
