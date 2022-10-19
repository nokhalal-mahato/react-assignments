import { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";

class BlogNav extends Component {
  render() {
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
            <Link to="/" className="blognav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="blognav-item">
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="blognav-item">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default BlogNav;
