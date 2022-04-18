const NavMenu = (props) => {
    const DUMMY_MENU = [
        {
            id: 'nm1',
            title: 'Popular',
        },
        {
            id: 'nm2',
            title: 'Now Playing',
        },
        {
            id: 'nm3',
            title: 'Upcoming',
        },
        {
            id: 'nm4',
            title: 'Top Rated',
        },
    ];

    const navMenu = DUMMY_MENU.map((item) => {
        <li>{item.title}</li>;
    });

    return <ul>{navMenu}</ul>;
};

export default NavMenu;
