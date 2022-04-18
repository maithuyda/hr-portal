import { createStore } from "redux";
import rootReducer from "../reducers";
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../reducers/movie";

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export default store;
