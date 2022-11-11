import { Route, Switch,withRouter } from "react-router-dom";
import Login from "./Routes/Login";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Routes/Home";
import Jobs from "./Routes/Jobs";
import JobDetailRoute from "./Routes/JobItemDetail";
import NotFound from "./Routes/NotFound";

const JobbyMobx = () => {
  return (
    <Switch>
      <Route exact path="/JobbyMobx/login" component={Login} />
      <ProtectedRoute exact path="/JobbyMobx" component={Home} />
      <ProtectedRoute exact path={`/JobbyMobx/jobs`} component={Jobs} />
      <ProtectedRoute
        exact
        path={`/JobbyMobx/jobs/:id`}
        component={withRouter(JobDetailRoute)}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default JobbyMobx;
