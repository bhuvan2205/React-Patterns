/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

const IncludeUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const fetchUser = async () => {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const data = await response.json();
        setUser(data);
      };
      fetchUser();
    }, []);

    return <Component user={user} {...props} />;
  };
};

export default IncludeUser;
