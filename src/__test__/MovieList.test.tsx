import { ChakraProvider, theme } from "@chakra-ui/react";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import MovieList from "../components/Movies/MovieList";
import { IMovieResult } from "../interfaces/movies";
import { IResult } from "../interfaces/results";

let movies: IMovieResult[] = [];
beforeAll(async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=ed44417f2a0f7f2b9707ead57533289c"
  );
  const data: IResult = await response.json();

  movies = data["results"] || [];
});

describe("Movie list", () => {
  describe("when rendering the ListMovies component with a list of 20 movies", () => {
    it("it must exists a list of 20 elements rendered in the dom", async () => {
      render(
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <MovieList movies={movies} label="movie-item" />
          </BrowserRouter>
        </ChakraProvider>
      );

      const titleEl = await screen.findAllByTestId("movie-item");
      expect(titleEl).toHaveLength(20);
    });
  });
});
