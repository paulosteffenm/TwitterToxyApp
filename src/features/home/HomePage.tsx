import { useState } from "react";
import agent from "../../app/api/agent";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import BrandComponent from "../../components/brand/BrandComponent";
import SearchComponent from "../../components/search/SearchComponent";

const HomePage = () => {

  const [list, setList] = useState<Array<string>>([]);

  const handleSearch = async (searchTerm: string) => {
    console.log(searchTerm);
    const response = await agent.Twitter.list(searchTerm);
    setList(response.data.map((tweet) => tweet.text));
  };

  return (<>
    <NavbarComponent />
    <div className='container'>
      <BrandComponent />
      <SearchComponent handleSearch={handleSearch} />
      {list.length !== 0 && list.map((text) => <p className='text-white' key={text}>{text}</p>)}
    </div>

  </>
  );
};

export default HomePage;