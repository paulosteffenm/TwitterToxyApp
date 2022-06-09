import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://api.twitter.com/labs/2';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
};

const Twitter = {
  list: () => requests.get<Array<any>>('/tweets'),
};

const agent = {
  Twitter,
};

export default agent;