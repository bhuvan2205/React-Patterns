// eslint-disable-next-line no-unused-vars
const RegularList = ({ data, sourceName, ItemComponent }) => {
  return (
    <>
      {data?.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;
