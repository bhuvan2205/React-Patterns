import React from "react";

const isObject = (value) => typeof value === "object" && value !== null;

const RecursiveComponent = ({ data }) => {
  if (!isObject(data)) {
    return <li key={data} className="p-2 bg-blue-200 my-3 w-[100px] text-center">{data}</li>;
  }

  const pairs = Object.entries(data);
  return (
    <>
      {pairs.map(([key, value]) => (
        <div className="flex flex-col gap-2 bg-amber-200 my-3 w-sm overflow-hidden" key={key}>
          <li key={key}>|--{key}</li>
          <ul className="pl-12">
            <RecursiveComponent key={key} data={value} />
          </ul>
        </div>
      ))}
    </>
  );
};

export default RecursiveComponent;
