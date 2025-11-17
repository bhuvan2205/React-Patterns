import { useReducer } from "react";
import { cartReducer, Context } from "./cart";

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { count: 0 });
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
