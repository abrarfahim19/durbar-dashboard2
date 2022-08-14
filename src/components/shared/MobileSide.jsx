import { useState } from "react";
import { AiFillApple, AiOutlineMenuFold } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Aside from "./Aside";

const MobileSide = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <ImCancelCircle
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      ) : (
        <AiOutlineMenuFold
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-30 flex items-center cursor-pointer right-10 top-6 text-3xl text-red-400 md:hidden"
        />
      )}

      <div
        className={`top-0 right-0 w-[100vw] bg-[#32363f]  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div  className="mt-10">
          <Aside />
        </div>
      </div>
    </>
  );
};
export default MobileSide;
