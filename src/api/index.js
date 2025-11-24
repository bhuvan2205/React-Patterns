import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const didAbort = (error) => axios.isCancel(error) && { aborted: true };

const getCancelSource = () => axios.CancelToken.source();

export const isApiError = (error) => axios.isAxiosError(error);

const withAbortController = (fn) => {
  const executor = async (...args) => {
    const originalConfig = args[args.length - 1];
    const { abort, ...config } = originalConfig;

    if (typeof abort === "function") {
      const { cancel, token } = getCancelSource();
      config.cancelToken = token;
      abort(cancel);
    }

    try {
      if (args.length > 2) {
        const [url, body] = args;
        return await fn(url, body, config);
      }
      const [url] = args;
      return await fn(url, config);
    } catch (error) {
      if (didAbort(error)) {
        return { aborted: true };
      }
      throw error;
    }
  };

  return executor;
};

const api = (axios) => ({
  get: (url, config = {}) => withAbortController(axios.get)(url, config),
  post: (url, data, config = {}) =>
    withAbortController(axios.post)(url, data, config),
  patch: (url, data, config = {}) =>
    withAbortController(axios.patch)(url, data, config),
  put: (url, data, config = {}) =>
    withAbortController(axios.put)(url, data, config),
  delete: (url, config = {}) => withAbortController(axios.delete)(url, config),
});

export default api(axiosInstance);
