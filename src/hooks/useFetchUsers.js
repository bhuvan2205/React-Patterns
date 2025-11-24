import { useState } from "react";
import { API_STATUS } from "../constants/apiStatus";
import { useApiStatus } from "./useApiStatus";
import { withAsync } from "../helpers/withAsync";
import { useEffect } from "react";
import { fetchUsers } from "../api/users";

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const { setStatus, isLoading, isSuccess, isError } = useApiStatus(
    API_STATUS.IDLE
  );

  const getUsers = async () => {
    setStatus(API_STATUS.LOADING);
    const { data, error } = await withAsync(() => fetchUsers());
    if (error) {
      setStatus(API_STATUS.ERROR);
      return;
    }
    setUsers(data || []);
    setStatus(API_STATUS.SUCCESS);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { users, getUsers, isLoading, isSuccess, isError };
};
