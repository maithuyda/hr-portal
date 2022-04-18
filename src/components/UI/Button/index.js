import './index.scss';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <p className="button">
            <Link to="/signup">{props.title}</Link>
        </p>
    );
};

export default Button;
