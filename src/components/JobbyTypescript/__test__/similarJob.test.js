import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SimilarJob from "../Components/SimilarJobs";

const data = {
  company_logo_url:
    "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
  employment_type: "Freelance",
  id: "2b40029d-e5a5-48cc-84a6-b6e12d25625d",
  job_description:
    "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
  location: "Delhi",
  rating: 4,
  title: "Frontend Engineer",
};
test("testing similar job layout", () => {
  render(
    <BrowserRouter>
      <SimilarJob data={data} />
    </BrowserRouter>
  );
  const title=screen.getByText(data.title)
  expect(title).toBeInTheDocument();
});
