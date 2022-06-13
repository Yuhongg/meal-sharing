import React, { useState, useEffect } from "react";
import "./HomePage.css";

export function MealsList() {
  const [meal, setMeal] = useState();
  console.log("meal", meal);

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    const fetchMeal = await fetch(`/api/meals/id`);
    const meal = await fetchMeal.json();
    setMeal(meal[0]);
  };

  return (
    <div className="meal">
      <button>Book meal </button>
    </div>
  );
}
