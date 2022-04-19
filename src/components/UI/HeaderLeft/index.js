import './index.scss';

import NavItemsList from '../NavItemsList';

import Logo from '../Logo';

const HeaderLeft = (props) => {
    const navItemsDataLeft = [
        { id: 'nav1', title: 'Movies', path: '/movie' },
        { id: 'nav2', title: 'TV Shows', path: '/tv' },
        { id: 'nav3', title: 'People', path: '/person' },
        { id: 'nav4', title: 'More', path: '/' },
    ];

    return (
        <div className="header-left_wrapper">
            <Logo />
            <NavItemsList data={navItemsDataLeft} />
        </div>
    );
};

export default HeaderLeft;
