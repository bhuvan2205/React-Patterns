const SmallListBook = ({ book }) => {
  const { price, name } = book;
  return (
    <div className="my-2 bg-red-200 max-w-fit p-3 rounded-2xl">
      Name: {name}, Price: {price}
    </div>
  );
};

export default SmallListBook;
