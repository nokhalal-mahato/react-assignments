import { Switch } from "react-router-dom";
import { Provider } from "mobx-react";

import stores from "./Common/stores";
import jobsStore from "./Jobs/stores/JobsStore";
import CommonRoutes from "./Common";
import Jobs from "./Jobs";
import Profile from "./Profile";

const JobbyTypescript = () => {
  const { profileStore, loginFormStore, jobItemDetailStore, jobsListStore } =
    stores;
  return (
    <Provider
      profileStore={profileStore}
      jobItemDetailStore={jobItemDetailStore}
      jobsStore={jobsStore}
      jobsListStore={jobsListStore}
      loginFormStore={loginFormStore}
    >
      <Switch>
        {Profile}
        {Jobs}
        {CommonRoutes}
      </Switch>
    </Provider>
  );
};

export default JobbyTypescript;
