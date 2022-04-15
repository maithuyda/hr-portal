import SectionHeader from "../UI/SectionHeader";
import MoviesList from "../MoviesList";
import ContentWrapper from "../UI/ContentWrapper";

import "./index.scss";

const Trending = (props) => {
  return (
    <ContentWrapper>
      <SectionHeader title="Trending" />
      <MoviesList />
    </ContentWrapper>
  );
};

export default Trending;
