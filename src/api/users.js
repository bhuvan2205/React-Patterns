import { ENDPOINTS } from "../constants/endpoints";
import api from ".";

export const fetchUsers = async () => {
  const response = await api.get(ENDPOINTS.USERS);
  return response?.data?.users;
};
