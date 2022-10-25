import { Component } from "react";
import './index.css';
import { Link, withRouter } from "react-router-dom";

class SimilarProducts extends Component {
  render() {
    const { productData } = this.props;

    return (
      <Link
      to={"/NxtTrendz/products/" + productData.id}
        className="NxtTrendz-similar-item"
      >
        <img
          src={productData.image_url}
          alt="product"
          className="NxtTrendz-similar-item-thumbnail"
        />
        <h3 className="NxtTrendz-product-title">{productData.title}</h3>
        <p className="NxtTrendz-product-brand">by {productData.brand}</p>
        <div className="NxtTrendz-product-details">
          <p className="NxtTrendz-product-price">Rs {productData.price}/-</p>
          <div className="NxtTrendz-product-rating-container">
            <p className="NxtTrendz-product-rating">{productData.rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="NxtTrendz-product-star"
            />
          </div>
        </div>
      </Link>
    );
  }
}
export default withRouter(SimilarProducts);