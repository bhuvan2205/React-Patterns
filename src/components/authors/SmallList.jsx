const SmallListAuthor = ({ author }) => {
  const { name, age } = author;
  return (
    <p className="my-2 bg-blue-200 max-w-fit p-3 rounded-2xl">
      Name:{name}, Age: {age}
    </p>
  );
};

export default SmallListAuthor;
