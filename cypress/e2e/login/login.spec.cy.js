import { loginFixture } from "../../fixtures/login.fixture";

describe("checking login route", () => {
  beforeEach(() => {
    cy.visit("/JobbyTypescript");
  });

  it('checking login btn',()=>{
    cy.get('[type="submit"]');
  })

  it("login without data ", () => {
    cy.intercept(
      "POST",
      "https://apis.ccbp.in/login",
      loginFixture("invalid-data")
    );
    cy.get('[type="submit"]').click();
    cy.location("pathname").should("contains", "/login");
  });


  it("login without username ", () => {
    cy.intercept(
      "POST",
      "https://apis.ccbp.in/login",
      loginFixture("invalid-username")
    );
    cy.get("#password").type("praneetha@2021");
    cy.get('[type="submit"]').click();
    cy.location("pathname").should("contains", "/login");
  });


  it(" login without password", () => {
    cy.intercept(
      "POST",
      "https://apis.ccbp.in/login",
      loginFixture("invalid-password")
    );
    cy.get("#username").type("praneetha");
    cy.get('[type="submit"]').click();
    cy.location("pathname").should("contains", "/login");
  });


    it("successfull login check", () => {
      cy.intercept("POST", "https://apis.ccbp.in/login", loginFixture('success'));
      cy.get("#username").type("praneetha");
      cy.get("#password").type("praneetha@2021");
      cy.get('[type="submit"]').click();
      cy.location("pathname").should("contains", "/");
    });
});
