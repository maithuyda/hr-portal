import { useEffect } from "react";

import SectionHeader from "../UI/SectionHeader";
import MoviesList from "../MoviesList";
import ContentWrapper from "../UI/ContentWrapper";
import { useDispatch } from "react-redux";
import { fetchTrendingMovies } from "../../redux/actions/movie";

import "./index.scss";

const Trending = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {};
    dispatch(fetchTrendingMovies(params));
  }, [dispatch]);

  return (
    <ContentWrapper>
      <SectionHeader title="Trending" hasSwitchButton={true} />
      <MoviesList type="trendingMovies" />
    </ContentWrapper>
  );
};

export default Trending;
