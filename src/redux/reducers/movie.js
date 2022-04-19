import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        trailerMediaType: 'tv',
        popularMediaType: 'tv',
        trendingMediaType: 'tv',
        latestTrailers: [],
        popularMovies: [],
        trendingMovies: [],
    },
    reducers: {
        setPopularMedia(state, media_type) {
            state.popularMediaType = media_type;
        },
        setTrendingMedia(state, media_type) {
            state.trendingMediaType = media_type;
        },
        setTrailerMediaType(state, media_type) {
            state.trailerMediaType = media_type;
        },
        setPopularMovies(state, movies) {
            state.popularMovies = movies;
        },
        setTrendingMovies(state, movies) {
            state.trendingMovies = movies;
        },
        setLatestVideos(state, videos) {
            state.latestTrailers = videos;
        },
    },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
