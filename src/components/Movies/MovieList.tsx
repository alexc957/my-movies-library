import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { IMovieResult } from "../../interfaces/movies";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
type MoviesListProps = {
  movies: IMovieResult[];
  label: string;
  title?: string;
  path?: string;
};
export default function MovieList({
  path,
  movies,
  label,
  title,
}: MoviesListProps) {
  return (
    <Box>
      {path && <Link to={path}>{title}</Link>}
      <Box
        display="flex"
        overflow={"scroll"}
        flexDirection={"row"}
        flexWrap="wrap"
        mb="2"
      >
        {movies.map((movie, index) => {
          return <MovieCard movie={movie} key={index} label={label} />;
        })}
      </Box>
    </Box>
  );
}
