import React from "react";

import { render, screen } from "@testing-library/react";

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
});
