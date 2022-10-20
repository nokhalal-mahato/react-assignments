import React from "react";
import { Route, Switch,useRouteMatch } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import TeamMatch from "./TeamMatch";


const FetchAndRoute = () => { 
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={Home} />
      <Route exact path={`${path}/team/:id`} component={TeamMatch} />
      <Route component={NotFound} />
    </Switch>
  );
      
};
export default FetchAndRoute;