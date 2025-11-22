import { useState, useMemo } from "react";
import { API_STATUSES } from "../constants/apiStatus";
import { capitalize } from "../helpers/capitalize";

export const useApiStatus = (currentStatus) => {
  const [status, setStatus] = useState(currentStatus);

  const getApiStatus = (status) => {
    const statusResult = {};
    for (const apiStatus of API_STATUSES) {
      const key = `is${capitalize(apiStatus)}`;
      statusResult[key] = status === apiStatus;
    }
    return statusResult;
  };

  const statuses = useMemo(() => getApiStatus(status), [status]);

  return { setStatus, ...statuses };
};
