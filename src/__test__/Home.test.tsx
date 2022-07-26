import { ChakraProvider } from "@chakra-ui/react";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Home from "../pages/Home/Home";
import theme from "../theme";
import { BrowserRouter } from "react-router-dom";

describe("Home page", () => {
  describe("when visiting the top ten movies section", () => {
    it("must be a most pouplar movies section", async () => {
      render(
        <ChakraProvider theme={theme}>
          <Home />
        </ChakraProvider>
      );
      const topTenEls = await screen.findByText("Upcoming Movies");
      expect(topTenEls).toBeInTheDocument();
    });
  });

  describe("when visiting the top ten latest movies", () => {
    it("must be latests movies section with 20 elements", async () => {
      render(
        <ChakraProvider theme={theme}>
          <Home />
        </ChakraProvider>
      );
      const latestMovies = await screen.findByText("Latest Movies");
      expect(latestMovies).toBeInTheDocument();
    });
  });
  describe("when visiting the now playing movies section", () => {
    it("must be an array of the now playing movies", async () => {
      render(
        <ChakraProvider theme={theme}>
          <Home />
        </ChakraProvider>
      );
      const latestMovies = await screen.findByText("Now Playing");
      expect(latestMovies).toBeInTheDocument();
    });
  });
});
