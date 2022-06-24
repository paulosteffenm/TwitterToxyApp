import { Tweet } from "../../interfaces/Tweets";
import TweetCard from "./TweetCard";

interface Props {
  tweets: Array<Tweet>;
};

const TweetsList = ({ tweets }: Props) => {
  return (<div className='mt-3'>
    {tweets.map((tweet) => <TweetCard key={tweet.id} tweet={tweet} />)}
  </div>
  );
};

export default TweetsList;