import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import JobDetail from "./index";
import jobDetail from '../../fixtures/getJobDetail.json'

const data = jobDetail;
test("to check jobdetail component render", () => {
  render(
    <BrowserRouter>
      <JobDetail data={data} />
    </BrowserRouter>
  );

  const rating = screen.getAllByTestId("rating");
  expect(rating[0]).toHaveTextContent('4')
},2000);
