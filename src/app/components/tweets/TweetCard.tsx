import { Tweet } from '../../interfaces/Tweets';
import LikeSvg from '../svgs/LikeSvg';
import QuoteSvg from '../svgs/QuoteSvg';
import ReplySvg from '../svgs/ReplySvg';
import RetweetSvg from '../svgs/RetweetSvg';

interface Props {
  tweet: Tweet;
}

const TweetCard = ({ tweet }: Props) => {
  const formattedDate = new Date(tweet.createdAt).toLocaleDateString();
  return (
    <div className='card text-white bg-dark mb-3'>
      <div className='card-header'>{`Created At: ${formattedDate}`}</div>
      <div className='card-body'>
        <h5 className='card-title'>{tweet.id}</h5>
        <p className='card-text'>{tweet.text}</p>
      </div>
      <div className='card-footer bg-transparent'>
        <div className='d-flex justify-content-start gap-5'>
          <div>
            <RetweetSvg /> {tweet.metrics.retweet_count}
          </div>
          <div>
            <ReplySvg /> {tweet.metrics.reply_count}
          </div>
          <div>
            <LikeSvg /> {tweet.metrics.like_count}
          </div>
          <div>
            <QuoteSvg /> {tweet.metrics.quote_count}
          </div>
        </div>
      </div>
    </div >
  );
};

export default TweetCard;