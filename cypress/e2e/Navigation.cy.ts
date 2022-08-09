/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("http://localhost:8080");
});

describe("nav bar", () => {
  // This is the about of this small web app
  context("when  navigating between the home and about", () => {
    it("must exists an about section", () => {
      cy.get('[data-cy="about"]').click();
      cy.get('[data-cy="about-section"]').should(
        "include",
        "This is the about of this small web app"
      );
    });
  });
});

describe("clicking on movie", () => {
  context("when clicking on a movie title in the home", () => {
    it(" must navigate to a new page with the movie details", () => {
      cy.get('[data-cy="The Black Phone"]').click();
      cy.url().should("include", "/movie/756999");
    });
  });
});

describe("navigating to the random recommender page ", () => {
  context("when the user clicks the 'Recommend me' in the navbar", () => {
    it("it must navigate to the  recommend page ", () => {
      cy.get('[data-cy="spinner"]').should("be.visible");
      cy.get('[data-cy="recommend"]').click();
      cy.get('[data-cy="recommend-button"]').click();
      cy.get('[data-cy="title"]').should("be.visible");
    });
  });
});
