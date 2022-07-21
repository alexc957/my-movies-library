import { ChakraProvider, theme } from "@chakra-ui/react";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import MovieList from "../components/Movies/MovieList";

describe("Movie list", () => {
  describe("when rendering the ListMovies component with a list of 10 movies", () => {
    it("it must exists a list of 10 elements rendered in the dom", () => {
      render(
        <ChakraProvider theme={theme}>
          <MovieList movies={[]} />
        </ChakraProvider>
      );

      const titleEl = screen.getAllByLabelText("movie-item");
      expect(titleEl).toHaveLength(10);
    });
  });
});
