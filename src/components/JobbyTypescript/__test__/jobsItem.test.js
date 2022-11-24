import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import JobItemDetail from "../Routes/JobItemDetail";
import jobItemDetailStore from "../Stores/jobItemDetailStore";


afterEach(cleanup);

test("checking fetching of jobItem", () => {
  const store = jobItemDetailStore;
  jest.spyOn(store, "fetchJobDetail");
  render(
    <BrowserRouter>
      <JobItemDetail jobItemDetailStore={jobItemDetailStore} match={{params:{id:'sdkskdksd'}}}/>
    </BrowserRouter>
  );
  expect(store.fetchJobDetail).toBeCalledTimes(1);
  const employmentType = screen.getByText("Internship");
  expect(employmentType).toBeInTheDocument();
});

