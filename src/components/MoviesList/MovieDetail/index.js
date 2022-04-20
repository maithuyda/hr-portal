import Card from '../../UI/Card';
import Content from './Content';
import Image from './Image';

import './index.scss';

const MovieDetail = (props) => {
    const releaseDate = new Date(props.releaseDate).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <Card>
            <div className="movie-detail">
                <Image src={props.image} id={props.id} title={props.title} media={props.media} />
                <Content title={props.title} id={props.id} releaseDate={releaseDate} media={props.media} />
            </div>
        </Card>
    );
};

export default MovieDetail;
