import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import JobList from "../Components/jobsList";
import jobsListStore from "../Stores/jobsListStore";

afterEach(cleanup);

test("checking fetching of joblist", () => {
  const store = jobsListStore;
  jest.spyOn(store, "fetchJobsList");
  render(
    <BrowserRouter>
      <JobList
        jobsListStore={jobsListStore}
        salary=""
        searchValue=""
        employmentFilter={[]}
      />
    </BrowserRouter>
  );
  expect(store.fetchJobsList).toBeCalledTimes(1);
  const employmentType = screen.getByText("Backend Engineer");
  expect(employmentType).toBeInTheDocument();
});
