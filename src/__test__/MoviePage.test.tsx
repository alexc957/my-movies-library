import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Wrapper from "../components/Wrapper";
import Movie from "../pages/Movie/Movie";
jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
      id: 756999,
    }),
  };
});

describe("Movie page", () => {
  describe("when rendering the Movie page", () => {
    it("must exists fields related to a movie", async () => {
      render(
        <Wrapper>
          <Movie />
        </Wrapper>
      );

      const posterImage = await screen.findByRole("poster-image");
      const titleEl = screen.getByText("The Black Phone");

      expect(posterImage).toBeInTheDocument();
      expect(titleEl).toBeInTheDocument();
    });
  });
});
