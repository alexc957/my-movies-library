import React from "react";
import { IMovieResult } from "../../interfaces/movies";
import { Box } from "@chakra-ui/react";
export default function MovieCard({
  movie,
  label,
}: {
  movie: IMovieResult;
  label: string;
}) {
  return (
    <Box
      width={"2xl"}
      border={"2px"}
      borderRadius="md"
      borderColor={"primarys"}
    >
      <img
        aria-label={label}
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />
      <p>{movie.title}</p>
    </Box>
  );
}
