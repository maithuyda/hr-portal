import "./index.scss";

const Image = (props) => {
  return (
    <div className="movie-image">
      <a href="/tv/92749" title={props.title}>
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${props.src}`}
        />
      </a>
    </div>
  );
};

export default Image;
