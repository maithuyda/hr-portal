import './index.scss';

const MovieHeader = (props) => {
    return (
        <div className="detail-header_wrapper">
            <div className="background-overlay">
                <div className="detail-header-width">
                    <div className="detail-header">
                        <div className="poster">
                            <img
                                src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
                                alt="Sonic the Hedgehog 2"
                            />
                        </div>
                        <div className="header-content_wrapper">
                            <div className="header-content">
                                <div className="title">
                                    <h2>
                                        <a href="/movie/338953-fantastic-beasts-the-secrets-of-dumbledore">
                                            Fantastic Beasts: The Secrets of Dumbledore
                                        </a>
                                        <span className="release-date">(2022)</span>
                                    </h2>
                                </div>
                                <div className="facts">
                                    <span class="certification">PG-13</span>
                                    <span class="release">04/15/2022 (US)</span>
                                    <span class="genres">
                                        <a href="/genre/14-fantasy/movie">Fantasy</a>,&nbsp;
                                        <a href="/genre/12-adventure/movie">Adventure</a>
                                    </span>
                                    <span class="runtime">2h 22m</span>
                                </div>
                                <ul className="actions"></ul>
                                <div className="header_info">
                                    <h3 className="tagline">Return to the magic.</h3>
                                    <h3>Overview</h3>
                                    <div className="overview">
                                        <p>
                                            Professor Albus Dumbledore knows the powerful, dark wizard Gellert
                                            Grindelwald is moving to seize control of the wizarding world. Unable to
                                            stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid
                                            team of wizards and witches. They soon encounter an array of old and new
                                            beasts as they clash with Grindelwald's growing legion of followers.
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
};

export default MovieHeader;
