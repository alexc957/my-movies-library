/// <reference types="cypress" />

describe("when searching for a movie", () => {
  before(() => {
    cy.visit("http://localhost:8080");
  });

  context("when searching for a movie", () => {
    it("must shows a list of movies of lenght greater than 0", () => {
      cy.get('[data-cy="search"]').type("Batman");
      expect(cy.get('[data-cy="movie-item"]')).to.have.length.greaterThan(0);
    });
  });
});
