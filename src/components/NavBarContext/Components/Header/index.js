import { Component } from "react";
import "./index.css";
import "reactjs-popup/dist/index.css";
import NavbarContext from "../../Context/NavbarContext";
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <NavbarContext.Consumer>
        {(value) => {
          const { isDarkMode, toggleDarkMode } = value;
          return (
            <div
              className={`navbarcontext-header ${
                isDarkMode ? "dark-navbarcontext-header" : ""
              }`}
            >
              <div className="navbarcontext-header-logo">
                {isDarkMode ? (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                    alt="logo"
                  />
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                    alt="logo"
                  />
                )}
              </div>
              <div className="navbarcontext-header-nav">
                <Link to="/NavBarContext" className="navbarcontext-nav-link">
                  <h2>Home</h2>
                </Link>
                <Link
                  to="/NavBarContext/about"
                  className="navbarcontext-nav-link"
                >
                  <h2>About</h2>
                </Link>
              </div>
              <div
                className="navbarcontext-header-toogledark"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    alt="dark"
                  />
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="light"
                  />
                )}
              </div>
            </div>
          );
        }}
      </NavbarContext.Consumer>
    );
  }
}

export default Header;
