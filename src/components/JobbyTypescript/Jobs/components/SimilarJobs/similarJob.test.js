import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import SimilarJob from ".";
import SimilarJobDetail from "../../fixtures/getSimilarJobDetail.json";

test("testing similar job layout", () => {
  render(
    <BrowserRouter>
      <SimilarJob data={SimilarJobDetail} />
    </BrowserRouter>
  );
  const title = screen.getByText("Backend Engineer");
  expect(title).toBeInTheDocument();
});
