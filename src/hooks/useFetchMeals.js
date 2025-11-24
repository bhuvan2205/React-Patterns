import { useRef } from "react";
import { useState } from "react";
import { searchMeals } from "../api/mealApi";
import { didAbort } from "../api";

export const useFetchMeals = () => {
  const [meals, setMeals] = useState([]);
  const abortRef = useRef({});

  const handleError = (error) => {
    if (didAbort(error)) {
      // handle abort
      alert("Request aborted");
    } else {
      // handle other errors
      alert(error?.message || "Something went wrong");
    }
  };

  const fetchMeals = async (query) => {
    try {
      abortRef.current.abort?.();

      const newMeals = await searchMeals(query, {
        abort: (abort) => (abortRef.current.abort = abort),
      });
      setMeals(newMeals || []);
    } catch (error) {
      handleError(error);
    }
  };

  return { meals, fetchMeals };
};
