import { Fragment } from 'react';
import MovieDetail from './MovieDetail';

import './index.scss';

const DUMMY_MOVIES = [
    {
        id: 'movie1',
        title: 'Moon Knight',
        releaseDate: 'Mar 30, 2022',
    },
    {
        id: 'movie2',
        title: 'Halo',
        releaseDate: 'Mar 24, 2022',
    },
    {
        id: 'movie3',
        title: 'Moon Knight',
        releaseDate: 'Mar 30, 2022',
    },
    {
        id: 'movie4',
        title: 'Moon Knight',
        releaseDate: 'Mar 30, 2022',
    },
    {
        id: 'movie5',
        title: 'Moon Knight',
        releaseDate: 'Mar 30, 2022',
    },
    {
        id: 'movie6',
        title: 'Moon Knight',
        releaseDate: 'Mar 30, 2022',
    },
];

const MoviesList = (props) => {
    const moviesList = DUMMY_MOVIES.map((movie) => (
        <MovieDetail key={movie.id} id={movie.id} title={movie.title} releaseDate={movie.releaseDate} />
    ));
    return <div className="movie-list_wrapper">{moviesList}</div>;
};

export default MoviesList;
