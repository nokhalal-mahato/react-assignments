import { Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

export default [
  <ProtectedRoute path="/JobbyTypescript" component={Home} exact key='Home'/>,
  <Route component={NotFound} key='NotFound'/>,
];
