import NavItemsList from '../NavItemsList';

const HeaderRight = () => {
    const navItemsDataRight = [
        { id: 'rnav1', title: 'Login', path: '/login' },
        { id: 'rnav2', title: 'Join TMBD', path: '/signup' },
    ];
    return (
        <div className="header-right_wrapper">
            <NavItemsList data={navItemsDataRight} />
        </div>
    );
};

export default HeaderRight;
