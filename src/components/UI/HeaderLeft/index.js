import './index.scss';

import NavItemsList from '../NavItemsList';

import Logo from '../Logo';

const HeaderLeft = (props) => {
    const navItemsDataLeft = [
        {
            id: 'nav1',
            title: 'Movies',
            path: '/movie',
            hasDropDown: true,
            dropDownData: [
                {
                    id: 'movie-popular',
                    title: 'Popular',
                    path: '/movie',
                },
                {
                    id: 'movie-now-playing',
                    title: 'Now Playing',
                    path: '/movie/now-playing',
                },
                {
                    id: 'movie-upcoming',
                    title: 'Upcoming',
                    path: '/movie/upcoming',
                },
                {
                    id: 'movie-top-rated',
                    title: 'Top Rated',
                    path: '/movie/top-rated',
                },
            ],
        },
        {
            id: 'nav2',
            title: 'TV Shows',
            path: '/tv',
            hasDropDown: true,
            dropDownData: [
                {
                    id: 'tv-popular',
                    title: 'Popular',
                    path: '/tv',
                },
                {
                    id: 'tv-now-playing',
                    title: 'Airing Today',
                    path: '/tv/airing-today',
                },
                {
                    id: 'tv-on-air',
                    title: 'On TV',
                    path: '/tv/on-the-air',
                },
                {
                    id: 'tv-top-rated',
                    title: 'Top Rated',
                    path: '/tv/top-rated',
                },
            ],
        },
        {
            id: 'nav3',
            title: 'People',
            path: '/person',
            hasDropDown: true,
            dropDownData: [
                {
                    id: 'popular',
                    title: 'Popular People',
                    path: '/person',
                },
            ],
        },
        {
            id: 'nav4',
            title: 'More',
            path: '/',
            hasDropDown: true,
            dropDownData: [
                {
                    id: 'discussion',
                    title: 'Discussion',
                    path: '/discuss',
                },
                {
                    id: 'leaderboard',
                    title: 'Leaderboard',
                    path: '/leaderboard',
                },
                {
                    id: 'support',
                    title: 'Support',
                    path: '/talk',
                },
                {
                    id: 'api',
                    title: 'API',
                    path: '/documentation/api',
                },
            ],
        },
    ];

    return (
        <div className="header-left_wrapper">
            <Logo />
            <NavItemsList data={navItemsDataLeft} />
        </div>
    );
};

export default HeaderLeft;
