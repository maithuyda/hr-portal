import './index.scss';

const NavItem = (props) => {
    return (
        <li className="nav-item">
            <a href={props.path}>{props.title}</a>
        </li>
    );
};

export default NavItem;
