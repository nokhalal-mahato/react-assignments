import { Component } from "react";
import './index.css';
import {Link} from 'react-router-dom';

class EmptyCartView extends Component{
    render(){
        return (
          <div className="empty-cart-view">
            <div className="empty-cart-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
                alt="empty cart"
              />
            </div>
            <Link to="/NxtTrendz/products">
              <button className="empty-cart-show-now">Shop Now</button>
            </Link>
          </div>
        );
    }
}

export default EmptyCartView;