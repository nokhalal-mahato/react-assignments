import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Profile from "../Components/Profile";
import profileStore from "../Stores/profileStore";

afterEach(cleanup);

test("checking fetching of jobItem", () => {
  const store = profileStore;
  jest.spyOn(store, "fetchProfileData");
  render(
    <BrowserRouter>
      <Profile profileStore={profileStore} />
    </BrowserRouter>
  );
  expect(store.fetchProfileData).toBeCalledTimes(1);
  const profileTitle = screen.getByText("Rahul Attuluri");
  expect(profileTitle).toBeInTheDocument();
});
