import React from "react";

const Stat = (props) => {
  const { img, text, color, number } = props;
  return (
    <div className="flex justify-around items-center m-3">
      <img src={img} alt="passed" />
      <div className="flex flex-col justify-center items-start mx-3">
        <h2 className={`text-2xl text-${color}-500`}>{number}</h2>
        <p className="text-base text-white">{text}</p>
      </div>
    </div>
  );
};

export default Stat;
