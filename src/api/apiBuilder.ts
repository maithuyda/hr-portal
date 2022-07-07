import { AxiosRequestConfig } from 'axios';

export interface ApiBuilder {
  getTvPopular: (params: { [key: string]: any }) => AxiosRequestConfig;
}

const apiBuilder: ApiBuilder = {
  getTvPopular: (params) => ({
    method: 'GET',
    params,
    url: `tv/popular`,
  }),
};

export default apiBuilder;
