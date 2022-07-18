import React from "react";

import { render, screen } from "@testing-library/react";

import App from "../App";

describe("test ", () => {
  describe("when rendering the whole app ", () => {
    it("must be a hello world text", () => {
      render(<App />);
      const helloElement = screen.getByText("hello world from home");
      expect(helloElement).toBeInTheDocument();
    });
  });
});
