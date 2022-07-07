import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_KEY = '64e9c0b550ae1b08c54bf65bb08aba0b';
const BASE_URL = 'https://api.themoviedb.org/3/';

const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
  headers: {
    'content-type': 'application/json',
  },
};

const callApi = async <T extends { [key: string]: any }>(apiRequest: AxiosRequestConfig): Promise<T> => {
  const instance: AxiosInstance = axios.create(config);
  try {
    const { data } = await instance.request(apiRequest);
    return Promise.resolve(data);
  } catch (exception) {
    return Promise.reject(exception);
  }
};

export default callApi;
