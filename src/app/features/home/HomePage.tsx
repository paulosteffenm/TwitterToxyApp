import { useState } from "react";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import BrandComponent from "../../components/brand/BrandComponent";
import SearchComponent from "../../components/search/SearchComponent";
import { Tweet } from "../../interfaces/Tweets";
import agent from "../../api/agent";
import TweetsList from "../../components/tweets/TweetsList";

const HomePage = () => {

  const [tweets, setTweets] = useState<Array<Tweet>>([]);
  const handleSearch = async (searchTerm: string) => {
    console.log(searchTerm);
    const response = await agent.Twitter.list(searchTerm);
    setTweets(response.tweets);
  };

  return (<>
    <NavbarComponent />
    <div className='container'>
      <BrandComponent />
      <SearchComponent handleSearch={handleSearch} />
      {tweets.length !== 0 && <TweetsList tweets={tweets} />}
    </div>

  </>
  );
};

export default HomePage;
