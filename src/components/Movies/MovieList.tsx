import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { IMovieResult } from "../../interfaces/movies";
import MovieCard from "./MovieCard";
type MoviesListProps = {
  movies: IMovieResult[];
  label: string;
  title?: string;
};
export default function MovieList({ movies, label, title }: MoviesListProps) {
  return (
    <Box>
      <h3>{title}</h3>
      <Box
        display="flex"
        overflow={"scroll"}
        flexDirection={"row"}
        flexWrap="wrap"
        mb="2"
      >
        {movies.slice(0, 5).map((movie, index) => {
          return <MovieCard movie={movie} key={index} label={label} />;
        })}
      </Box>
    </Box>
  );
}
