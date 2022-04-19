import axiosClient from '.';

const movieApi = {
    getPopular: (params) => {
        const url = '/movie/popular';
        return axiosClient.get(url, { params });
    },
    getTrending: (params) => {
        const url = '/trending/movies/day';
        return axiosClient.get(url, { params });
    },
};

export default movieApi;
