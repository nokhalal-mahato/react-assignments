import { Component } from "react";
import Header from "../../Components/Header";
import "./index.css";

class About extends Component {
  render() {
    return (
      <div className="hamburger-about">
        <Header />
        <div className="hamburger-image-contianer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
            className="hamburger-image-large"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
            className="hamburger-image-small"
          />
        </div>
      </div>
    );
  }
}

export default About;
