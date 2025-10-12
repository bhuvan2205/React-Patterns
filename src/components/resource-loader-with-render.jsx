import { useEffect, useState } from "react";

const ResourceLoaderWithRender = ({ getData, render }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setResource(data);
    };
    fetchData();
  }, [getData]);

  return render(resource);
};

export default ResourceLoaderWithRender;
