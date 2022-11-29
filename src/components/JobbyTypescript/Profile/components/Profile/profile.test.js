import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { profileStore } from "../../../Common/stores/index.fixture";
import Profile from "../Profile";

test("checking fetching of profile", () => {
  jest.spyOn(profileStore, "fetchProfileData");
  render(
    <BrowserRouter>
      <Profile profileStore={profileStore} />
    </BrowserRouter>
  );
  expect(profileStore.fetchProfileData).toBeCalledTimes(1);
  waitFor(() => {
    const profileTitle = screen.getByText("Rahul Attuluri");
    expect(profileTitle).toBeInTheDocument();
  });
});
