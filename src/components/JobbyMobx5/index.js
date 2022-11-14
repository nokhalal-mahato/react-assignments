import { Route, Switch,withRouter } from "react-router-dom";
import Login from "./Routes/Login";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Routes/Home";
import Jobs from "./Routes/Jobs";
import JobDetailRoute from "./Routes/JobItemDetail";
import NotFound from "./Routes/NotFound";

const JobbyMobx5 = () => {
  return (
    <Switch>
      <Route exact path="/JobbyMobx5/login" component={Login} />
      <ProtectedRoute exact path="/JobbyMobx5" component={Home} />
      <ProtectedRoute exact path={`/JobbyMobx5/jobs`} component={Jobs} />
      <ProtectedRoute
        exact
        path={`/JobbyMobx5/jobs/:id`}
        component={withRouter(JobDetailRoute)}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default JobbyMobx5;
