import React, { Fragment } from 'react';
import Header from '../../components/UI/Header/index';
import Discover from '../../components/Discover';
import Popular from '../../components/Popular';
import LatestTrailer from '../../components/LatestTrailer';
import Trending from '../../components/Trending';
import JoinToday from '../../components/JoinToday';
import Leaderboard from '../../components/Leaderboard';
import Footer from '../../components/UI/Footer';

import './index.scss';

const HomePage = () => {
    return (
        <Fragment>
            <div className="page-wrap">
                <Header />
                <main>
                    <div className="section-wrap">
                        <section className="discover">
                            <Discover />
                        </section>
                    </div>
                    <div className="section-wrap">
                        <section className="popular">
                            <Popular />
                        </section>
                    </div>
                    <div className="section-wrap">
                        <section className="latest-trailers">
                            <LatestTrailer />
                        </section>
                    </div>
                    <div className="section-wrap">
                        <section className="trending">
                            <Trending />
                        </section>
                    </div>
                    <div className="section-wrap">
                        <section className="join-today">
                            <JoinToday title="Join Today" />
                        </section>
                    </div>
                    <div className="section-wrap">
                        <section className="leaderboard">
                            <Leaderboard />
                        </section>
                    </div>
                </main>
            </div>
            <Footer />
        </Fragment>
    );
};

export default HomePage;
