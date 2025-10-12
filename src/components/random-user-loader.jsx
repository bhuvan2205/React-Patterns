import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { API_ENDPOINTS } from "../constants/endpoints";
import { Children } from "react";
import { isValidElement } from "react";
import { cloneElement } from "react";

const RandomUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${API_ENDPOINTS.USERS}/${Math.floor(Math.random() * 10)}`
      );
      const data = await res.json();
      setUser(data);
    };
    fetchData();
  }, []);

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

export default RandomUserLoader;
