import React from "react";
import { BsThreeDots } from "react-icons/bs";

const DropDownMenu = () => {
  const [states, setStates] = React.useState("hidden");

  return (
    <div className="flex flex-col justify-center">
      <button
        onClick={() => {
          if (states === "hidden") {
            setStates("");
          } else {
            setStates("hidden");
          }
        }}
        className="text-white shadow-slate-600 shadow  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        <BsThreeDots />
      </button>
      <div
        id="dropdown"
        className="relative"
        // style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(289px, 70px);"
      >
        <ul
          className={`py-1 text-sm z-10 w-44 absolute right-1/2 bg-slate-500 rounded divide-y  shadow dark:bg-gray-700 block text-gray-700 dark:text-gray-200 transform ${states}`}
          aria-labelledby="dropdownDefault"
        >
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;
