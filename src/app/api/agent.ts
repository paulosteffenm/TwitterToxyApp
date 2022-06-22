import axios, { AxiosResponse } from 'axios';
import { RootObject } from '../interfaces/RootObject';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
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
  list: (query: string) => requests.get<RootObject>(query),
};

const agent = {
  Twitter,
};

export default agent;