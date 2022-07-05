import { Tweet } from '../../interfaces/Tweets';
import LikeSvg from '../svgs/LikeSvg';
import QuoteSvg from '../svgs/QuoteSvg';
import ReplySvg from '../svgs/ReplySvg';
import RetweetSvg from '../svgs/RetweetSvg';
import ToxicSvg from '../svgs/ToxicSvg';
import SvgDiv from './SvgDiv';

interface Props {
  tweet: Tweet;
}

const TweetCard = ({ tweet }: Props) => {
  const formattedDate = new Date(tweet.createdAt).toLocaleDateString();

  const isToxic = tweet.results.match;

  const classDivCard = `card text-white mb-3 ${isToxic ? 'bg-danger' : 'bg-success'}`;

  return (
    <div className={classDivCard}>
      <div className='card-header'>{`Created At: ${formattedDate}`}</div>
      <div className='card-body'>
        <h5 className='card-title'>{tweet.id}</h5>
        <p className='card-text'>{tweet.text}</p>
      </div>
      <div className='card-footer bg-transparent'>
        <div className='d-flex justify-content-start gap-5'>

          <SvgDiv value={tweet.metrics.retweet_count}>
            <RetweetSvg />
          </SvgDiv>

          <SvgDiv value={tweet.metrics.reply_count}>
            <ReplySvg />
          </SvgDiv>

          <SvgDiv value={tweet.metrics.like_count}>
            <LikeSvg />
          </SvgDiv>

          <SvgDiv value={tweet.metrics.quote_count}>
            <QuoteSvg />
          </SvgDiv>

          <SvgDiv value={isToxic ? 'Yes' : 'No'}>
            <ToxicSvg />
          </SvgDiv>

        </div>
      </div>
    </div >
  );
};

export default TweetCard;