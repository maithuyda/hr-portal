import { Link } from 'react-router-dom';

import './index.scss';

const MovieMedia = (props) => {
    return (
        <div className="menu">
            <h3>Media</h3>
            <ul>
                <li className="active" dir="auto">
                    <Link id="popular" className="media_panel" to="#">
                        Most Popular
                    </Link>
                </li>
                <li>
                    <Link id="videos" className="media_panel" to="#">
                        Videos <span>17</span>
                    </Link>
                </li>
                <li>
                    <Link id="backdrops" className="media_panel" to="#">
                        Backdrops <span>16</span>
                    </Link>
                </li>
                <li>
                    <Link id="posters" className="media_panel" to="#">
                        Posters <span>124</span>
                    </Link>
                </li>
                <li className="view_all"></li>
            </ul>
        </div>
    );
};

export default MovieMedia;
