/// <reference types="cypress" />

describe("nav bar", () => {
  before(() => {
    cy.visit("http://localhost:8080");
  });
  context("when  navigating between the home and about", () => {
    it("must be a about link", () => {
      cy.get('[data-cy="about"]').click();
      cy.get('[data-cy="about-section"]').should(
        "contain",
        "This is the about a small web app"
      );
    });
  });
});

describe("clicking on movie", () => {
  before(() => {
    cy.visit("http://localhost:8080");
  });
  context("when clicking on a movie title in the home", () => {
    it("it should navigate to a new page with the movie details", () => {
      cy.get('[data-cy="The Black Phone"]').click();
      cy.url().should("include", "/movie/756999");
    });
  });
});
