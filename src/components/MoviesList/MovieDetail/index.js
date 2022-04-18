import Card from "../../UI/Card";
import Content from "./Content";
import Image from "./Image";

import "./index.scss";

const MovieDetail = (props) => {
  return (
    <Card>
      <div className="movie-detail">
        <Image />
        <Content title={props.title} releaseDate={props.releaseDate} />
      </div>
    </Card>
  );
};

export default MovieDetail;
