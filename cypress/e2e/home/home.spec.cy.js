describe("checking home route", () => {
  before(() => {
    cy.visit("/JobbyTypescript");
    cy.login();
  });
  beforeEach(()=>{
    cy.setCookie(
      "jwt_token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5lZXRoYSIsInJvbGUiOiJQUklNRV9VU0VSIiwiaWF0IjoxNjIzMDY1NTMyfQ.68FuDFraHW7GplQiXVUrnsU1goYgmwd0tXNk6-HxCok"
    );
  })

  it("checking nav bar in home page", () => {
    cy.get('[type="button"').contains("Logout");
    cy.get("li").first().contains("Home");
    cy.get("li").last().contains("Jobs");
  });
  it("checking body in home page", () => {
    cy.get(".jobby-find-job-button").contains("Find Jobs");
    cy.get(".jobby-home-page a")
      .last()
      .should("have.attr", "href", "/react-assignments/JobbyTypescript/jobs");
  });
  it("checking the links of navbars", () => {
    cy.get("a")
      .first()
      .should("have.attr", "href", "/react-assignments/JobbyTypescript");
    cy.get("a")
      .last()
      .should("have.attr", "href", "/react-assignments/JobbyTypescript/jobs");
  });
  it("checking home tab", () => {
    cy.get("li").first().click();
    cy.location("pathname").should("contains", "/");
  });
  it("checking logout btn", () => {
    cy.get('[type="button"').contains("Logout").click();
    cy.location("pathname").should("contains", "/login");
  });
});
