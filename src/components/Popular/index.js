import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SectionHeader from '../UI/SectionHeader';
import MoviesList from '../MoviesList';
import ContentWrapper from '../UI/ContentWrapper';
import { fetchPopularMovies } from '../../redux/actions/movie';

const Popular = (props) => {
    const dispatch = useDispatch();
    const popularMediaType = useSelector((state) => state.movie.popularMediaType.payload);

    useEffect(() => {
        const params = {};
        dispatch(fetchPopularMovies(params, popularMediaType));
    }, [dispatch, popularMediaType]);

    return (
        <ContentWrapper>
            <SectionHeader title="What's Popular" section="popular" hasSwitchButton={true} />
            <MoviesList type="popularMovies" />
        </ContentWrapper>
    );
};

export default Popular;
