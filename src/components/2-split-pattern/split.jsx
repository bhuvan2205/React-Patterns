import React from "react";

const Split = ({ fraction = "1/2", children }) => {
  const templates = {
    "1/2": "grid-cols-2",
    "1/3": "grid-cols-3",
    "2/3": "grid-cols-3",
  };

  return <div className={`grid ${templates[fraction]}`}>{children}</div>;
};

export default Split;
