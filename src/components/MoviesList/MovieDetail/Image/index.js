import { Link } from 'react-router-dom';
import './index.scss';

const Image = (props) => {
    return (
        <div className="movie-image">
            <Link to={`/${props.media}/${props.id}`}>
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${props.src}`} />
            </Link>
        </div>
    );
};

export default Image;
