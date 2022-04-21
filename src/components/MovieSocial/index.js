import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Reviews from '../Reviews';
import movieApi from '../../apis/movieApi';

import './index.scss';

const MovieSocial = (props) => {
    const [reviewData, setReviewData] = useState();
    const mediaType = props.media;
    const movieId = useParams().movieId;

    useEffect(() => {
        const fetchReviews = async () => {
            const params = {};
            const response = await movieApi.getReviews(params, mediaType, movieId);
            return response;
        };
        fetchReviews().then((response) => {
            setReviewData(response.data.results[0]);
        });
    }, [mediaType, movieId]);
    return reviewData ? <Reviews data={reviewData} /> : <p>No Review</p>;
};

export default MovieSocial;
