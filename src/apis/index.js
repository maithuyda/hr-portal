import axios from 'axios';
import queryString from 'query-string';

const API_KEY = '64e9c0b550ae1b08c54bf65bb08aba0b';
const BASE_URL = 'https://api.themoviedb.org/3/';

const axiosClient = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: 'en-US',
    },
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

export default axiosClient;
