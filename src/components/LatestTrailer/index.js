import SectionHeader from '../UI/SectionHeader';
import ContentWrapper from '../UI/ContentWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestVideos } from '../../redux/actions/movie';

import './index.scss';
import { useEffect } from 'react';
import TrailersList from '../TrailersList';

const LatestTrailer = (props) => {
    const dispatch = useDispatch();
    const trailerMediaType = useSelector((state) => state.movie.trailerMediaType);
    useEffect(() => {
        const params = {};
        dispatch(fetchLatestVideos(params, trailerMediaType));
    }, [dispatch, trailerMediaType]);
    return (
        <ContentWrapper>
            <SectionHeader title="Latest Trailer" section="trailer" hasSwitchButton={true} />
            <TrailersList />
        </ContentWrapper>
    );
};

export default LatestTrailer;
