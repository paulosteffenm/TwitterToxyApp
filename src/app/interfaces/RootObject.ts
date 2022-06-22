export interface PublicMetrics {
  retweet_count: number;
  reply_count: number;
  like_count: number;
  quote_count: number;
}

export interface Datum {
  text: string;
  public_metrics: PublicMetrics;
  created_at: Date;
  author_id: string;
  id: string;
}

export interface Meta {
  newest_id: string;
  oldest_id: string;
  result_count: number;
}

export interface RootObject {
  data: Datum[];
  meta: Meta;
}