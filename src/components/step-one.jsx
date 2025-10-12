import React from "react";

const StepOne = ({ onNext }) => {
  return (
    <div>
      <p>Step One</p>
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onNext({ name: "John Doe" })}
      >
        Next
      </button>
    </div>
  );
};

export default StepOne;
