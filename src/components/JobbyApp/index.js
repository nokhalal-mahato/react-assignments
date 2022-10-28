import { Route, Switch,withRouter } from "react-router-dom";
import Login from "./Routes/Login";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Routes/Home";
import Jobs from "./Routes/Jobs";
import JobDetailRoute from "./Routes/JobItemDetail";
import NotFound from "./Routes/NotFound";

const JobbyApp = () => {
  return (
    <Switch>
      <Route exact path="/JobbyApp/login" component={Login} />
      <ProtectedRoute exact path="/JobbyApp" component={Home} />
      <ProtectedRoute exact path={`/JobbyApp/jobs`} component={Jobs} />
      <ProtectedRoute
        exact
        path={`/JobbyApp/jobs/:id`}
        component={withRouter(JobDetailRoute)}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default JobbyApp;
