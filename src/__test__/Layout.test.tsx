import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import { ChakraProvider } from "@chakra-ui/react";

import First from "../components/First";
import Layout from "../components/Layout/Layout";
import theme from "../theme";

describe("Layout ", () => {
  describe("when passing an jsx component to the layout component", () => {
    it("must render the jsx component", () => {
      render(
        <Layout>
          <p>hello</p>
        </Layout>
      );
      const helloElement = screen.getByText("hello");
      expect(helloElement).toBeInTheDocument();
    });
  });

  describe("when rendering a custom  component ", () => {
    it("must exists a navbar element", () => {
      render(
        <ChakraProvider theme={theme}>
          <Layout>
            <First />
          </Layout>
        </ChakraProvider>
      );

      const navbar = screen.getByRole("navigation");
      expect(navbar).toBeInTheDocument();
    });
  });

  describe("when typing in the search bar", () => {
    it("must have a value", () => {
      render(
        <ChakraProvider theme={theme}>
          <Layout searchBar>
            <p>hello</p>
          </Layout>
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
          <Layout>
            <p>hello</p>
          </Layout>
        </ChakraProvider>
      );
      const searchBar = screen.queryByRole("input") as HTMLInputElement;

      expect(searchBar).toBeNull();
    });
  });
});
