import axiosClient from '.';

const movieApi = {
    getPopular: (params, media_type = 'tv') => {
        const url = `/${media_type}/popular`;
        return axiosClient.get(url, { params });
    },
    getTrending: (params, media_type = 'tv') => {
        const url = `/trending/${media_type}/day`;
        return axiosClient.get(url, { params });
    },
    getVideos: (params, media_type = 'tv', id) => {
        const url = `/${media_type}/${id}/videos`;
        return axiosClient.get(url, { params });
    },
};

export default movieApi;
