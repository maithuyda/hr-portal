import React, { useEffect, useState, Fragment, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';
import NavItemsList from '../../components/UI/NavItemsList';
import MovieHeader from '../../components/MovieHeader';
import movieApi from '../../apis/movieApi';

import './index.scss';
import MovieContent from '../../components/MovieContent';

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
    const [detailData, setDetailData] = useState();
    const { media } = props;
    const movieId = useParams().movieId;

    const fetchById = useCallback(async () => {
        const params = {};
        const movie = await movieApi.getById(params, media, movieId);
        return movie;
    }, [movieId, media]);

    const fetchCredits = useCallback(async () => {
        const params = {};
        const credits = await movieApi.getCredits(params, media, movieId);
        return credits;
    }, [movieId, media]);

    const dataPromise = useMemo(() => {
        return [fetchById(), fetchCredits()];
    }, [fetchById, fetchCredits]);

    useEffect(() => {
        Promise.all(dataPromise).then((data) => {
            const detailData = data.map((response) => {
                return response.data;
            });
            setDetailData({ movieData: detailData[0], credits: detailData[1] });
        });
    }, [dataPromise]);

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
                        <MovieHeader data={detailData} />
                    </section>
                    <div className="section-wrap">
                        <section className="detail-content content">
                            <MovieContent data={detailData} media={media} />
                        </section>
                    </div>
                </main>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Movie;
