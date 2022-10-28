import { Component } from "react";
import "./index.css";
import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import {AiFillHome} from 'react-icons/ai';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

class NavBar extends Component {
  logoutHandler = () => {
    Cookies.remove("jwt_token");
    this.props.history.replace("/JobbyApp/login");
  };
  render() {
    return (
      <nav className="jobby-nav-header">
        <div className="jobby-nav-content">
          <img
            className="jobby-website-logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
          <div className="jobby-nav-middle">
            <ul className="jobby-nav-menu">
              <Link to="/JobbyApp" className="jobby-nav-link">
                <li>Home</li>
              </Link>
              <Link to="/JobbyApp/Jobs" className="jobby-nav-link">
                <li>Jobs</li>
              </Link>
            </ul>
          </div>

          <button
            type="button"
            className="jobby-logout-desktop-btn"
            onClick={this.logoutHandler}
          >
            Logout
          </button>
          <div className="jobby-mobile-nav">
            <Link to="/JobbyApp">
              <AiFillHome className="jobby-mobile-nav-icon" />
            </Link>

            <Link to="/JobbyApp/Jobs">
              <BsFillBriefcaseFill className="jobby-mobile-nav-icon" />
            </Link>
            <FiLogOut
              onClick={this.logoutHandler}
              className="jobby-mobile-nav-icon"
            />
          </div>
        </div>
      </nav>
    );
  }
}
export default withRouter(NavBar);
