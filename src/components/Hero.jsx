import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [randomMeal, setRandomMeal] = useState(null);

  function handleTodaysSpecial() {
    navigate(`/today's-special/${randomMeal.strMeal}`,{
      state: randomMeal
    });
  }

  function handleSearchButton() {
    navigate("/search");
  }

  async function fetchRandomMeal() {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const randomMeal = await res.json();
    setRandomMeal(randomMeal.meals[0]); 
    console.log('randomMeal.meals[0]', randomMeal.meals[0])   
  }

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  return (
    <section className="bg-[linear-gradient(to_top,rgba(0,0,0,0.3),rgba(0,0,0,0.2)),url('/Hero-red.jpg')] h-[100vh] bg-center bg-cover text-white flex flex-col items-center justify-center gap-8 px-2">
      <h1 className="text-5xl md:text-6xl text-center lg:text-7xl font-bold font-[playfair] leading-none tracking-normal mb-2">
        Welcome to <span className="text-amber-500">Recipe Finder</span>
      </h1>
      <p className="text-lg md:text-2xl text-center max-w-2xl text-amber-100">
        Bringing you recipes that excite your taste buds and inspire your
        kitchen adventures.
      </p>
      <div className="flex flex-col md:flex-row gap-5">
        <button
          className="flex items-center gap-3 bg-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-800 cursor-pointer transition-all duration-500 hover:-translate-y-2"
          onClick={handleTodaysSpecial}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
              clipRule="evenodd"
            ></path>
          </svg>{" "}
          Today's Special
        </button>
        <button
          className="flex items-center gap-3 text-amber-800 bg-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:-translate-y-2"
          onClick={handleSearchButton}
        >
          <Search /> Search a Recipe
        </button>
      </div>
    </section>
  );
};
export default Hero;
