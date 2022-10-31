import { Component } from "react";
import Header from "../../Components/Header";
import NavbarContext from "../../Context/NavbarContext";
import './index.css'

class Home extends Component{
    render(){
        return (
          <NavbarContext.Consumer>
            {value=>{
              const {isDarkMode}=value;
              return (
                <div
                  className={`navbarcontext-home ${
                    isDarkMode ? "dark-navbarcontext-home" : ""
                  }`}
                >
                  <Header />
                  <div className="navbarcontext-home-image-contianer ">
                    {isDarkMode ? (
                      <img src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png" />
                    ) : (
                      <img src="https://assets.ccbp.in/frontend/react-js/home-light-img.png" />
                    )}
                    <h1 className="navbarcontext-home-text">Home</h1>
                  </div>
                </div>
              );
            }}
          </NavbarContext.Consumer>
          
        );
    }
}

export default Home;