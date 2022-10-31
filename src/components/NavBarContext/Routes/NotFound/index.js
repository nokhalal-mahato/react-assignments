import { Component } from "react";
import Header from "../../Components/Header";
import NavbarContext from "../../Context/NavbarContext";
import "./index.css";

class NotFound extends Component {
  render() {
    return(
    <NavbarContext.Consumer>
      {value=>{
        const {isDarkMode}=value;
        return (
          <div
            className={`navbarcontext-notfound ${
              isDarkMode ? "dark-navbar-notfound" : ""
            }`}
          >
            <Header />
            <div className="navbarcontext-not-found-image">
              <img src="https://assets.ccbp.in/frontend/react-js/not-found-img.png" />
            </div>
            <h1>Lost Your Way?</h1>
            <p>
              Sorry, we can't find that page. You'll find lots to explore on the
              home page
            </p>
          </div>
        );
      }}
    </NavbarContext.Consumer>
    )
    
  }
}

export default NotFound;
