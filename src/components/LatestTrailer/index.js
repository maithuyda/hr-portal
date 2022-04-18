import SectionHeader from "../UI/SectionHeader";
import MoviesList from "../MoviesList";
import ContentWrapper from "../UI/ContentWrapper";

import "./index.scss";

const LatestTrailer = (props) => {
  return (
    <ContentWrapper>
      <SectionHeader title="Latest Trailer" hasSwitchButton={true} />
      {/* <MoviesList /> */}
    </ContentWrapper>
  );
};

export default LatestTrailer;
