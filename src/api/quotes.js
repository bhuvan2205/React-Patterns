import { ENDPOINTS } from "../constants/endpoints";

export const getTopQuotes = async () => {
  const response = await fetch(ENDPOINTS.QUOTES);
  const data = await response.json();
  return data;
};
