import { Component } from "react";
import Header from "../../Components/Header";
import "./index.css";

class NotFound extends Component {
  render() {
    return (
      <div className="hamburger-notfound">
        <Header />
        <div className="hamburger-not-found-image">
          <img src="https://assets.ccbp.in/frontend/react-js/not-found-img.png" />
        </div>
        <h1>Lost Your Way?</h1>
        <p>
          Sorry, we can't find that page. You'll find lots to explore on the
          home page
        </p>
      </div>
    );
  }
}

export default NotFound;
