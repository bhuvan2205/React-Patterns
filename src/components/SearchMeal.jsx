import { useFetchMeals } from "../hooks/useFetchMeals";
import { useState, useEffect } from "react";

export const SearchMeal = () => {
  const [query, setQuery] = useState("");
  const { meals, fetchMeals } = useFetchMeals();

  useEffect(() => {
    fetchMeals(query);
  }, [query]);

  return (
    <div className="mb-4 m-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a meal"
        className="border border-gray-300 rounded-md p-2"
      />
      <button
        className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md cursor-pointer mx-2"
        onClick={() => fetchMeals(query)}
      >
        Search
      </button>
      <div className="mt-4 overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {meals?.map((meal) => (
            <div
              key={meal?.idMeal}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-bold text-gray-800">
                {meal?.strMeal}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
