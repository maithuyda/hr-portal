import { useDispatch } from 'react-redux';
import { movieActions } from '../../../redux/reducers/movie';
import { useState } from 'react';

import './index.scss';

const SwitchButton = (props) => {
    const [selectingTV, setSelectingTV] = useState(true);
    const dispatch = useDispatch();
    const { section } = props;

    const changeFilterHandler = (event) => {
        if (event.target.name === 'tv') {
            setSelectingTV(true);
        } else {
            setSelectingTV(false);
        }
        if (section === 'trailer') {
            dispatch(movieActions.setTrailerMediaType(event.target.name));
        }
        if (section === 'popular') {
            dispatch(movieActions.setPopularMedia(event.target.name));
        }
        if (section === 'trending') {
            dispatch(movieActions.setTrendingMedia(event.target.name));
        }
    };

    return (
        <div className="switch-button">
            <button className={`filter left ${selectingTV ? 'selected' : ''}`} name="tv" onClick={changeFilterHandler}>
                On TV
            </button>
            <button
                className={`filter right ${!selectingTV ? 'selected' : ''}`}
                name="movie"
                onClick={changeFilterHandler}>
                In Theaters
            </button>
        </div>
    );
};

export default SwitchButton;
