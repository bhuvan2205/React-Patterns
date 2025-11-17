import { useCartContext } from "../hooks/useCartContext";

const DisplayCount = () => {
  const { state } = useCartContext();
  return (
    <div className="text-2xl font-bold text-center">
      <p className="text-4xl font-bold">Count: {state.count}</p>
    </div>
  );
};

export default DisplayCount;
