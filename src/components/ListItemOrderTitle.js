import React from 'react';

const ListItemOrderTitle = () => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-6 my-2 text-left py-3 px-6 place-content-center italic'>
      <div className='text-left hidden md:block'>No</div>
      <div className='text-left hidden md:block'>order id</div>
      <div className='text-left'>Name</div>
      <div className='text-left hidden md:block'>Date Time</div>
      <div className='text-left'>Price</div>
      <div className='text-right'>Action
      </div>
    </div>
  );
};

export default ListItemOrderTitle;