import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { movieActions } from '../../redux/reducers/movie';

import SectionHeader from '../UI/SectionHeader';
import MoviesList from '../MoviesList';
import ContentWrapper from '../UI/ContentWrapper';
import movieApi from '../../apis/movieApi';

const Popular = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPopularMovies = async () => {
            const params = {
                api_key: '64e9c0b550ae1b08c54bf65bb08aba0b',
                language: 'en-US',
                page: 1,
            };

            try {
                const response = await movieApi.getPopular(params);
                dispatch(movieActions.setPopularMovies(response.data.results));
            } catch (error) {
                console.log('Failed to fetch movie list: ', error);
            }
        };
        fetchPopularMovies();
    }, [dispatch]);

    return (
        <ContentWrapper>
            <SectionHeader title="What's Popular" hasSwitchButton={true} />
            <MoviesList type="popularMovies" />
        </ContentWrapper>
    );
};

export default Popular;
