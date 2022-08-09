import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Wrapper from "../components/Wrapper";
import { server } from "../mocks/server";
import Recommender from "../pages/Recommender/Recommender";

describe("recomender", () => {
  describe("when rendering the Recommender page", () => {
    it("must exists components related to recommend a random movie", async () => {
      render(
        <Wrapper>
          <Recommender />
        </Wrapper>
      );
      expect(await screen.findByRole("spinner")).toBeInTheDocument();

      const buttonEL = await screen.findByRole("button");
      expect(buttonEL).toBeInTheDocument();

      fireEvent.click(buttonEL);

      expect(await screen.findByRole("spinner")).toBeInTheDocument();

      const movieTitle = await screen.findByRole("title");
      expect(movieTitle).toBeInTheDocument();
      expect(await screen.findByText(/overview/gi)).toBeInTheDocument();
    });
  });
});
