// eslint-disable-next-line no-unused-vars
const NumberedList = ({ data, sourceName, ItemComponent }) => {
  return (
    <>
      {data?.map((item, i) => (
        <>
          <h4 className="text-xl font-bold">{i}</h4>
          <ItemComponent key={i} {...{ [sourceName]: item }} />
        </>
      ))}
    </>
  );
};

export default NumberedList;
