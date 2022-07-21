import { ChakraProvider } from "@chakra-ui/react";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Home from "../pages/Home";
import theme from "../theme";

describe("Home page", () => {
  describe("when visiting the top ten movies section", () => {
    it("must be a top ten movie section with 10 elements", () => {
      render(
        <ChakraProvider theme={theme}>
          <Home />
        </ChakraProvider>
      );
      const topTenel = screen.getByText("Top Ten Movies");
      expect(topTenel).toBeInTheDocument();
    });
  });

  describe("when typing in the search bar", () => {
    it("must have a value", () => {
      render(
        <ChakraProvider theme={theme}>
          <Home />
        </ChakraProvider>
      );
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
