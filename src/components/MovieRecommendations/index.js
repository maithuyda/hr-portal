import { useEffect } from 'react';
import movieApi from '../../apis/movieApi';
import SectionHeader from '../UI/SectionHeader';

import './index.scss';

const MovieRecommendations = (props) => {
    useEffect(() => {}, []);
    return (
        <div class="detail-recommendations-content-wrapper">
            <SectionHeader title="Recommendations" />
            <div class="detail-recommendations-content"></div>
        </div>
    );
};

export default MovieRecommendations;
