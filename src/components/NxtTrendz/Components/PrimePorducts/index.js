import { Component } from "react";
import ApiStatusConstant from "../../Constant/ApiStatusConstant";
import { ThreeDots } from "react-loader-spinner";
import Cookies from "js-cookie";
import "./index.css";
import ProductItem from "../ProductItem";

class PrimeProducts extends Component {
  state = {
    primeProducts: [],
    apiStatus: ApiStatusConstant.loading,
  };

  componentDidMount() {
    this.getPrimeDeals();
  }

  getPrimeDeals = async () => {
    this.setState({
      apiStatus: ApiStatusConstant.loading,
    });

    const jwtToken = Cookies.get("jwt_token");
    const response = await fetch("https://apis.ccbp.in/prime-deals", {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    });
    if (response.ok) {
      const fetchedData = await response.json();
      const updatedData = fetchedData.prime_deals.map((product) => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }));
      this.setState({
        primeProducts: updatedData,
        apiStatus: ApiStatusConstant.success,
      });
    } else {
      this.setState({
        apiStatus: ApiStatusConstant.failure,
      });
    }
  };

  renderPrimeDealsList = () => {
    const { primeProducts } = this.state;
    return (
      <div className="nxttendz-primedeals">
        <h1 className="nxttendz-primedeals-list-heading">
          Exclusive Prime Deals
        </h1>
        <div className="nxttendz-products-list">
          {primeProducts.map((product) => (
            <ProductItem productData={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  };

  renderPrimeDealsFailureView = () => (
    <div className="nxttendz-register-prime-image">
      <img
        src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
        alt="Register Prime"
      />
    </div>
  );

  renderLoadingView = () => (
    <div className="nxttendz-products-loader-container">
      <ThreeDots color="#0284c7" height={80} width={80} />
    </div>
  );

  render() {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case ApiStatusConstant.success:
        return this.renderPrimeDealsList();
      case ApiStatusConstant.failure:
        return this.renderPrimeDealsFailureView();
      case ApiStatusConstant.loading:
        return this.renderLoadingView();
    }
  }
}
export default PrimeProducts;
