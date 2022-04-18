import './index.scss';

const Search = (props) => {
    return (
        <div className="search">
            <form action="/search">
                <div className="input-group">
                    <input type="text" placeholder="Search for a movie, tv show, person......" />
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
    );
};

export default Search;
