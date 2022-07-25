import { ChakraProvider } from "@chakra-ui/react";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Home from "../pages/Home";
import theme from "../theme";

describe("Home page", () => {
  render(
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
  describe("when visiting the top ten movies section", () => {
    it("must be a top ten movie section with 10 elements", () => {
      const topTenEls = screen.findAllByLabelText("top-ten");
      expect(topTenEls).toHaveLength(10);
    });
  });

  describe("when visiting the top ten latest movies", () => {
    it("must be latests movies section with 10 elements", () => {
      const latestMovies = screen.findAllByLabelText("latest");
      expect(latestMovies).toHaveLength(10);
    });
  });
  describe("when visiting the upcoming movies section", () => {
    it("must be an array of 10 latest movies", () => {
      const latestMovies = screen.findAllByLabelText("latest");
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
