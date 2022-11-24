import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../Routes/Home";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
});
test("testing NavBar", () => {
  const navBar = screen.getByText("Home");
  expect(navBar).toBeInTheDocument();
});

test("testing home layout", () => {
  const findJobBtn = screen.getByText("Find Jobs");
  expect(findJobBtn).toBeInTheDocument();
});
