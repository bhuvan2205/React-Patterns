import React from "react";

const LargeListAuthor = ({ author }) => {
  const { name, age, country, books } = author;
  return (
    <>
      <h2 className="text-xl my-1 font-bold">{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  );
};

export default LargeListAuthor;
