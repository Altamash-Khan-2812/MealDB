import { useEffect, useState } from "react";

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
  }, [region]);

  return (
    <section className="mb-10">
      <p className="text-3xl font-normal text-gray-900 border-b-1 border-gray-300 pb-3 mb-10">
        Search for: <span className="text-amber-950 font-serif">{region}</span>
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {searchedMeals.map((meal, index) => {
          return (
            <li className="rounded-lg shadow-lg flex flex-col items-start gap-3 group transition-all duration-700 hover:-translate-y-2.5">
              <img
                src={meal.strMealThumb}
                className="w-full h-40 object-cover rounded-t-lg"
              />
                <p className="text-xl text-amber-900 font-semibold text-center ml-4">{meal.strMeal}</p>
                <span className="bg-amber-100 text-amber-800 px-2 rounded-full ml-4 mb-5">{`# ${region}`}</span>
                <button className=" block rounded-full opacity-0 group-hover:opacity-100 text-amber-800 bg-amber-100 hover:bg-amber-100 hover:cursor-pointer ml-4 px-3 py-1.5 mb-2">
                  View Recipe →
                </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default MealBySearch;
