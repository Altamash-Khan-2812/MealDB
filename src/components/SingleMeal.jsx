import { useLocation } from "react-router-dom";
import BackButton from "./BackButton";

const SingleMeal = () => {
  const location = useLocation();
  const meal = location.state;
  console.log(meal);

  return (
    <section className="w-6xl mx-auto mt-8">
      <BackButton />
      <div className="flex gap-8 mt-10">
        <img src={meal.strMealThumb} className="rounded-2xl w-[50%] h-full" />
        <div className="w-[50%]">
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
            A delicious {meal.strMeal} recipe that you will love!
          </p>
          <div className="border-1 border-t-0 border-gray-200 px-5">
            <p className="text-3xl font-semibold text-gray-900 border-b-1">Instructions</p>
            <p>{meal.strInstructions.slice(0, 400)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleMeal;
