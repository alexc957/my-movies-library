import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Wrapper from "../components/Wrapper";
import Pagination from "../pages/MovieListPage/components/Pagination";
const handleNext = jest.fn((page: number) => {});
describe("pagination", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  describe("when rendering the pagination component with the current page equal to 1", () => {
    it("must exists only a next page button", () => {
      render(
        <Wrapper>
          <Pagination current={1} setPage={handleNext} total={10} />
        </Wrapper>
      );

      const nextEl = screen.getByRole("next-button");
      const prevousEl = screen.queryByRole("previous-buton");

      fireEvent.click(nextEl);

      expect(nextEl).toBeInTheDocument();
      expect(prevousEl).toBeNull();
      expect(handleNext).toBeCalledWith(2);
    });
  });

  describe("when rendering the paginaton component with the current page greater than 1", () => {
    it("must allow the user to navigate to the next and previus page", () => {
      let currentPage = 3; //);
      render(
        <Wrapper>
          <Pagination current={currentPage} setPage={handleNext} total={10} />
        </Wrapper>
      );

      const nextEl = screen.getByRole("next-button");
      const prevousEl = screen.getByRole("previous-button");

      fireEvent.click(nextEl);

      expect(nextEl).toBeInTheDocument();
      expect(prevousEl).toBeInTheDocument();
      expect(handleNext).toBeCalledWith(4);

      fireEvent.click(prevousEl);

      expect(handleNext).toBeCalledTimes(2);

      const pageNumber = screen.getByRole("page-number");
      expect(pageNumber.innerHTML).toBe("3");
    });
  });
});
