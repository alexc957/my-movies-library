import { ChakraProvider, theme } from "@chakra-ui/react";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import MovieCard from "../components/Movies/MovieCard";

describe("Movie Card", () => {
  describe("when rendering a card component", () => {
    it("must have at least one movie field", () => {
      render(
        <ChakraProvider theme={theme}>
          <MovieCard movie={{ title: "Batman" }} />
        </ChakraProvider>
      );

      const titleEl = screen.getByText("Batman");
      expect(titleEl).toBeInTheDocument();
    });
  });
});
