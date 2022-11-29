import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import JobItemDetail from ".";
import { jobItemDetailStore } from "../../../Common/stores/index.fixture";

test("checking fetching of jobItem", () => {
  const store = jobItemDetailStore;
  jest.spyOn(store, "fetchJobDetail");
  render(
    <BrowserRouter>
      <JobItemDetail
        jobItemDetailStore={jobItemDetailStore}
        match={{ params: { id: "sdkskdksd" } }}
      />
    </BrowserRouter>
  );
  expect(store.fetchJobDetail).toBeCalledTimes(1);
  waitFor(() => {
    const employmentType = screen.getByText("Internship");
    expect(employmentType).toBeInTheDocument();
  });
});
