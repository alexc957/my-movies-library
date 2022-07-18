import React from "react";

import { render, screen } from "@testing-library/react";

import App from "../App";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "../pages/Home";
import First from "../components/First";

type WrapperProps = {
  children: React.ReactNode;
};

function ChakraWrapper({ children }: WrapperProps) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

describe("test ", () => {
  describe("when rendering the whole app ", () => {
    it("must be a hello world text", () => {
      render(<App />);
      const helloElement = screen.getByText("hello world from home");
      expect(helloElement).toBeInTheDocument();
    });
  });
  describe("when rendering a component in a isolated way", () => {
    it("must be a hello world text", () => {
      render(
        <ChakraWrapper>
          <First />
        </ChakraWrapper>
      );
      const helloElement = screen.getByText("Button first");
      expect(helloElement).toBeInTheDocument();
    });
  });
});
