import React from "react";
import { useRef } from "react";

const UncontrolledForm = () => {
  const nameInputRef = useRef("");
  const ageInputRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameInputRef, ageInputRef);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Name"
        ref={nameInputRef}
      />
      <br />
      <input
        name="age"
        className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="number"
        placeholder="Age"
        ref={ageInputRef}
      />
      <br />
      <button
        type="submit"
        className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};

export default UncontrolledForm;
