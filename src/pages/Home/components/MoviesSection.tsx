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
        <MovieList movies={upcomingResults.results} label="most-popular-item" />
      )}
      {nowPlayingMovies && (
        <MovieList movies={nowPlayingMovies.results} label="now-playing" />
      )}
      {popular && <MovieList movies={popular.results} label="latest" />}
    </Flex>
  );
}
