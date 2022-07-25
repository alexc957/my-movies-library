import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { IMovieResult } from "../../interfaces/movies";
import MovieCard from "./MovieCard";
type MoviesListProps = {
  movies: IMovieResult[];
  label: string;
};
export default function MovieList({ movies, label }: MoviesListProps) {
  return (
    <Box
      width={"200"}
      overflowX={"scroll"}
      display="flex"
      flexDirection={"row"}
    >
      {movies.slice(0, 10).map((movie, index) => {
        return <MovieCard movie={movie} key={index} label={label} />;
      })}
    </Box>
  );
}
