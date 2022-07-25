import { ChakraProvider } from "@chakra-ui/react";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Home from "../pages/Home/Home";
import theme from "../theme";

describe("Home page", () => {
  render(
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
  describe("when visiting the top ten movies section", () => {
    it("must be a most pouplar movies section with 20 elements", () => {
      const topTenEls = screen.findAllByLabelText("most-popular-item");
      expect(topTenEls).toHaveLength(10);
    });
  });

  describe("when visiting the top ten latest movies", () => {
    it("must be latests movies section with 20 elements", () => {
      const latestMovies = screen.findAllByLabelText("latest");
      expect(latestMovies).toHaveLength(10);
    });
  });
  describe("when visiting the now playing movies section", () => {
    it("must be an array of the now playing movies", () => {
      const latestMovies = screen.findAllByLabelText("now-playing");
      expect(latestMovies).toHaveLength(10);
    });
  });

  describe("when typing in the search bar", () => {
    it("must have a value", () => {
      const searchBar = screen.getByLabelText("search-bar") as HTMLInputElement;
      fireEvent.change(searchBar, {
        target: {
          value: "Batman",
        },
      });
      expect(searchBar.value).toBe("Batman");
    });
  });
});
