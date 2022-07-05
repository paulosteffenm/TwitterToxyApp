import { Tweet } from "../../interfaces/Tweets";
import { PieChart, Pie, Cell } from 'recharts';

interface Props {
  tweets: Array<Tweet>;
};

interface ChartData {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}

const TweetsChart = ({ tweets }: Props) => {
  const COLORS = ['#D53343', '#198754'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: ChartData) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pie = [
    { name: 'toxic', value: 0 },
    { name: 'nonToxic', value: 0 },
  ];

  tweets.forEach((tweet) => {
    tweet.results.match ? pie[0].value++ : pie[1].value++;
  });

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={pie}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill='#8884d8'
        dataKey='value'
      >
        {
          pie.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
    </PieChart>
  );
};

export default TweetsChart;