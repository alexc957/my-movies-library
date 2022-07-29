import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import { ChakraProvider } from "@chakra-ui/react";

import First from "../components/First";
import Layout from "../components/Layout/Layout";
import theme from "../theme";
import { BrowserRouter } from "react-router-dom";

describe("Layout ", () => {
  describe("when passing an jsx component to the layout component", () => {
    it("must render the jsx component with a navbar", () => {
      render(
        <BrowserRouter>
          <Layout>
            <p>hello</p>
          </Layout>
        </BrowserRouter>
      );
      const helloElement = screen.getByText("hello");
      expect(helloElement).toBeInTheDocument();
      const navbar = screen.getByRole("navigation");
      expect(navbar).toBeInTheDocument();
    });
  });

  describe("when typing in the search bar", () => {
    it("must have a value", () => {
      render(
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Layout searchBar>
              <p>hello</p>
            </Layout>
          </BrowserRouter>
        </ChakraProvider>
      );
      const searchBar = screen.getByRole("input") as HTMLInputElement;
      fireEvent.change(searchBar, {
        target: {
          value: "Batman",
        },
      });
      expect(searchBar.value).toBe("Batman");
    });
  });

  describe("when not passing the searchBar to the layout", () => {
    it("must not exists the search input", () => {
      render(
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Layout>
              <p>hello</p>
            </Layout>
          </BrowserRouter>
        </ChakraProvider>
      );
      const searchBar = screen.queryByRole("input") as HTMLInputElement;

      expect(searchBar).toBeNull();
    });
  });
});
