import { useEffect } from 'react';

import SectionHeader from '../UI/SectionHeader';
import MoviesList from '../MoviesList';
import ContentWrapper from '../UI/ContentWrapper';
import { useDispatch } from 'react-redux';
import { movieActions } from '../../redux/reducers/movie';
import movieApi from '../../apis/movieApi';

import './index.scss';

const Trending = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const params = {
                api_key: '64e9c0b550ae1b08c54bf65bb08aba0b',
            };
            try {
                const response = await movieApi.getTrending(params);
                dispatch(movieActions.setTrendingMovies(response.data.results));
            } catch (error) {
                console.log('Failed to fetch movie list: ', error);
            }
        };
        fetchTrendingMovies();
    }, [dispatch]);

    return (
        <ContentWrapper>
            <SectionHeader title="Trending" hasSwitchButton={true} />
            <MoviesList type="trendingMovies" />
        </ContentWrapper>
    );
};

export default Trending;
