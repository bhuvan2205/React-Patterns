import { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, age);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        name="age"
        className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
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

export default ControlledForm;
