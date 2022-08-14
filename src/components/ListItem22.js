import React from "react";

const ListItem22 = () => {
  function get_random(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  const list = ["red", "green", "blue"];
  return (
    <div className="grid grid-cols-2 gap-2 py-3 border-b-2 border-b-slate-500 text-sm">
      <div className="self-center">
        <p className="font-bold">Chicken Burger</p>
        <p className="">Chicken Burger</p>
      </div>

      <div className="self-center place-self-end pr-4">
        <label className={`rounded-xl bg-${get_random(list)}-700 p-1 px-3`}>
          $399
        </label>
      </div>
    </div>
  );
};

export default ListItem22;
