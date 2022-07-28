import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import { IDetailMovie } from "../../../interfaces/movies";

export default function MovieDetails({ movie }: { movie: IDetailMovie }) {
  return (
    <VStack width={"40%"}>
      <p>Average rating: {movie.vote_average}</p>
      <div>
        <h3>Genres</h3>
        {movie.genres?.map((genre, index) => (
          <p key={index}>{genre.name}</p>
        ))}
      </div>
      <p>{movie.overview}</p>
    </VStack>
  );
}
