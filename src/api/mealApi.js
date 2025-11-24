import api from ".";

const URLS = {
  SEARCH_MEALS: "search.php",
};

export const searchMeals = async (query, config = {}) => {
  const response = await api.get(URLS.SEARCH_MEALS, {
    baseURL: import.meta.env.VITE_MEAL_API_URL,
    params: { s: query },
    ...config,
  });
  
  return response?.data?.meals;
};
