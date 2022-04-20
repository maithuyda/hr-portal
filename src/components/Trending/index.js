import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SectionHeader from '../UI/SectionHeader';
import MoviesList from '../MoviesList';
import ContentWrapper from '../UI/ContentWrapper';
import { fetchTrendingMovies } from '../../redux/actions/movie';

import './index.scss';

const Trending = (props) => {
    const dispatch = useDispatch();
    const trendingMediaType = useSelector((state) => state.movie.trendingMediaType);

    useEffect(() => {
        const params = {};
        dispatch(fetchTrendingMovies(params, trendingMediaType));
    }, [dispatch, trendingMediaType]);

    return (
        <ContentWrapper>
            <SectionHeader title="Trending" section="trending" hasSwitchButton={true} />
            <MoviesList type="trending" media={trendingMediaType} />
        </ContentWrapper>
    );
};

export default Trending;
