import { jobsListFixture } from "../../fixtures/jobsList.fixture";
import { profileFixture } from "../../fixtures/profile.fixture";

describe("checking home route", () => {
  before(() => {
    cy.visit("/JobbyTypescript");
    cy.login();
    cy.visit("/JobbyTypescript/random");
  });
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/profile",
      profileFixture("success")
    );
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs?*",
      jobsListFixture("success")
    );
    cy.setCookie(
      "jwt_token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5lZXRoYSIsInJvbGUiOiJQUklNRV9VU0VSIiwiaWF0IjoxNjIzMDY1NTMyfQ.68FuDFraHW7GplQiXVUrnsU1goYgmwd0tXNk6-HxCok"
    );
  });
  it("checking not found route", () => {
    cy.get(".jobby-notfound-heading");
  });
  it("moving to home route from jobs detail route", () => {
    cy.get("li").first().click();
    cy.location("pathname").should("contains", "/");
  });
  it("moving to home route from jobs detail route", () => {
    cy.visit("/JobbyTypescript/random");
    cy.get("li").last().click();
    cy.location("pathname").should("contains", "/Jobs");
  });
});
