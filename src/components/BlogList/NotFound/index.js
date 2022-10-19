import { Component } from "react";
import "./index.css";

class NotFound extends Component {
  render() {
    return (
      <div className="notfound">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
          alt="not found"
        />
        <h1 className="notfound-title">Not Found</h1>
      </div>
    );
  }
}
export default NotFound;
