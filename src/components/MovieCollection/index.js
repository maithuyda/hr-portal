import './index.scss';

const MovieCollection = (props) => {
    return (
        <div
            className="detail-collection-content-wrapper"
            style={{
                backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${props.posterPath}')`,
            }}>
            <div className="collection-overlay">
                <div className="detail-collection-content">
                    <div>
                        <h2>Part of the {props.collectionName}</h2>
                        <p>Includes Sonic the Hedgehog, Sonic the Hedgehog 2, Sonic the Hedgehog 3</p>
                    </div>

                    <p class="rounded-btn">
                        <a href={`/collection/${props.collectionId}`}>View the Collection</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MovieCollection;
