import { createSlice } from '@reduxjs/toolkit';

const tvSlice = createSlice({
    name: 'tv',
    initialState: {
        popularTv: [],
        trendingTv: [],
    },
    reducers: {
        setPopularTv(state, tvs) {
            state.popularMovies = tvs;
        },
        setTrendingTv(state, tvs) {
            state.trendingMovies = tvs;
        },
    },
});

export const tvActions = tvSlice.actions;

export default tvSlice.reducer;
