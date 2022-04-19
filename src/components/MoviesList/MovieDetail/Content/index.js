import './index.scss';

const Content = (props) => {
    return (
        <div className="movie-content">
            <h2>
                <a href="/tv/92749" title={props.title}>
                    {props.title}
                </a>
            </h2>
            <p>{props.releaseDate}</p>
        </div>
    );
};

export default Content;
