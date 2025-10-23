import React from "react";

const Child = () => {
  throw new Error("Child component error");
  return <div>Child Component</div>;
};

export default Child;
