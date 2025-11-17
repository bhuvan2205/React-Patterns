import { useCartContext } from "../hooks/useCartContext";

const Buttons = () => {
  const { dispatch } = useCartContext();
  return (
    <div className="flex gap-4 items-center justify-center">
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="p-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-w-[60px]"
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="p-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 active:bg-red-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 min-w-[60px]"
      >
        -
      </button>
    </div>
  );
};

export default Buttons;
