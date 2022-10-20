import { Component } from "react";
import "./index.css";
import {Link, withRouter} from 'react-router-dom';

class NxtTrendzNav extends Component {
  render() {
    const url=this.props.match.url;
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
              <Link to={url} className="nxttrendz-nav-link">
                <li>Home</li>
              </Link>
              <Link to={`${url}/products`} className="nxttrendz-nav-link">
                <li>Products</li>
              </Link>
              <Link to={`${url}/cart`} className="nxttrendz-nav-link">
                <li>Cart</li>
              </Link>
            </ul>
            <button type="button" className="nxttrendz-logout-desktop-btn">
              Logout
            </button>
          </div>

          <button type="button" className="nxttrendz-logout-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="logout icon"
              className="logout-icon"
            />
          </button>
        </div>
        <div className="mobile-nav">
          <Link to={url}>
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png" />
          </Link>

          <Link to={`${url}/products`}>
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png" />
          </Link>
          <Link to={`${url}/cart`}>
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png" />
          </Link>
        </div>
      </nav>
    );
  }
}
export default withRouter(NxtTrendzNav);
