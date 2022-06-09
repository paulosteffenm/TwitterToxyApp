import { useState } from "react";
import SearchComponent from "../search/SearchComponent";

const HomePage = () => {

  const [list, setList] = useState<Array<string>>([]);

  const handleSearch = (searchTerm: string) => {
    console.log(searchTerm);
  };

  return (
    <div>
      <SearchComponent handleSearch={handleSearch}/>
    </div>
  );
};

export default HomePage;