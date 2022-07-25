import { Container } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { IMovieResult } from "../../interfaces/movies";

type CarosuselProps = {
  movies: IMovieResult[];
};

export default function MovieCarousel({ movies }: CarosuselProps) {
  return (
    <Container width={"75%"}>
      <Carousel dynamicHeight={false} width="100%" showThumbs={false}>
        {movies.map((movie, index) => (
          <div>
            <img
              width={""}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
            <p>{movie.overview}</p>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}
