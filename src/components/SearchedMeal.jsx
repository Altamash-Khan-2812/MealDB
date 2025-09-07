import { useEffect, useState } from "react";
import RecipeCard from "./CategoryCard";

const MealBySearch = ({ region }) => {
  const [searchedMeals, setSearchedMeals] = useState([]);

  async function fetchMeals() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${region}`
    );
    const data = await res.json();
    setSearchedMeals(data.meals);
    console.log("data", data);
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <section className="mb-10">
      <p className="text-3xl font-normal text-gray-900 border-b-1 border-gray-300 pb-3 mb-10">
        Search for: <span className="text-amber-950 font-serif">{region}</span>
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {searchedMeals.map((meal, index) => {
          return (
            <RecipeCard key={index} className="h-[300px]" img={meal.strMealThumb} title={meal.strMeal} />
          )
        })}
      </ul>
    </section>
  );
};
export default MealBySearch;
