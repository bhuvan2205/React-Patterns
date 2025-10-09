// eslint-disable-next-line no-unused-vars
const ScreenSplitter = ({ Left, Right }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div>
        <Left />
      </div>
      <div className="col-span-2">
        <Right />
      </div>
    </div>
  );
};

export default ScreenSplitter;
