import { Link } from 'react-router-dom';
import Profile from '../Profile';

import './index.scss';

const MovieHeader = (props) => {
    const { data } = props;

    if (!data || data.length === 0) {
        return;
    } else {
        const movieData = data.movieData;
        const creditsData = data.credits;
        const coreCrew = creditsData.crew.filter((crew) => crew.department === 'Directing');
        const createProfileList = (crewData) => {
            return crewData.map((crew) => (
                <Profile key={`person-${crew.id}`} id={crew.id} name={crew.name} job={crew.job} />
            ));
        };
        const releaseDate = new Date(movieData.release_date);
        const formattedDate = releaseDate.toLocaleDateString('en-US');
        const releaseYear = releaseDate.getFullYear();
        const createGenreList = (genreData) => {
            return genreData.map((genre) => (
                <Link key={`genre-${genre.id}`} to={`/genre/${genre.id}`}>
                    {genre.name}
                </Link>
            ));
        };
        const runTime = `${Math.floor(movieData.runtime / 60)}h ${movieData.runtime % 60}m`;
        return (
            <div
                className="detail-header_wrapper"
                style={{
                    backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movieData.backdrop_path}')`,
                }}>
                <div className="background-overlay">
                    <div className="detail-header-width">
                        <div className="detail-header">
                            <div className="poster">
                                <img
                                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieData.poster_path}`}
                                    alt={movieData.title}
                                />
                            </div>
                            <div className="header-content_wrapper">
                                <div className="header-content">
                                    <div className="title">
                                        <h2>
                                            <a href="/movie/338953-fantastic-beasts-the-secrets-of-dumbledore">
                                                {movieData.title}
                                            </a>
                                            <span className="release-date">({releaseYear})</span>
                                        </h2>
                                    </div>
                                    <div className="facts">
                                        <span className="certification">PG-13</span>
                                        <span className="release">{formattedDate} (US)</span>
                                        <span className="genres">{createGenreList(movieData.genres)}</span>
                                        <span className="runtime">{runTime}</span>
                                    </div>
                                    <ul className="actions"></ul>
                                    <div className="header_info">
                                        <h3 className="tagline">{movieData.tagline}</h3>
                                        <h3>Overview</h3>
                                        <div className="overview">
                                            <p>{movieData.overview}</p>
                                        </div>
                                        <ol className="people">{createProfileList(coreCrew)}</ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default MovieHeader;
