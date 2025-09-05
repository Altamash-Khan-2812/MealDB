import { useLocation } from "react-router-dom";
import BackButton from "./BackButton";
import { useState } from "react";

const SingleMeal = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  let ingredientsArr = [];
  const meal = location.state;
  console.log("meal", meal);

  for (let i = 0; i <= 20; i++) {
    if (meal?.[`strIngredient${i}`] && meal?.[`strMeasure${i}`]) {
      ingredientsArr.push({
        ingredient: meal?.[`strIngredient${i}`],
        measure: meal?.[`strMeasure${i}`],
      });
    }
  }

  return (
    <section className="w-6xl mx-auto mt-14">
      <BackButton />
      <div className="flex gap-8 my-14">
        <img src={meal.strMealThumb} className="rounded-2xl w-[50%] h-full" />
        <div className="w-[50%] flex flex-col justify-between">
          <h2 className="text-4xl font-semibold font-[inter] text-gray-900 mb-4">
            {meal.strMeal}
          </h2>
          <div className="flex gap-4 mb-6">
            <p className="bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-sm font-medium font-[inter] leading-none">
              {meal.strCategory}
            </p>
            <p className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium font-[inter] leading-none">
              {meal.strArea}
            </p>
          </div>
          <p className=" text-lg text-gray-700 font-[inter] mb-10">
            A delicious {meal.strMeal.toLowerCase()} recipe that you will love!
          </p>
          <div className="border-1 border-t-0 bg-white border-gray-200 p-5 pt-0 rounded-b-lg">
            <p className="text-3xl font-semibold text-gray-900 border-b-1 pb-2 mb-5">
              Instructions
            </p>
            <p className="text-lg leading-normal text-gray-700 mb-2">
              {expanded
                ? meal.strInstructions
                : `${meal.strInstructions.substring(0, 300)}...`}
            </p>
            <button
              className="text-blue-600 text-lg hover:underline w-full text-left hover:text-blue-800 cursor-pointer focus:outline-none border-b-1 pb-7"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
            <p className="text-xl text-gray-800 pt-5 mb-3">Source</p>
            <a
              href={meal.strSource}
              target="_blank"
              className="text-orange-600 hover:text-orange-700 hover:underline"
            >
              {meal.strSource}
            </a>
          </div>
        </div>
      </div>
      <a
        href={meal.strYoutube}
        target="_blank"
        className="flex items-center justify-center gap-3 rounded-lg py-3 bg-red-600 hover:bg-red-700 text-xl text-white"
      >
        <ion-icon name="logo-youtube"></ion-icon> Watch on Youtube
      </a>

      <ul className="border-1 border-gray-200 shadow-sm border-t-0 rounded-b-lg p-5 mb-10 flex flex-col gap-3">
        <p className="text-3xl font-semibold text-gray-900 pb-3 border-b-1 border-gray-200">Ingredients</p>
        {ingredientsArr.map((ingredient, index) => {
          return (
            <li key={index} className="flex gap-3 mt-2">
              <span className="w-6 h-6 bg-orange-100 font-[inter] text-orange-800 rounded-full flex items-center justify-center">
                {index + 1}
              </span>
              <p className="text-gray-700 font-[inter]">
                {ingredient.measure} {ingredient.ingredient}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SingleMeal;
