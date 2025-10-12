import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { API_ENDPOINTS } from "../constants/endpoints";
import { Children } from "react";
import { isValidElement } from "react";
import { cloneElement } from "react";

const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${API_ENDPOINTS.USERS}/${userId}`;
      const res = await fetch(url);
      const data = await res.json();
      setUser(data);
    };
    fetchData();
  }, [userId]);

  return (
    <>
      {Children?.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default UserLoader;
