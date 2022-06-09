import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const config = {
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION}`
  },
};

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url,config).then(responseBody),
};

const Twitter = {
  list: () => requests.get<Array<any>>('/search/recent?query=from:twitterdev'),
};

const agent = {
  Twitter,
};

export default agent;