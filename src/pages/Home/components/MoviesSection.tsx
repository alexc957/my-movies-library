import { Flex } from "@chakra-ui/react";
import React from "react";
import MovieList from "../../../components/Movies/MovieList";
import useFetch from "../../../hooks/useFetch";

import { IResult } from "../../../interfaces/results";

export default function MoviesSection() {
  const { data: upcomingResults, loading: upcomingLoading } = useFetch<IResult>(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=ed44417f2a0f7f2b9707ead57533289c"
  );

  const { data: nowPlayingMovies, loading: nowPlayingLoading } =
    useFetch<IResult>(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=ed44417f2a0f7f2b9707ead57533289c"
    );

  const { data: popular, loading: loadingPopular } = useFetch<IResult>(
    "https://api.themoviedb.org/3/movie/popular?api_key=ed44417f2a0f7f2b9707ead57533289c"
  );
  return (
    <Flex
      flexDirection={"column"}
      flexWrap="wrap"
      justifyContent={"space-evenly"}
      alignItems="center"
    >
      {upcomingResults && (
        <MovieList
          movies={upcomingResults.results.slice(0, 5)}
          label="most-popular-item"
          path="/list/upcoming"
          title="Upcoming Movies"
        />
      )}
      {nowPlayingMovies && (
        <MovieList
          movies={nowPlayingMovies.results.slice(0, 5)}
          label="now-playing"
          title="Now Playing"
          path="/list/now_playing"
        />
      )}
      {popular && (
        <MovieList
          movies={popular.results.slice(0, 5)}
          label="popular"
          path="/list/popular"
          title="Popular Movies"
        />
      )}
    </Flex>
  );
}
