import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';
import NavItemsList from '../../components/UI/NavItemsList';
import MovieHeader from '../../components/MovieHeader';
import { fetchById } from '../../redux/actions/movie';
import { useParams } from 'react-router-dom';

import './index.scss';

const shortCutBarData = [
    {
        id: 'overview',
        title: 'Overview',
        hasDropDown: true,
        dropDownData: [
            {
                id: 'main',
                path: '/',
                title: 'Main',
            },
            {
                id: 'titles',
                path: '/titles',
                title: 'Alternative Titles',
            },
            {
                id: 'cast',
                path: '/cast',
                title: 'Cast & Crew',
            },
            {
                id: 'releases',
                path: '/releases',
                title: 'Release Dates',
            },
            {
                id: 'translations',
                path: '/translations',
                title: 'Translations',
            },
            {
                id: 'changes',
                path: '/changes',
                title: 'Changes',
            },
        ],
    },
    {
        id: 'media',
        title: 'Media',
        hasDropDown: true,
        dropDownData: [
            {
                id: 'backdrops',
                path: '/',
                title: 'Backdrops',
            },
            {
                id: 'logos',
                path: '/titles',
                title: 'Logos',
            },
            {
                id: 'posters',
                path: '/cast',
                title: 'Posters',
            },
            {
                id: 'videos',
                path: 'translations',
                title: 'Videos',
            },
        ],
    },
    {
        id: 'fandom',
        title: 'Fandom',
        hasDropDown: true,
        dropDownData: [
            {
                id: 'discusstion',
                path: '/',
                title: 'Discussions',
            },
            {
                id: 'reviews',
                path: '/titles',
                title: 'Reviews',
            },
        ],
    },
    {
        id: 'share',
        title: 'Share',
        hasDropDown: true,
        dropDownData: [
            {
                id: 'share-link',
                path: '/',
                title: 'Share Link',
            },
            {
                id: 'facebook',
                path: '/titles',
                title: 'Facebook',
            },
            {
                id: 'tweet',
                path: '/cast',
                title: 'Tweet',
            },
        ],
    },
];

const Movie = (props) => {
    const dispatch = useDispatch();
    const movieId = useParams().movieId;
    useEffect(() => {
        const params = {};
        const movie = dispatch(fetchById(params, props.media, movieId));
        console.log(movie);
    }, []);
    return (
        <Fragment>
            <div className="page-wrap">
                <Header />
                <main>
                    <section className="shortcut-bar">
                        <div className="shortcut-bar_wrapper">
                            <NavItemsList data={shortCutBarData} />
                        </div>
                    </section>
                    <section className="detail-header">
                        <MovieHeader />
                    </section>
                    <section className="detail-content">
                        <p>Movie Content</p>
                    </section>
                </main>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Movie;
