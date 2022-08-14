import React from 'react';

const ListItemOrder = ({id}) => {
  function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
  }
  const list = ['red', 'green', 'blue']
  return (
    <div className='grid grid-cols-3 md:grid-cols-6 my-2 text-left py-3 px-6 place-content-center' style={{backgroundColor:"#32363f"}}>
      <div className='text-left hidden md:block'>{id}</div>
      <div className='text-left hidden md:block'>#984985</div>
      <div className='text-left '>plain pizza</div>
      <div className='text-left hidden md:block'>24 jun 2018 9:00pm</div>
      <div className='text-left'>$286.56</div>
      <div className='text-right'>
        <label className={`bg-${get_random(list)}-700 rounded-lg px-3 py-1`}> cancel</label>
      </div>
    </div>
  );
};

export default ListItemOrder;