import { Route, Switch,withRouter } from "react-router-dom";
import Login from "./Routes/Login";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Routes/Home";
import Jobs from "./Routes/Jobs";
import JobDetailRoute from "./Routes/JobItemDetail";
import NotFound from "./Routes/NotFound";
import { Provider } from "mobx-react";
import profileStore from "./Stores/profileStore";
import jobItemDetailStore from "./Stores/jobItemDetailStore";
import jobsStore from "./Stores/jobsStore";
import jobsListStore from "./Stores/jobsListStore";
import LoginFormStore from "./Stores/LoginFormStore";

const JobbyTypescript = () => {
  return (
    <Provider
      profileStore={profileStore}
      jobItemDetailStore={jobItemDetailStore}
      jobsStore={jobsStore}
      jobsListStore={jobsListStore}
      LoginFormStore={LoginFormStore}
    >
      <Switch>
        <Route exact path="/JobbyTypescript/login" component={Login} />
        <ProtectedRoute exact path="/JobbyTypescript" component={Home} />
        <ProtectedRoute exact path={`/JobbyTypescript/jobs`} component={Jobs} />
        <ProtectedRoute
          exact
          path={`/JobbyTypescript/jobs/:id`}
          component={withRouter(JobDetailRoute)}
        />
        <Route component={NotFound} />
      </Switch>
    </Provider>
  );
};

export default JobbyTypescript;
