import NxtTrendzNav from "../NxtTrendzNav";
import { Component } from "react";
import "./index.css";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";

class Product extends Component {
  render() {
    if (!Cookies.get("jwt_token")) {
      return <Redirect to="/NxtTrendz/login" />;
    }
    return (
      <div className="nxttrendz-products-page">
        <NxtTrendzNav />
        <div className="nxttrendz-products-container">
          <div className="nxttrendz-products-img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
              alt="products"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
