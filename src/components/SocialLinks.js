import React from 'react';

const SocialLinks = ({icon , social, color, likes}) => {
  return (
    <div className={`grid grid-cols-3 self-center place-items-center py-7 px-5 ${color}`}>
      <div className='col-span-2 flex flex-col'>
        {icon}
        <span className='text-left mt-1 py-0'>
          follow us on
        </span>
        <span className='text-left mt-1 py-0'>
          {social}
        </span>
      </div>
      <div className='col-span-1 text-center font-extrabold text-md'>{likes}</div>
    </div>
  );
};

export default SocialLinks;