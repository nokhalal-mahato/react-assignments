import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./index";

test("testing navbar layout", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const homeTab = screen.getByText("Home");
  expect(homeTab).toBeInTheDocument();
  const logout = screen.getByText("Logout");
  expect(logout).toBeInTheDocument();
  const logoutBtn=screen.queryByRole('button')
  expect(logoutBtn).toBeInTheDocument();
  const logo = screen.queryByRole("img");
  expect(logo).toBeInTheDocument();
});
