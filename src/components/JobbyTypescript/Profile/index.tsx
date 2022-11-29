import { Route } from "react-router-dom";
import Login from "./routes/Login";

export default [
  <Route
    exact
    path="/JobbyTypescript/login"
    component={Login}
    key="jobby-login"
  />,
];
