import MovieDetail from './MovieDetail';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import './index.scss';

const MoviesList = (props) => {
    const movie = useSelector((state) => state.movie);
    const { type, media } = props;

    let movieData = movie[type];
    if (!movieData) {
        movieData = [];
    }
    const movieList = useMemo(() => {
        return movieData.map((movie) => {
            const title = movie.original_title ? movie.title : movie.name;
            const releaseDate = movie.release_date ? movie.release_date : movie.first_air_date;

            return (
                <MovieDetail
                    key={movie.id}
                    id={movie.id}
                    title={title}
                    releaseDate={releaseDate}
                    image={movie.poster_path}
                    media={media}
                />
            );
        });
    }, [movieData, media]);

    return <div className="movie-list_wrapper">{movieList}</div>;
};

export default MoviesList;
