import React from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import BlogNav from "./BlogNav";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";

const BlogList = () => (
  <div className="bloglist-page">
    <div className="bloglist-content">
      <BlogNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
);
export default BlogList;
