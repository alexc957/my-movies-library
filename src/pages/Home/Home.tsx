import { Button, Center, Flex } from "@chakra-ui/react";
import React from "react";

import useFetch from "../../hooks/useFetch";
import { IResult } from "../../interfaces/results";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import MovieCarousel from "../../components/Movies/MovieCarousel";
import MoviesSection from "./components/MoviesSection";
import Layout from "../../components/Layout/Layout";

export default function Home() {
  /*const [topMoviesResults, setTopMoviesResults] = useState<IResult | null>(
    null
  );*/
  const { data: topRatedResults, loading } = useFetch<IResult>(
    `${process.env.BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}`
  );
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <Layout searchBar>
      {" "}
      <Flex flexDirection={"row"} flexWrap="wrap">
        {topRatedResults && <MovieCarousel movies={topRatedResults.results} />}

        <MoviesSection />
      </Flex>
    </Layout>
  );
}
