import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Home from "../pages/Home/Home";

import Wrapper from "../components/Wrapper";

describe("Home page", () => {
  describe("when rendering the home component", () => {
    it("must be a most pouplar movies section and a now playing movies section", async () => {
      render(
        <Wrapper>
          <Home />
        </Wrapper>
      );
      const topTenEls = await screen.findByText("Upcoming Movies");

      const latestMovies = await screen.findByText("Now Playing");
      expect(topTenEls).toBeInTheDocument();
      expect(latestMovies).toBeInTheDocument();
    });
  });
});
