import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import RecipeCard from "./RecipeCard";

const CategoryList = () => {
  const [categories, setCateogries] = useState([]);
  const API = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const fetchMealByCateogries = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setCateogries(data.categories);
  };

  useEffect(() => {
    fetchMealByCateogries();
  }, []);

  return (
    <section className="bg-amber-100 py-16 px-5 md:px-20 text-center">
      <h2 className="font-[playfair] text-amber-950 font-bold text-5xl mb-18">
        Browse by Category
      </h2>
      <div className="border border-amber-500 flex items-center gap-3 w-fit rounded-full py-3 pl-5 bg-white shadow-md focus-within:bg-amber-50 mx-auto mb-10">
        <Search className="text-amber-950 font-bold w-5 h-5" />
        <input
          className="text-amber-950 outline-0 rounded-full placeholder:text-amber-700 font-[inter] text-base w-full"
          placeholder="Search for Category"
        />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap-10">
        {
          categories.map((item, index) => {
            return (
              <li key={index}>
                <RecipeCard title={item.strCategory} img={item.strCategoryThumb} desc={item.strCategoryDescription}/>
              </li>
            )
          })
        }
      </ul>
    </section>
  );
};

export default CategoryList;
