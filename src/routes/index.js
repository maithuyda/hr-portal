import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Movie from '../pages/Movie';
import TvShows from '../pages/TvShows';

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/movie/:movieId" element={<Movie media="movie" />} />
                <Route path="/tv" element={<TvShows />} />
                <Route path="/tv/:tvId" element={<TvShows />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoute;
