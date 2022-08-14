import React from 'react';
import { AiFillApple } from 'react-icons/ai';

const Aside = () => {
    return (
        <div className='aside bg-slate-600'>
            <nav class="flex flex-col">
  <a
    href=""
    class="flex items-center border-l-[3px] border-red-500 bg-slate-800 px-4 py-3 text-red-700"
  >
    <AiFillApple className='text-3xl text-white'/>

    <span class="ml-3 text-sm font-bold"> General </span>
  </a>

  <a
    href=""
    class="flex items-center border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-red-300 hover:bg-slate-800 hover:text-gray-700"
  >
    <AiFillApple className='text-3xl text-white'/>

    <span class="ml-3 text-sm font-bold text-slate-400"> Teams </span>
  </a>

  <a
    href=""
    class="flex items-center border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-red-300 hover:bg-slate-800 hover:text-gray-700"
  >
    <AiFillApple className='text-3xl text-white'/>

    <span class="ml-3 text-sm font-bold text-slate-400"> Billing </span>
  </a>

  <a
    href=""
    class="flex items-center border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-red-300 hover:bg-slate-800 hover:text-gray-700"
  >
    <AiFillApple className='text-3xl text-white'/>

    <span class="ml-3 text-sm font-bold text-slate-400"> Invoices </span>
  </a>

  <a
    href=""
    class="flex items-center border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-red-300 hover:bg-slate-800 hover:text-gray-700"
  >
    <AiFillApple className='text-3xl text-white'/>

    <span class="ml-3 text-sm font-bold text-slate-400"> Account </span>
  </a>
</nav>

        </div>
    );
};

export default Aside;