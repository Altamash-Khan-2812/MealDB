import SearchComponent from "@/components/Search";
import MealBySearch from "@/components/SearchedMeal";
import { useState } from "react";

const SearchPage = () => {
  const [searchRegion, setSearchRegion] = useState("");

  return (
    <div className="w-4xl mx-auto">
      <SearchComponent setSearchRegion={setSearchRegion}/>
      {searchRegion && <MealBySearch region={searchRegion} />}
    </div>
  );
};

export default SearchPage;
