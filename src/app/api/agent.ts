import axios, { AxiosResponse } from 'axios';
import { Tweets } from '../interfaces/Tweets';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.timeout = 0;
const config = {
  headers: {
    Accept: 'application/json',
  },
};

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url, config).then(responseBody),
};

const Twitter = {
  list: (query: string) => requests.get<Tweets>(`/api?query=${query}`),
  lucky: () => requests.get<Tweets>('/lucky'),
};

const agent = {
  Twitter,
};

export default agent;