import { useContext } from "react";
import { Context } from "../context/cart";

export const useCartContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
