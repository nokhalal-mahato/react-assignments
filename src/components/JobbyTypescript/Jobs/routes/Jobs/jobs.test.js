import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";

import Jobs from "./index";

import jobsStore from "../../stores/JobsStore";
import { jobsListStore, profileStore } from "../../../Common/stores/index.fixture";

const store = jobsStore;

beforeEach(() => {
  render(
    <Provider profileStore={profileStore} jobsListStore={jobsListStore}>
      <BrowserRouter>
        <Jobs jobsStore={jobsStore} />
      </BrowserRouter>
    </Provider>
  );
});

test("checking search input", () => {
  store.setSearchValue("nokhalal");
  expect(store.searchValue).toBe("nokhalal");
});

test("checking employment filter", () => {
  store.setEmploymentFilter("nokhalal");
  expect(store.employmentFilter[0]).toBe("nokhalal");
  store.setEmploymentFilter("mahato");
  expect(store.employmentFilter[1]).toBe("mahato");
  store.setEmploymentFilter("nokhalal");
  expect(store.employmentFilter[0]).toBe("mahato");
});

test("checking salary filter", () => {
  store.setSalary("nokhalal");
  expect(store.salary).toBe("nokhalal");
});

test("checking search input integration", () => {
  const searchInput = screen.getAllByTestId("search");
  fireEvent.change(searchInput[0], { target: { value: "nokhalal" } });
  expect(store.searchValue).toBe("nokhalal");
});

test("checking salary input integration", () => {
  const salaryInput = screen.getByTestId("id-1000000");
  fireEvent.click(salaryInput);
  expect(store.salary).toBe("1000000");
});
test("checking employment input integration", () => {
  store.employmentFilter = [];
  const EmploymentInput = screen.getByTestId("FullTime");
  fireEvent.click(EmploymentInput);
  expect(store.employmentFilter[0]).toBe("FullTime");
  fireEvent.click(EmploymentInput);
  expect(store.employmentFilter.length).toBe(0);
});
