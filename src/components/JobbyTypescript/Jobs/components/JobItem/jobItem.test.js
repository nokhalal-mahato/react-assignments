import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import JobItem from "./index";
import JobItemDetail from "../../fixtures/getJobItemDetail.json";

const data = JobItemDetail;

test("testing jobitem layout", () => {
  render(
    <BrowserRouter>
      <JobItem jobData={data} />
    </BrowserRouter>
  );
  waitFor(() => {
    const title = screen.getByText(data.title);
    expect(title).toBeInTheDocument();
  });
});
