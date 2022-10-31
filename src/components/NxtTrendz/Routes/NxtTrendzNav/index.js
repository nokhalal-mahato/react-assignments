import { Component } from "react";
import "./index.css";
import {Link, withRouter} from 'react-router-dom';
import Cookies from "js-cookie";
import CartContext from "../../Context/CartContext";

class NxtTrendzNav extends Component {
  logoutHandler=()=>{
    Cookies.remove('jwt_token');
    this.props.history.replace('/NxtTrendz/login');
  }
  renderCartItemNumbers=()=>{
    return(
      <CartContext.Consumer>
        {value=>{
          const {cartList}=value;          
          return (cartList.length>0?<span className="cart-quantity-nav">{cartList.length}</span>:null)
        }}
      </CartContext.Consumer>
    )
  }
  render() {
    return (
      <nav className="nxttrendz-nav-header">
        <div className="nxttrendz-nav-content">
          <img
            className="nxttrendz-website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div className="nxttrendz-nav-right">
            <ul className="nxttrendz-nav-menu">
              <Link to="/NxtTrendz" className="nxttrendz-nav-link">
                <li>Home</li>
              </Link>
              <Link to="/NxtTrendz/products" className="nxttrendz-nav-link">
                <li>Products</li>
              </Link>
              <Link to="/NxtTrendz/cart" className="nxttrendz-nav-link">
                <li>Cart {this.renderCartItemNumbers()}</li>
              </Link>
            </ul>
            <button
              type="button"
              className="nxttrendz-logout-desktop-btn"
              onClick={this.logoutHandler}
            >
              Logout
            </button>
          </div>

          <button
            type="button"
            className="nxttrendz-logout-mobile-btn"
            onClick={this.logoutHandler}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="logout icon"
              className="logout-icon"
            />
          </button>
        </div>
        <div className="mobile-nav">
          <Link to="/NxtTrendz">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png" />
          </Link>

          <Link to="/NxtTrendz/products">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png" />
          </Link>
          <Link
            to="/NxtTrendz/cart"
            className="nxttrendz-nav-link nxttrendz-nav-cart-link"
          >
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png" />
            {this.renderCartItemNumbers()}
          </Link>
        </div>
      </nav>
    );
  }
}
export default withRouter(NxtTrendzNav);
