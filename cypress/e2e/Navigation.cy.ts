describe("when  navigating between the home and about", () => {
  before(() => {
    cy.visit("http://localhost:8080");
  });

  it("must be a about link", () => {
    cy.get('[data-cy="about"]').click();
    cy.get('[data-cy="about-section"]').should(
      "contain",
      "This is the about a small web app"
    );
  });
});
