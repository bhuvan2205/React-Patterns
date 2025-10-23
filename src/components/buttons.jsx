import React from "react";
import { counterEmitter } from "../emitter/counter";

const Buttons = () => {
  const increment = () => {
    console.log("increment");
    counterEmitter.emit("increment");
  };
  const decrement = () => {
    console.log("decrement");
    counterEmitter.emit("decrement");
  };

  return (
    <div>
      <button onClick={increment} className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold me-2">+</button>
      <button onClick={decrement} className="bg-red-500 text-white px-4 py-2 rounded-md font-bold">-</button>
    </div>
  );
};
export default Buttons;
