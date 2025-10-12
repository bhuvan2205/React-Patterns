import { API_ENDPOINTS } from "../constants/endpoints";

export const fetchRandomUser = async () => {
  const res = await fetch(
    `${API_ENDPOINTS.USERS}/${Math.floor(Math.random() * 10)}`
  );
  const data = await res.json();
  return data;
};
