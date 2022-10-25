import React from "react";
import "./index.css";
import { Route, Switch,useRouteMatch} from "react-router-dom";
import Home from "./Home";
import BlogNav from "./BlogNav";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import BlogItemDetail from "./BlogItemDetail";

const FetchAndRoute = () => {
  let { path } = useRouteMatch();
  return (
    <div className="bloglist-page">
      <div className="bloglist-content">
        <BlogNav />
        <Switch>
          <Route exact path={`${path}/`} component={Home} />
          <Route exact path={`${path}/about`} component={About} />
          <Route exact path={`${path}/contact`} component={Contact} />
          <Route exact path={`${path}/blog/:id`} component={BlogItemDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default FetchAndRoute;
