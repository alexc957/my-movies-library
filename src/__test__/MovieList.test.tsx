import { ChakraProvider, theme } from "@chakra-ui/react";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import MovieList from "../components/Movies/MovieList";
import { IMovieResult } from "../interfaces/movies";
import { IResult } from "../interfaces/results";

let movies: IMovieResult[] = [];
beforeAll(async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=ed44417f2a0f7f2b9707ead57533289c"
  );
  const data: IResult = await response.json();
  console.log("data length ", data.results.length);
  movies = data["results"] || [];
});

describe("Movie list", () => {
  describe("when rendering the ListMovies component with a list of 10 movies", () => {
    it("it must exists a list of 10 elements rendered in the dom", () => {
      render(
        <ChakraProvider theme={theme}>
          <MovieList movies={movies} />
        </ChakraProvider>
      );

      const titleEl = screen.getAllByLabelText("movie-item");
      expect(titleEl).toHaveLength(10);
    });
  });
});
