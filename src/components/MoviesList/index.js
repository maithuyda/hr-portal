import MovieDetail from './MovieDetail';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import './index.scss';

const MoviesList = (props) => {
    const movie = useSelector((state) => state.movie);
    const type = props.type;
    let movieData = movie[type].payload;
    if (!movieData) {
        movieData = [];
    }
    const movieList = useMemo(() => {
        return movieData.map((movie) => {
            const title = movie.original_title ? movie.original_title : movie.original_name;
            const releaseDate = movie.release_date ? movie.release_date : movie.first_air_date;

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
    }, [movieData]);

    return <div className="movie-list_wrapper">{movieList}</div>;
};

export default MoviesList;
