import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { jobsListStore } from "../../../Common/stores/index.fixture";

import JobList from "./index";

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
  waitFor(() => {
    expect(store.fetchJobsList).toBeCalledTimes(1);
    const employmentType = screen.getByText("Backend Engineer");
    expect(employmentType).toBeInTheDocument();
  });
});
