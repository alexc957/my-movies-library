import { Button, Center, Flex } from "@chakra-ui/react";
import React from "react";

import useFetch from "../../hooks/useFetch";
import { IResult } from "../../interfaces/results";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import MovieCarousel from "../../components/Movies/MovieCarousel";
import MoviesSection from "./components/MoviesSection";

export default function Home() {
  /*const [topMoviesResults, setTopMoviesResults] = useState<IResult | null>(
    null
  );*/
  const { data: topRatedResults, loading } = useFetch<IResult>(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=ed44417f2a0f7f2b9707ead57533289c"
  );
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      {" "}
      <Flex flexDirection={"row"} flexWrap="wrap">
        <Center>
          {topRatedResults && (
            <MovieCarousel movies={topRatedResults.results} />
          )}
        </Center>
        <MoviesSection />
      </Flex>
    </div>
  );
}
