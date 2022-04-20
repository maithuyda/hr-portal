import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const NavDropdown = (props) => {
    const { data } = props;

    const navDropDownList = useMemo(() => {
        return data.map((item) => (
            <li key={item.id}>
                <Link to={item.path}>{item.title}</Link>
            </li>
        ));
    }, [data]);

    return (
        <div className="nav-dropdown_wrapper">
            <ul className="nav-dropdown">{navDropDownList}</ul>
        </div>
    );
};

export default NavDropdown;
