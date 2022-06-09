import { useState } from "react";
import agent from "../../app/api/agent";
import SearchComponent from "../search/SearchComponent";

const HomePage = () => {

  const [list, setList] = useState<Array<string>>([]);

  const handleSearch = (searchTerm: string) => {
    console.log(searchTerm);
    agent.Twitter.list();
  };

  return (
    <div>
      <SearchComponent handleSearch={handleSearch}/>
    </div>
  );
};

export default HomePage;