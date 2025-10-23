import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <span className="text-2xl font-bold">{count}</span>
      <div className="flex gap-2">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Increment
        </button>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="bg-red-500 text-white p-2 rounded-md"
        >
          Decrement
        </button>
      </div>
      <br />
    </>
  );
};

export default Counter;
