import axios from "axios";
import queryString from "query-string";

const BASE_URL = "https://api.themoviedb.org/3/";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

export default axiosClient;
