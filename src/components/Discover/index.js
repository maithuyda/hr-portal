import ContentWrapper from '../UI/ContentWrapper';
import Search from '../Search';

import './index.scss';

const Discover = (props) => {
    return (
        <ContentWrapper>
            <div className="discover-wrapper">
                <div className="title">
                    <h2>Welcome.</h2>
                    <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                </div>
                <Search />
            </div>
        </ContentWrapper>
    );
};

export default Discover;
