import { Component } from "react";
import NxtTrendzNav from "../NxtTrendzNav";
import "./index.css";

class Home extends Component {

  render() {
    return (
      <div className="nxttrendz-home-page">
        <NxtTrendzNav />
        <div className="nxttrendz-home-container">
          <div className="nxttrendz-home-content">
            <h1 className="nxttrendz-home-heading">
              Clothes That Get YOU Noticed
            </h1>
            <div className="nxttrendz-home-mobile-img">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                alt="dresses to be noticed"
              />
            </div>
            <p className="nxttrendz-home-description">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button type="button" className="nxttrendz-shop-now-btn">
              Shop Now
            </button>
          </div>
          <div className="nxttrendz-home-large-img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="dresses to be noticed"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
