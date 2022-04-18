import ContentWrapper from "../UI/ContentWrapper";
import Button from "../UI/Button";

import "./index.scss";

const JoinToday = (props) => {
  return (
    <ContentWrapper>
      <div className="join-today_title">
        <h2>{props.title}</h2>
      </div>
      <div className="join-today-content_wrapper">
        <div className="join-today_content">
          <p>
            Get access to maintain your own <em>custom personal lists</em>,{" "}
            <em>track what you've seen</em> and search and filter for{" "}
            <em>what to watch next</em>—regardless if it's in theatres, on TV or
            available on popular streaming services like .
          </p>
          <Button title="Sign Up" />
        </div>
        <div className="join-today_list">
          <ul>
            <li>Enjoy TMDB ad free</li>
            <li>Maintain a personal watchlist</li>
            <li>
              Filter by your subscribed streaming services and find something to
              watch
            </li>
            <li>Log the movies and TV shows you've seen</li>
            <li>Build custom lists</li>
            <li>Contribute to and improve our database</li>
          </ul>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default JoinToday;
