import './index.scss';

const Video = (props) => {
    return (
        <div className="video-wrapper">
            <iframe
                id={props.id}
                title={props.title}
                src={`https://www.youtube.com/embed/${props.url}?controls=0`}></iframe>
            <label className="video-title" htmlFor={props.id}>
                {props.title}
            </label>
        </div>
    );
};

export default Video;
