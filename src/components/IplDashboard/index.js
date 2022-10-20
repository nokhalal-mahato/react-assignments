import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import TeamMatch from "./TeamMatch";


const FetchAndRoute = () => (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team/:id" component={TeamMatch} />
        <Route component={NotFound} />
      </Switch>
);
export default FetchAndRoute;