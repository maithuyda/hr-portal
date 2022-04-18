import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        popularMovies: [],
        trendingMovies: [],
    },
    reducers: {
        setPopularMovies(state, movies) {
            state.popularMovies = movies;
        },
        setTrendingMovies(state, movies) {
            state.trendingMovies = movies;
        },
    },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
