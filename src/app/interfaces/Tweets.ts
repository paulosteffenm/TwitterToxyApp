export interface Metrics {
  retweet_count: number;
  reply_count: number;
  like_count: number;
  quote_count: number;
}

export interface Probabilities {
  0: number;
  1: number;
}

export interface Results {
  probabilities: Probabilities;
  match: boolean;
}

export interface Tweet {
  text: string;
  metrics: Metrics;
  id: string;
  createdAt: Date;
  results: Results;
}

export interface Tweets {
  tweets: Tweet[];
}
