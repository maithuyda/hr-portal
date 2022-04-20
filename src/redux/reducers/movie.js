import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        trailerMediaType: 'tv',
        popularMediaType: 'tv',
        trendingMediaType: 'tv',
        trailers: [],
        popular: [],
        trending: [],
    },
    reducers: {
        setPopularMedia(state, media_type) {
            state.popularMediaType = media_type.payload;
        },
        setTrendingMedia(state, media_type) {
            state.trendingMediaType = media_type.payload;
        },
        setTrailerMediaType(state, media_type) {
            state.trailerMediaType = media_type.payload;
        },
        setPopularMovies(state, movies) {
            state.popular = movies.payload;
        },
        setTrendingMovies(state, movies) {
            state.trending = movies.payload;
        },
        setLatestVideos(state, videos) {
            state.trailers = videos.payload;
        },
    },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
