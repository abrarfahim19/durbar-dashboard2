import React from "react";
import { AiFillApple, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Aside = () => {
  return (
    <div className="aside h-full bg-[#32363F]">
      <div className="flex flex-col justify-between sm:justify-between h-full items-center">

      <div>
      <nav class="flex flex-col">
        <a
          href=""
          class="flex items-center border-l-[3px] border-red-500 bg-slate-800 px-4 py-3 text-red-700"
        >
          <AiFillApple className="text-3xl text-white" />

          <span class="ml-3 text-sm font-bold"> Dashboard </span>
        </a>

        <a
          href=""
          class="flex items-center border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-red-300 hover:bg-slate-800 hover:text-gray-700"
        >
          <AiFillApple className="text-3xl text-white" />

          <span class="ml-3 text-sm font-bold text-slate-400"> Menu Layout </span>
        </a>

        <a
          href=""
          class="flex items-center border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-red-300 hover:bg-slate-800 hover:text-gray-700"
        >
          <AiFillApple className="text-3xl text-white" />

          <span class="ml-3 text-sm font-bold text-slate-400"> Favourite </span>
        </a>

        <a
          href=""
          class="flex items-center border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-red-300 hover:bg-slate-800 hover:text-gray-700"
        >
          <AiFillApple className="text-3xl text-white" />

          <span class="ml-3 text-sm font-bold text-slate-400"> Order History </span>
        </a>

        <a
          href=""
          class="flex items-center border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-red-300 hover:bg-slate-800 hover:text-gray-700"
        >
          <AiFillApple className="text-3xl text-white" />

          <span class="ml-3 text-sm font-bold text-slate-400"> Booking System </span>
        </a>
      </nav>
      </div>

      <div className="flex flex-col justify-between items-center pt-40 pb-5">
        <div className="flex justify-center items-center gap-3">
          <AiFillFacebook className="text-white text-2xl"/>
          <AiFillTwitterCircle className="text-white text-2xl"/>
          <AiFillLinkedin className="text-white text-2xl"/>
          <AiFillInstagram className="text-white text-2xl"/>
        </div>
        <div>
          <h3 className="text-white mt-3">©<span className="text-red-500"> Tomotus.</span> All rights Reserved</h3>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Aside;
