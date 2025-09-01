import { useLocation } from "react-router-dom";
import BackButton from "./BackButton";

const SingleMeal = () => {
  const location = useLocation();
  const meal = location.state;
  console.log(meal);
  

  return (
    <section className="w-6xl mx-auto mt-14">
      <BackButton />
      <div className="flex gap-5">
        <img src={meal.strMealThumb} />
        <div>
            <h2>{meal.strMeal}</h2>
            <p>{meal.strCategory}</p>
            <p>{meal.strArea}</p>
            <p>{meal.strTags}</p>
            <div>
                <p>Instructions</p>
                <p>{meal.strInstructions}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SingleMeal;
