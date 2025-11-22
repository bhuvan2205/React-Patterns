import { ENDPOINTS } from "../constants/endpoints";

export const fetchUsers = async () => {
  const response = await fetch(ENDPOINTS.USERS);
  const data = await response.json();
  return data?.users;
};
