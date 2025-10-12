import React from "react";

const StepTwo = ({ onNext }) => {
  return (
    <div>
      <p>Step Two</p>
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onNext({ age: 20 })}
      >
        Next
      </button>
    </div>
  );
};

export default StepTwo;
