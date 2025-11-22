import { useState } from "react";
import { API_STATUS } from "../constants/apiStatus";
import { fetchUsers } from "../api";

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(API_STATUS.IDLE);

  const getUsers = async () => {
    setStatus(API_STATUS.LOADING);
    try {
      const users = await fetchUsers();
      setUsers(users);
      setStatus(API_STATUS.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(API_STATUS.ERROR);
    }
  };

  return { users, status, getUsers };
};
