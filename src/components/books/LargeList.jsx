import React from "react";

const LargeListBook = ({ book }) => {
  const { price, name, title, pages } = book;

  return (
    <div className="bg-yellow-200 my-3 w-[300px] p-4 rounded-3xl">
      <h2 className="text-2xl">Name: {name}</h2>
      <p>Price: ${price}</p>
      <h3 className="text-lg">Title: {title}</h3>
      <p>No of Pages: {pages}</p>
    </div>
  );
};

export default LargeListBook;
