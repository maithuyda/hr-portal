import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import Video from '../UI/Video';

import './index.scss';

const TrailersList = (props) => {
    const videos = useSelector((state) => state.movie.latestTrailers);
    let videosData = videos.payload;

    if (!videosData) {
        videosData = [];
    }

    const videosList = useMemo(() => {
        return videosData.map((video) => {
            return <Video key={video.id} url={video.key} title={video.name} />;
        });
    }, [videosData]);

    return <div className="trailer-list_wrapper">{videosList}</div>;
};

export default TrailersList;
