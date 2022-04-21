import './index.scss';

const Reviews = (props) => {
    const createdDate = new Date(props.data.created_at);
    const formattedDate = createdDate.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
    const miniContent = props.data.content.substring(0, 400) + '... ';
    return (
        <>
            <div className="review-container">
                <div className="review">
                    <div className="avatar">
                        <a href={`/u/${props.data.id}`}>
                            <img
                                className="avatar"
                                src={props.data.author_details.avatar_path.slice(1)}
                                alt={props.data.author}
                            />
                        </a>
                    </div>
                    <div className="review-detail">
                        <div className="review-header">
                            <div className="rating_wrapper">
                                <h3>
                                    <a href="/review/6250e3cc383df20fcb7aaa14">A review by {props.data.author}</a>
                                </h3>
                                {props.data.author_details.rating && <div className="rounded rating"> 8.0</div>}
                            </div>
                            <h5>
                                Written by <a href="/u/ChrisSawin">{props.data.author}</a> on {formattedDate}
                            </h5>
                        </div>
                        <div className="review-content">
                            <div className="teaser">
                                <p>
                                    {miniContent}
                                    <a class="underline" href={`/review/${props.data.id}`}>
                                        read the rest.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reviews;
