import { Link } from 'react-router-dom';

import './index.scss';

const Content = (props) => {
    return (
        <div className="movie-content">
            <div className="movie-title">
                <Link to={`/${props.media}/${props.id}`} title={props.title}>
                    {props.title}
                </Link>
            </div>
            <p>{props.releaseDate}</p>
        </div>
    );
};

export default Content;
