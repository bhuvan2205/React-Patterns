import React from "react";

export const getDataFromLocalStorage = (key) => {
  return localStorage?.getItem(key);
};
