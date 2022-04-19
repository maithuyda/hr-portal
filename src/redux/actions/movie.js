import movieApi from '../../apis/movieApi';
import { movieActions } from '../reducers/movie';

export const fetchLatestVideos = (params, mediaType) => {
    return async (dispatch) => {
        const fetchTrendingMovies = async (params) => {
            const response = await movieApi.getTrending(params, mediaType);
            const data = await response.data.results;
            return data;
        };

        const fetchVideosByMovieId = async (id, params = {}) => {
            const response = await movieApi.getVideos(params, mediaType, id);
            const data = await response.data.results;
            return data;
        };

        try {
            const trendingMovies = await fetchTrendingMovies(params);
            const trendingMoviesData = await trendingMovies.slice(0, 5);
            const trendingMoviesIdList = trendingMoviesData.map((movie) => movie.id);

            Promise.all(
                trendingMoviesIdList.map((id) => {
                    return fetchVideosByMovieId(id);
                }),
            ).then((list) => {
                const trailers = list
                    .map((videos) => videos.find((video) => video.type === 'Trailer' && video.site === 'YouTube'))
                    .filter((video) => video !== undefined);

                dispatch(movieActions.setLatestVideos(trailers));
            });
        } catch (error) {
            console.log('Failed to fetch popular movies list: ', error);
        }
    };
};

export const fetchPopularMovies = (params, mediaType) => {
    return async (dispatch) => {
        const fetchPopularMovies = async (params) => {
            const response = await movieApi.getPopular(params, mediaType);
            const data = await response.data.results;
            return data;
        };

        try {
            const popularMoviesData = await fetchPopularMovies(params);
            dispatch(movieActions.setPopularMovies(popularMoviesData));
        } catch (error) {
            console.log('Failed to fetch popular movies list: ', error);
        }
    };
};

export const fetchTrendingMovies = (params, mediaType) => {
    return async (dispatch) => {
        const fetchTrendingMovies = async (params) => {
            const response = await movieApi.getTrending(params, mediaType);
            const data = await response.data.results;
            return data;
        };

        try {
            const trendingMoviesData = await fetchTrendingMovies(params);
            dispatch(movieActions.setTrendingMovies(trendingMoviesData));
        } catch (error) {
            console.log('Failed to fetch trending movies list: ', error);
        }
    };
};
