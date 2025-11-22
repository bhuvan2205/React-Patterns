export const withAsync = async (fn) => {
  try {
    if (typeof fn !== "function") {
      throw new Error("fn must be a function");
    }
    const data = await fn();
    return { data, error: null };
  } catch (error) {
    let message = "Something went wrong";
    if (error instanceof Error) {
      message = error.message;
    }
    return { data: null, error: message };
  }
};
