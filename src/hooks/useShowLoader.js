import { API_STATUSES } from "../constants/apiStatus";
import { capitalize } from "../helpers/capitalize";

export const useApiStatus = (props) => {
  const { status } = props || {};

  const getApiStatus = (status) => {
    const statuses = {};
    for (const apiStatus of API_STATUSES) {
      const key = `is${capitalize(apiStatus)}`;
      statuses[key] = status === apiStatus;
    }
    return statuses;
  };

  return { ...getApiStatus(status) };
};
