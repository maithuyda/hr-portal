import movieApi from "../../apis/movieApi";
import { movieActions } from "../reducers/movie";

export const fetchPopularMovies = (params) => {
  return async (dispatch) => {
    const fetchPopularMovies = async (params) => {
      const response = await movieApi.getPopular(params);
      const data = await response.data.results;
      return data;
    };

    try {
      const popularMoviesData = await fetchPopularMovies(params);
      dispatch(movieActions.setPopularMovies(popularMoviesData));
    } catch (error) {
      console.log("Failed to fetch popular movies list: ", error);
    }
  };
};

export const fetchTrendingMovies = (params) => {
  return async (dispatch) => {
    const fetchTrendingMovies = async (params) => {
      const response = await movieApi.getTrending(params);
      const data = await response.data.results;
      return data;
    };

    try {
      const trendingMoviesData = await fetchTrendingMovies(params);
      dispatch(movieActions.setTrendingMovies(trendingMoviesData));
    } catch (error) {
      console.log("Failed to fetch trending movies list: ", error);
    }
  };
};
