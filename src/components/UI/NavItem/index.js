import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from '../NavDropdown';
import './index.scss';

const NavItem = (props) => {
    const [isHover, setIsHover] = useState(false);
    const showDropDownHandler = () => {
        setIsHover(true);
    };
    const hideDropDownHandler = () => {
        setIsHover(false);
    };

    const showDropDown = props.hasDropDown && isHover;
    return (
        <li className="nav-item" onMouseEnter={showDropDownHandler} onMouseLeave={hideDropDownHandler}>
            {props.path ? <Link to={props.path}>{props.title}</Link> : <p>{props.title}</p>}

            {showDropDown && props.dropDownData.length > 0 && <NavDropdown data={props.dropDownData} />}
        </li>
    );
};

export default NavItem;
