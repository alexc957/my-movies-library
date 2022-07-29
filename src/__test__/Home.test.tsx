import { ChakraProvider } from "@chakra-ui/react";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Home from "../pages/Home/Home";
import theme from "../theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Home page", () => {
  describe("when visiting the top ten movies section", () => {
    it("must be a most pouplar movies section", async () => {
      render(
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </ChakraProvider>
      );
      const topTenEls = await screen.findByText("Upcoming Movies");
      expect(topTenEls).toBeInTheDocument();
    });
  });

  describe("when rendering the home", () => {
    it("must be a component of Upcoming movies", async () => {
      render(
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </ChakraProvider>
      );
      const latestMovies = await screen.findByText("Upcoming Movies");
      expect(latestMovies).toBeInTheDocument();
    });
  });
  describe("when visiting the now playing movies section", () => {
    it("must be an array of the now playing movies", async () => {
      render(
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </ChakraProvider>
      );
      const latestMovies = await screen.findByText("Now Playing");
      expect(latestMovies).toBeInTheDocument();
    });
  });
});
