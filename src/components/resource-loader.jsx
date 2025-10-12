import { isValidElement } from "react";
import { cloneElement } from "react";
import { Children } from "react";
import { useEffect, useState } from "react";

const ResourceLoader = ({ children, resourceUrl, resourceName }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(resourceUrl);
      const data = await res.json();
      setResource(data);
    };
    fetchData();
  }, [resourceUrl]);

  return (
    <>
      {Children?.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};

export default ResourceLoader;
