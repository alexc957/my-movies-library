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
      width={"220px"}
      border={"2px"}
      borderRadius="md"
      borderColor={"primarys"}
      data-testid={label}
      display="flex"
      flexDirection="column"
      alignContent={"center"}
      alignItems="center"
      mx={"2"}
    >
      <img
        width={"200px"}
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />
      <p>{movie.title}</p>
    </Box>
  );
}
