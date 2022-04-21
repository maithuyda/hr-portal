import { Link } from 'react-router-dom';

import './index.scss';

const Profile = (props) => {
    return (
        <li className="profile">
            <p>
                <Link to={`/person/${props.id}`}>{props.name}</Link>
            </p>
            <p className="character">{props.job}</p>
        </li>
    );
};

export default Profile;
