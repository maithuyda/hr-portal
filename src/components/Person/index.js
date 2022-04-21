import Card from '../UI/Card';
import noImage from '../../assets/images/Noimage.svg.png';
import './index.scss';

const Person = (props) => {
    return (
        <Card>
            <div className="person-image">
                <a href={`/person/${props.id}`}>
                    {
                        <img
                            className="profile"
                            src={
                                props.profilePath
                                    ? `https://image.tmdb.org/t/p/w138_and_h175_face${props.profilePath}`
                                    : noImage
                            }
                            alt={props.name}
                        />
                    }
                </a>
            </div>

            <div className="profile-name_container">
                <p>
                    <a href="/person/222121-ben-schwartz">{props.name}</a>
                </p>
                <p class="character">{props.character}</p>
            </div>
        </Card>
    );
};

export default Person;
