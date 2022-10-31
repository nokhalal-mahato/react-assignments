import { Component } from "react";
import "./index.css";

class RightNavBar extends Component {
  render() {
    return (
      <div className="right-nav-bar">
        <h3>Right NavBar</h3>
        <div className="right-nav-ads-container">
          <div className="right-nav-ads">
            <p>Ad 1</p>
          </div>
          <div className="right-nav-ads">
            <p>Ad 2</p>
          </div>
        </div>
      </div>
    );
  }
}
export default RightNavBar;
