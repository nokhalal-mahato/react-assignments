import { Component } from "react";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="jobby-home-page" data-testid='homepage'>
        <NavBar />
        <div className="jobby-home-page-content">
          <h1 className="jobby-home-heading">
            Find The Job That Fits Your Life
          </h1>
          <p className="jobby-home-description">
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>
          <Link to="/JobbyTypescript/jobs">
            <button className="jobby-find-job-button">Find Jobs</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Home;
