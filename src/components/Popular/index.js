import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SectionHeader from '../UI/SectionHeader';
import MoviesList from '../MoviesList';
import ContentWrapper from '../UI/ContentWrapper';
import { fetchPopularMovies } from '../../redux/actions/movie';

const Popular = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const params = {
            language: 'en-US',
            page: 1,
        };
        dispatch(fetchPopularMovies(params));
    }, [dispatch]);

    return (
        <ContentWrapper>
            <SectionHeader title="What's Popular" hasSwitchButton={true} />
            <MoviesList type="popularMovies" />
        </ContentWrapper>
    );
};

export default Popular;
