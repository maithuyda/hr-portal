import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "tv",
  initialState: {
    popularTv: [],
    trendingTv: [],
  },
  reducers: {
    setPopularTv(state, movies) {
      state.popularMovies = movies;
    },
    setTrendingTv(state, movies) {
      state.trendingMovies = movies;
    },
  },
});

export const tvActions = tvSlice.actions;

export default tvSlice.reducer;
