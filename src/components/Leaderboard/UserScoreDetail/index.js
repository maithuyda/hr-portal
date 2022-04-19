import './index.scss';

const UserScoreDetail = (props) => {
    const scoreAllWidth = (props.scoreAll / props.maxScoreAll) * 100;
    const scoreThisWeekWidth = (props.scoreThisWeek / props.maxScoreThisWeek) * 100;
    return (
        <li>
            <span className="avatar">
                <a href={`/u/${props.name}`}>
                    <span className="round initials background_color purple">{props.name[0]}</span>
                </a>
            </span>

            <div className="data">
                <h3>
                    <a href={`/u/${props.name}`}>{props.name}</a>
                </h3>
                <div className="meter all">
                    <div className="gauge" style={{ width: `${scoreAllWidth}%` }}></div>
                    <h4>{props.scoreAll.toLocaleString()}</h4>
                </div>
                <div className="meter this_week">
                    <div className="gauge" style={{ width: `${scoreThisWeekWidth}%` }}></div>
                    <h4>{props.scoreThisWeek.toLocaleString()}</h4>
                </div>
            </div>
        </li>
    );
};

export default UserScoreDetail;
