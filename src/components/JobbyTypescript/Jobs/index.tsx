import { withRouter } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import JobDetailRoute from "./routes/JobItemDetail";
import Jobs from "./routes/Jobs";

export default [
  <ProtectedRoute
    exact
    path={`/JobbyTypescript/jobs`}
    component={Jobs}
    key="Jobs"
  />,
  <ProtectedRoute
    exact
    path={`/JobbyTypescript/jobs/:id`}
    component={withRouter(JobDetailRoute)}
    key="jobdetail"
  />,
];
