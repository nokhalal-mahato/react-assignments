import { Component } from "react";
import NavBar from "../../Components/NavBar";
import "./index.css";

class NotFound extends Component {
  render() {
    return (
      <div className="jobby-notfound-page">
        <NavBar />
        <div className="jobby-notfound-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
            alt="failure"
          />
          <h2 className="jobby-notfound-heading">Page Not Found</h2>
          <p className="jobby-notfound-text">
            we're sorry, the page you requested could not be found.
          </p>
        </div>
      </div>
    );
  }
}
export default NotFound;
