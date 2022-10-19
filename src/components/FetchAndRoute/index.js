import React from "react";
import "./index.css";
import {Route, Switch } from "react-router-dom";
import Home from "./Home";
import BlogNav from "./BlogNav";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import BlogItemDetail from "./BlogItemDetail";

const FetchAndRoute = () => (
  <div className="bloglist-page">
    <div className="bloglist-content">
      <BlogNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog/:id" component={BlogItemDetail}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
);
export default FetchAndRoute;
