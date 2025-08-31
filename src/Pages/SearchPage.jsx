import BackButton from "@/components/BackButton";
import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const [cuisines, setCuisines] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchCuisines() {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      const cuisines = await res.json();
      setCuisines(cuisines.meals);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchCuisines();
  }, []);

  return (
    <section className="w-4xl mx-auto  pt-10">
      <BackButton />
      <h2 className="text-4xl text-gray-800 font-semibold text-center mb-8 mt-12">
        Find Your Perfect Recipe
      </h2>
      <div className="mb-5 border-1 border-gray-300 shadow-sm flex items-center gap-3 py-4 rounded-lg px-3 focus-within:ring-2 focus-within:ring-orange-400 focus-within:border-1 focus-within:border-black focus-within:shadow-lg">
        <Search className="text-gray-400 w-5" />
        <input
          type="text"
          placeholder="Search for a region or area....."
          className="text-xl outline-0 w-full text-gray-700"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <X
          className={`text-gray-500 hover:text-gray-900 ${
            inputValue.trim().length > 0 ? "block" : "hidden"
          }`}
          onClick={() => setInputValue("")}
        />
      </div>
      <button className="text-lg bg-orange-500 text-white font-[inter] w-full py-3 shadow-md rounded-lg cursor-pointer hover:bg-orange-600 mb-8">
        Search Recipes
      </button>

      <div className="bg-blue-50 px-7 py-8 rounded-lg">
        <h4 className="text-gray-900 font-semibold font-[inter] text-2xl mb-4">
          How to Search
        </h4>
        <ul className="flex flex-wrap gap-6">
        {loading ?
           Array.from({length: 20}).map((item, index) => {
            return(
               <li
                  key={index}
                  className="bg-orange-200 text-orange-800 w-20 h-8 font-[inter] rounded-full shadow-lg"
                ></li>
            )
           })
          :
            cuisines.map((cuisine, index) => {
              return (
                <li
                  key={index}
                  className="bg-orange-100 text-orange-800 px-2 py-1 font-[inter] rounded-full"
                >
                  {cuisine.strArea}
                </li>
              );
            })}
          </ul>
      </div>
    </section>
  );
};

export default SearchPage;
