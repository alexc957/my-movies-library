import { ChakraProvider, theme } from "@chakra-ui/react";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import MovieCard from "../components/Movies/MovieCard";
import { IMovieResult } from "../interfaces/movies";

const movie: IMovieResult = {
  adult: false,
  backdrop_path: "/ocUp7DJBIc8VJgLEw1prcyK1dYv.jpg",
  genre_ids: [28, 12, 878],
  id: 634649,
  original_language: "en",
  original_title: "Spider-Man: No Way Home",
  overview:
    "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
  popularity: 1840.167,
  poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  release_date: "2021-12-15",
  title: "Spider-Man: No Way Home",
  video: false,
  vote_average: 8.1,
  vote_count: 14308,
};

describe("Movie Card", () => {
  describe("when rendering a card component", () => {
    it("must have at least one movie field", () => {
      render(
        <ChakraProvider theme={theme}>
          <MovieCard movie={movie} label="spider" />
        </ChakraProvider>
      );

      const titleEl = screen.getByText("Spider-Man: No Way Home");
      expect(titleEl).toBeInTheDocument();
    });
  });
});
