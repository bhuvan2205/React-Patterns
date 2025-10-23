import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { counterEmitter } from "../emitter/counter";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = () => {
      setCount(prev => prev + 1);
    };
    const decrement = () => {
      setCount(prev => prev - 1);
    };

    counterEmitter.on("increment", increment);
    counterEmitter.on("decrement", decrement);

    return () => {
      counterEmitter.off("increment", increment);
      counterEmitter.off("decrement", decrement);
    };
  }, []);

  return <div>Count: {count}</div>;
};

export default Counter;
