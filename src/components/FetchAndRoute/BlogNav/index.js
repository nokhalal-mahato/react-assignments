import { Component } from "react";
import "./index.css";
import { Link, withRouter } from "react-router-dom";

class BlogNav extends Component {
  render() {
    const url = this.props.match.url;
    return (
      <div className="blog-nav">
        <div className="blog-nav-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
          />
          <h2 className="blognav-header">Wave</h2>
        </div>
        <ul className="blognav-list">
          <li>
            <Link to={url} className="blognav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to={`${url}/about`} className="blognav-item">
              About
            </Link>
          </li>
          <li>
            <Link to={`${url}/Contact`} className="blognav-item">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default withRouter(BlogNav);
