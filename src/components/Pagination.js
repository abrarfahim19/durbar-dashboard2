import React from 'react';
import {BiLeftArrow, BiRightArrow} from "react-icons/bi"

const Pagination = () => {
  return (
    <div className='grid md:grid-cols-3 grid-flow-col-dense italic text-white'>
      <div className='hidden md:block'></div>
      <div className='hidden md:block'></div>
      <div className='flex justify-around items-center py-4 px-3 order-last' style={{backgroundColor:"#32363f"}}>
        <BiLeftArrow />
        <span>1</span>
        <span className='hidden md:inline'>2</span>
        <span className='hidden md:inline'>3</span>
        <span>...</span>
        <span className='hidden md:inline'>12</span>
        <span>13</span>
        <BiRightArrow />
        <span>
          <label>Go page</label>
          <input type={'number'} className="outline-0 bg-inherit border-2  border-slate-400 rounded max-w-sm w-12 mx-2"  />
        </span>
      </div>
    </div>
  );
};

export default Pagination;