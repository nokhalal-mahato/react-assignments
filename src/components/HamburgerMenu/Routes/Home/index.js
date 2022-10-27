import { Component } from "react";
import Header from "../../Components/Header";
import './index.css'

class Home extends Component{
    render(){
        return (
          <div className="hamburger-home">
            <Header />
            <div className="hamburger-image-contianer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
                className="hamburger-image-large"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
                className="hamburger-image-small"
              />
            </div>
          </div>
        );
    }
}

export default Home;