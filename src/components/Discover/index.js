import './index.scss';
import ContentWrapper from '../UI/ContentWrapper';
import Search from '../Search';

const Discover = (props) => {
    return (
        <ContentWrapper>
            <div className="title">
                <h2>Welcome.</h2>
                <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
            </div>
            <Search />
        </ContentWrapper>
    );
};

export default Discover;
