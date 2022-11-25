import { jobsListFixture } from "../../fixtures/jobsList.fixture";
import { profileFixture } from "../../fixtures/profile.fixture";

describe("checking jobs route in failure view", () => {
  before(() => {
    cy.visit("/JobbyTypescript");
    cy.login();
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/profile",
      profileFixture("failed")
    );
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs?*",
      jobsListFixture("failed")
    );
    cy.get("li").last().contains("Jobs").click();
  });
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/profile",
      profileFixture("failed")
    );
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs?*",
      jobsListFixture("failed")
    );
  });
  it("checking the failure view", () => {
    cy.get(".profile-retry-btn");
    cy.get(".jobby-joblists-failure-heading");
    cy.get(".jobby-joblists-retry-btn");
  });
  it("checking the search", () => {
    cy.get(".jobby-search-input").last().type("Backend");
    cy.get(".jobby-clear-logo").last().invoke("show").click();
  });
  it("checking the employment type", () => {
    cy.get("#FullTime").check();
  });
  it("checking the salary", () => {
    cy.get("#id-1000000").click();
  });
  it("checking retry of failed view", () => {
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/profile",
      profileFixture("success")
    );
    cy.get(".profile-retry-btn").click();
    cy.get(".jobby-joblists-failure-heading");
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs?*",
      jobsListFixture("success")
    );
    cy.get(".jobby-joblists-retry-btn").click();
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
      "https://apis.ccbp.in/jobs*",
      jobsListFixture("success")
    );
    cy.get("li").last().contains("Jobs").click();
  });
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs*",
      jobsListFixture("success")
    ).as("fetchJob");
    cy.setCookie(
      "jwt_token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5lZXRoYSIsInJvbGUiOiJQUklNRV9VU0VSIiwiaWF0IjoxNjIzMDY1NTMyfQ.68FuDFraHW7GplQiXVUrnsU1goYgmwd0tXNk6-HxCok"
    );
  });
  it("checking the success view of profile", () => {
    cy.get(".jobby-profile-name").contains("Rahul Attuluri");
  });
  it("checking the success view of joblist", () => {
    cy.get(".jobby-jobItem-title").contains("Backend Engineer");
  });
  it("checking the search", () => {
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs?employment_type=&minimum_package=&search=Backend",
      jobsListFixture("success")
    ).as("fetchJobSearch");
    cy.get(".jobby-search-input").last().type("Backend");
    cy.get("@fetchJobSearch.all").should("have.length", 1);
    cy.get(".jobby-clear-logo").last().invoke("show").click();
  });
  it("checking the employment type", () => {
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs?employment_type=FULLTIME&minimum_package=&search=",
      jobsListFixture("success")
    ).as("fetchJobwithEmployment");
    cy.get("#FullTime").check();
    cy.get("@fetchJobwithEmployment.all").should("have.length", 1);
  });
  it("checking the salary", () => {
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs?employment_type=FULLTIME&minimum_package=1000000&search=",
      jobsListFixture("success")
    ).as("fetchJobSalary");
    cy.get("#id-1000000").click();
    cy.get("@fetchJobSalary.all").should('have.length', 1);
  });
  it("checking jobitem", () => {
    cy.get(".jobby-jobItem-link").should(
      "have.attr",
      "href",
      "/react-assignments/JobbyTypescript/jobs/d6019453-f864-4a2f-8230-6a9642a59466"
    );
  });
  it("moving to home route from jobs route", () => {
    cy.get("li").first().click();
    cy.location("pathname").should("contains", "/");
  });
});
