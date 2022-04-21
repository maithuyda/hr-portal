import { useCallback } from 'react';

import ContentWrapper from '../UI/ContentWrapper';
import Person from '../Person';
import MovieMedia from '../MovieMedia';
import MovieCollection from '../MovieCollection';
import MovieSocial from '../MovieSocial';

import './index.scss';
import MovieRecommendations from '../MovieRecommendations';

const MovieContent = (props) => {
    const { data } = props;

    const createTopCastList = useCallback((topCastList) => {
        return topCastList.map((cast) => (
            <Person
                key={`person-${cast.id}`}
                id={cast.id}
                name={cast.name}
                profilePath={cast.profile_path}
                character={cast.character}
            />
        ));
    }, []);
    if (!data) {
        return;
    } else {
        const topCastList = data.credits.cast.slice(0, 9);
        return (
            <div className="movie-detail-content_wrapper">
                <ContentWrapper>
                    <div className="movie-detail-content">
                        <div className="left-column">
                            <div className="detail-cast">
                                <h3>Top Billed Cast</h3>
                                <div className="cast-list">{createTopCastList(topCastList)}</div>
                            </div>
                            <div className="detail-social">
                                <MovieSocial media={props.media} />
                            </div>
                            <div className="detail-media">
                                <MovieMedia />
                            </div>
                            {data.movieData.belongs_to_collection && (
                                <div className="detail-collection">
                                    <MovieCollection
                                        posterPath={data.movieData.poster_path}
                                        collectionName={data.movieData.belongs_to_collection.name}
                                        collectionId={data.movieData.belongs_to_collection.id}
                                    />
                                </div>
                            )}

                            <div className="detail-recommendations">
                                <MovieRecommendations media={props.media} />
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="detail-social">
                                <div className="social-icons"></div>
                                <div className="statistics"></div>
                                <div className="keywords"></div>
                            </div>
                            <div className="detail-score">
                                <div className="content-score"></div>
                                <div className="top-contributors"></div>
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </div>
        );
    }
};

export default MovieContent;
