import React from "react";

const Layers = ({ gutter = 0, children }) => {
  const gaps = {
    0: "gap-0",
    1: "gap-1",
    2: "gap-2",
    4: "gap-4",
  };
  return <div className={`grid ${gaps[gutter]}`}>{children}</div>;
};

export default Layers;
