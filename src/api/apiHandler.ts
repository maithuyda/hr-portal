import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_KEY = '';
const BASE_URL = 'vnditech.com:8080/';

const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
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
