import NxtTrendzNav from "../NxtTrendzNav";
import { Component } from "react";
import "./index.css";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";

class Cart extends Component {
  render() {
    if (!Cookies.get("jwt_token")) {
      return <Redirect to='/NxtTrendz/login'/>;
    }
    return (
      <div className="nxttrendz-cart-page">
        <NxtTrendzNav />
        <div className="nxttrendz-cart-container">
          <div className="nxttrendz-cart-img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
              alt="cart"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Cart;
