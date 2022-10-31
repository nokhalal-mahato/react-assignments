import { Component } from "react";
import Header from "../../Components/Header";
import NavbarContext from "../../Context/NavbarContext";
import "./index.css";

class About extends Component {
  render() {
    return (
      <NavbarContext.Consumer>
        {(value) => {
          const { isDarkMode } = value;
          return (
            <div
              className={`navbarcontext-about ${
                isDarkMode ? "dark-navbarcontext-about" : ""
              }`}
            >
              <Header />
              <div className="navbarcontext-about-image-contianer">
                {isDarkMode ? (
                  <img src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png" />
                ) : (
                  <img src="https://assets.ccbp.in/frontend/react-js/about-light-img.png" />
                )}
                <h1 className="navbarcontext-about-text">About</h1>
              </div>
            </div>
          );
        }}
      </NavbarContext.Consumer>
    );
  }
}

export default About;
