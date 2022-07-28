import React from "react";
import { IMovieResult } from "../../interfaces/movies";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
      mx={"6"}
      my={"2"}
    >
      <Link to={`/movie/${movie.id}`} data-cy={movie.title}>
        <img
          width={"200px"}
          src={`${process.env.BASE_POSTER_URL}${movie.poster_path}`}
        />
        <p>{movie.title}</p>
      </Link>
    </Box>
  );
}
