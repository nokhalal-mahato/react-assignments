import { Component } from "react";
import "./index.css";

class ProductItem extends Component {
  render() {
    const { productData } = this.props;

    return (
      <div className="NxtTrendz-product-item">
        <img
          src={productData.imageUrl}
          alt="product"
          className="NxtTrendz-product-thumbnail"
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
      </div>
    );
  }
}
export default ProductItem;
