import { Container } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { IMovieResult } from "../../interfaces/movies";

type CarosuselProps = {
  movies: IMovieResult[];
};

export default function MovieCarousel({ movies }: CarosuselProps) {
  return (
    <Container width={"75%"} maxW="md">
      <Carousel dynamicHeight={false} showThumbs={false} autoPlay infiniteLoop>
        {movies.map((movie, index) => (
          <div key={index}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
            <p>{movie.overview}</p>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}
