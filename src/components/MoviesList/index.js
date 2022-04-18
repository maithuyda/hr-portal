import MovieDetail from './MovieDetail';
import { useSelector } from 'react-redux';

import './index.scss';

const DUMMY_MOVIES = [
    {
        id: 'movie1',
        original_title: 'Moon Knight',
        release_date: 'Mar 30, 2022',
    },
    {
        id: 'movie2',
        original_title: 'Halo',
        release_date: 'Mar 24, 2022',
    },
    {
        id: 'movie3',
        original_title: 'Moon Knight',
        release_date: 'Mar 30, 2022',
    },
    {
        id: 'movie4',
        original_title: 'Moon Knight',
        release_date: 'Mar 30, 2022',
    },
    {
        id: 'movie5',
        original_title: 'Moon Knight',
        release_date: 'Mar 30, 2022',
    },
    {
        id: 'movie6',
        original_title: 'Moon Knight',
        release_date: 'Mar 30, 2022',
    },
];

const MoviesList = (props) => {
    const movie = useSelector((state) => state.movie);
    const type = props.type;
    let movieData = movie[type].payload;
    // console.log(movie);
    if (!movieData) {
        movieData = [];
    }
    console.log(movieData);
    const moviesList = movieData.map((movie) => {
        const title = movie.media_type === 'tv' ? movie.original_name : movie.original_title;
        const releaseDate = movie.media_type === 'tv' ? movie.first_air_date : movie.release_date;

        return (
            <MovieDetail
                key={movie.id}
                id={movie.id}
                title={title}
                releaseDate={releaseDate}
                image={movie.poster_path}
            />
        );
    });
    return <div className="movie-list_wrapper">{moviesList}</div>;
};

export default MoviesList;
