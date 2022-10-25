import { Component } from "react";
import ApiStatusConstant from "../../Constant/ApiStatusConstant";
import NxtTrendzNav from "../NxtTrendzNav";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import './index.css';
import SimilarProducts from "../../Components/SimilarProductItem";

class ProductDetails extends Component {
  state = {
    productDetail: {},
    apiStatus: ApiStatusConstant.loading,
    quantity:1
  };

  componentDidMount() {
    this.getProductDetails();
  }
  increaseQuantity=()=>{
    this.setState((prevState)=>({quantity:prevState.quantity + 1}))
  }
  decreaseQuantity=()=>{
    this.setState((prevState)=>({quantity:prevState.quantity - 1}))
  }

  getProductDetails = async () => {
    const params = this.props.match.params.id;
    const jwtToken = Cookies.get("jwt_token");
    const response = await fetch("https://apis.ccbp.in/products/" + params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    });
    if (response.ok) {
      const fetchedData = await response.json();
      const updatedData = {
        id: fetchedData.id,
        imageUrl: fetchedData.image_url,
        title: fetchedData.title,
        brand: fetchedData.brand,
        totalReviews: fetchedData.total_reviews,
        rating: fetchedData.rating,
        price: fetchedData.price,
        description: fetchedData.description,
        availability: fetchedData.availability,
        similarProducts: fetchedData.similar_products,
      };
      this.setState({
        productDetail: updatedData,
        apiStatus: ApiStatusConstant.failed,
      });
    } else {
      this.setState({
        apiStatus: ApiStatusConstant.failed,
      });
    }
  };

  renderProductDetail = () => {
    const { productDetail,quantity } = this.state;
    return (
      <div className="nxttendz-product-detail">
        <div className="nxttendz-product-detail-top">
          <div className="nxttendz-product-detail-image">
            <img src={productDetail.imageUrl} alt={productDetail.title} />
          </div>
          <div className="nxttendz-product-detail-content">
            <h1 className="nxttendz-product-detail-heading">
              {productDetail.title}
            </h1>
            <h2 className="nxttendz-product-detail-price">
              Rs {productDetail.price}/-
            </h2>
            <div className="nxttendz-product-detail-rating-container">
              <div className="NxtTrendz-product-rating-container">
                <p className="NxtTrendz-product-rating">
                  {productDetail.rating}
                </p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                  className="NxtTrendz-product-star"
                />
              </div>
              <p className="nxttendz-product-detail-reviews">
                {productDetail.totalReviews} Reviews
              </p>
            </div>
            <p className="nxttendz-product-detail-description">
              {productDetail.description}
            </p>
            <p className="nxttendz-product-detail-availability">
              <span className="nxttendz-product-detail-bold">Available: </span>
              {productDetail.availability}
            </p>
            <p className="nxttendz-product-detail-brand">
              <span className="nxttendz-product-detail-bold">Brand: </span>
              {productDetail.brand}
            </p>
            <hr />
            <button
              className="nxttendz-product-quantity"
              onClick={this.decreaseQuantity}
            >
              -
            </button>
            <span className="nxttendz-product-quantity-value">{quantity}</span>
            <button
              className="nxttendz-product-quantity"
              onClick={this.increaseQuantity}
            >
              +
            </button>
            <br />
            <button type="button" className="nxttrendz-shop-now-btn">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="nxttendz-product-detail-bottom">
          <h2 className="nxttendz-similar-products">Similar Products</h2>
          <div className="nxttendz-similar-products-container">
            {productDetail.similarProducts.map((item) => (
              <SimilarProducts key={item.id} productData={item} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  renderProductDetailFailureView = () => (
    <div className="nxttendz-prodcut-detail-failure">
      <div className="nxttendz-prodcut-detail-failure-image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
          alt="no product found"
        />
      </div>
      <h1>Page Not Found</h1>
      <Link to="/NxtTrendz/products">
        <button type="button" className="nxttrendz-shop-now-btn">
          Continue Shopping
        </button>
      </Link>
    </div>
  );

  renderLoadingView = () => (
    <div className="nxttendz-products-loader-container">
      <ThreeDots color="#0284c7" height={80} width={80} />
    </div>
  );

  renderContent = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case ApiStatusConstant.loading:
        return this.renderLoadingView();
      case ApiStatusConstant.failed:
        return this.renderProductDetailFailureView();
      case ApiStatusConstant.success:
        return this.renderProductDetail();
    }
  };
  render() {
    return (
      <div className="nxttrendz-product-detail-page">
        <NxtTrendzNav />
        {this.renderContent()}
      </div>
    );
  }
}

export default ProductDetails;