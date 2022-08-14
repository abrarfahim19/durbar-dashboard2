import React from "react";
import { AiFillApple } from "react-icons/ai";

const Aside = () => {
  return (
    <div className="aside bg-[#32363F]">
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
  );
};

export default Aside;
