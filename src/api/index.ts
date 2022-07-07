import { IGetTvPopularResponse } from 'shared/types';
import apiBuilder from './apiBuilder';
import callApi from './apiHandler';

interface ApiWorker {
  getPopular: (params: { [key: string]: any }) => Promise<IGetTvPopularResponse>;
}

const api: ApiWorker = {
  getPopular: (params) => callApi<IGetTvPopularResponse>(apiBuilder.getTvPopular(params)),
};

export default api;
