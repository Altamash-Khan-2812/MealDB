import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const [cuisines, setCuisines] = useState([]);

  async function fetchCuisines() {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    const cuisines = await res.json();
    setCuisines(cuisines.meals);
  }

  useEffect(() => {
    fetchCuisines();
  }, []);

  return (
    <section>
      <button onClick={() => window.history.back()}>Back</button>
      <h2>Find Your Perfect Recipe</h2>
      <div>
        <Search />
        <input type="text" placeholder="Search for a region or area..." />
      </div>
      <button>Search Recipes</button>

      <div>
        <h4>How to Search</h4>
        <ul>
          {cuisines.map((cuisine, index) => {
            console.log(cuisine)
            return <li key={index}>{cuisine.strArea}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default SearchPage;
