import { Link } from 'react-router-dom';

import './index.scss';

const MovieHeader = (props) => {
    const { data } = props;
    if (!data || data.length === 0) {
        return;
    } else {
        const releaseDate = new Date(data.release_date);
        const formattedDate = releaseDate.toDateString('en-US');
        const releaseYear = releaseDate.getFullYear();
        const createGenreList = (genreData) => {
            return genreData.map((genre) => <Link to={`/genre/${genre.id}`}>{genre.name}</Link>);
        };
        const runTime = `${data.runtime / 60}h ${data.runtime % 60}m`;
        console.log(data);
        return (
            <div className="detail-header_wrapper">
                <div className="background-overlay">
                    <div className="detail-header-width">
                        <div className="detail-header">
                            <div className="poster">
                                <img
                                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`}
                                    alt="Sonic the Hedgehog 2"
                                />
                            </div>
                            <div className="header-content_wrapper">
                                <div className="header-content">
                                    <div className="title">
                                        <h2>
                                            <a href="/movie/338953-fantastic-beasts-the-secrets-of-dumbledore">
                                                {data.title}
                                            </a>
                                            <span className="release-date">({releaseYear})</span>
                                        </h2>
                                    </div>
                                    <div className="facts">
                                        <span class="certification">PG-13</span>
                                        <span class="release">{formattedDate} (US)</span>
                                        <span class="genres">{createGenreList(data.genres)}</span>
                                        <span class="runtime">{runTime}</span>
                                    </div>
                                    <ul className="actions"></ul>
                                    <div className="header_info">
                                        <h3 className="tagline">Return to the magic.</h3>
                                        <h3>Overview</h3>
                                        <div className="overview">
                                            <p>
                                                Professor Albus Dumbledore knows the powerful, dark wizard Gellert
                                                Grindelwald is moving to seize control of the wizarding world. Unable to
                                                stop him alone, he entrusts magizoologist Newt Scamander to lead an
                                                intrepid team of wizards and witches. They soon encounter an array of
                                                old and new beasts as they clash with Grindelwald's growing legion of
                                                followers.
                                            </p>
                                        </div>
                                        <ol className="people">
                                            <li className="profile">
                                                <p>
                                                    <a href="/person/11343-david-yates">David Yates</a>
                                                </p>
                                                <p className="character">Director</p>
                                            </li>
                                            <li className="profile">
                                                <p>
                                                    <a href="/person/10966-j-k-rowling">J.K. Rowling</a>
                                                </p>
                                                <p className="character">Screenplay</p>
                                            </li>
                                            <li className="profile">
                                                <p>
                                                    <a href="/person/10967-steve-kloves">Steve Kloves</a>
                                                </p>
                                                <p className="character">Screenplay</p>
                                            </li>
                                        </ol>
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
