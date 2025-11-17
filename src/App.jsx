import { useReducer } from "react";
import { cartReducer, Context } from "./context/cart";
import Buttons from "./components/buttons";
import DisplayCount from "./components/display-count";

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, { count: 0 });
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Context.Provider value={{ state, dispatch }}>
        <div className="flex flex-col gap-4 items-center justify-center">
          <DisplayCount />
          <Buttons />
        </div>
      </Context.Provider>
    </main>
  );
};

export default App;
