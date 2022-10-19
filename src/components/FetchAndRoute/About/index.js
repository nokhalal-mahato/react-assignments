import { Component } from "react";
import "./index.css";

class About extends Component {
  render() {
    return (
      <div className="bloglist-about">
        <div className="bloglist-about-image">
          <img src="https://assets.ccbp.in/frontend/react-js/contact-blog-img.png" />
        </div>
        <h1 className="bloglist-about-title">About</h1>
        <p>I love to create! I am a frontend developer</p>
      </div>
    );
  }
}
export default About;
