import { jobsItemFixture } from "../../fixtures/jobListItem.fixture";
import { jobsListFixture } from "../../fixtures/jobsList.fixture";
import { profileFixture } from "../../fixtures/profile.fixture";

describe("checking jobs route in failure view", () => {
  before(() => {
    cy.visit("/JobbyTypescript");
    cy.login();
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
    cy.get("li").last().contains("Jobs").click();
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs/d6019453-f864-4a2f-8230-6a9642a59466",
      jobsItemFixture("failed")
    );
    cy.get(".jobby-jobItem-link").click();
  });
  it("checking failure view of job item", () => {
    cy.get(".jobby-jobDetail-failure-heading");
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs/d6019453-f864-4a2f-8230-6a9642a59466",
      jobsItemFixture("success")
    );
    cy.get(".jobby-jobDetail-retry-btn").click();
  });
});
describe("checking jobs route in success view", () => {
  before(() => {
    cy.visit("/JobbyTypescript");
    cy.login();
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
    cy.get("li").last().contains("Jobs").click();
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs/*",
      jobsItemFixture("success")
    );
    cy.get(".jobby-jobItem-link").click();
  });
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs?*",
      jobsListFixture("success")
    );
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/profile",
      profileFixture("success")
    );
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs/*",
      jobsItemFixture("success")
    );
    cy.setCookie(
      "jwt_token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5lZXRoYSIsInJvbGUiOiJQUklNRV9VU0VSIiwiaWF0IjoxNjIzMDY1NTMyfQ.68FuDFraHW7GplQiXVUrnsU1goYgmwd0tXNk6-HxCok"
    );
  });
  it("checking the success view of jobItem", () => {
    cy.get(".jobby-jobDetail-title").contains("Devops Engineer");
    cy.get(".similar-job-container");
  });
  it('checking the external link of jobitem',()=>{
    cy.get(".jobby-jobDetail-link").should(
      "have.attr",
      "href",
      "https://about.netflix.com/en"
    );
  })
  it('checking similar jobs',()=>{
    cy.get(".jobby-similarJob-link").should(
      "have.attr",
      "href",
      "/react-assignments/JobbyTypescript/jobs/2b40029d-e5a5-48cc-84a6-b6e12d25625d"
    ).click();
  })
  it('moving to home route from jobs detail route',()=>{
    cy.get("li").first().click();
    cy.location("pathname").should("contains", "/");
  })
  it("moving to home route from jobs detail route", () => {
    cy.visit("/JobbyTypescript/jobs/2b40029d-e5a5-48cc-84a6-b6e12d25625d");
    cy.get("li").last().click();
    cy.location("pathname").should("contains", "/Jobs");
  });
});

