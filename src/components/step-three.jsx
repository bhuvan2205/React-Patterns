import React from "react";

const StepThree = ({ onNext }) => {
  return (
    <div>
      <p>Step Three</p>
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onNext({ address: "123 Main St" })}
      >
        Next
      </button>
    </div>
  );
};

export default StepThree;
