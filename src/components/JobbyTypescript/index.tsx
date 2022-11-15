import { Route, Switch,withRouter } from "react-router-dom";
import Login from "./Routes/Login";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Routes/Home";
import Jobs from "./Routes/Jobs";
import JobDetailRoute from "./Routes/JobItemDetail";
import NotFound from "./Routes/NotFound";

const JobbyTypescript = () => {
  return (
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
  );
};

export default JobbyTypescript;
