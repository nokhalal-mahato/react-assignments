import { Component } from "react";
import ProductItem from "../ProductItem";
import { ThreeDots } from "react-loader-spinner";
import Cookies from "js-cookie";
import "./index.css";
import ApiStatusConstant from "../../Constant/ApiStatusConstant";
import ProductsHeader from "../ProductsHeader";
import sortbyOptions from "../../Constant/sortByOptionContants";
import ProductFilter from "../ProductFilter";

class AllProducts extends Component {
  state = {
    productsList: [],
    apiStatus: ApiStatusConstant.loading,
    activeOptionId: sortbyOptions[0].optionId,
    rating: "",
    titleSearch: "",
    category: "",
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const { activeOptionId, rating, titleSearch, category } = this.state;
    try {
      const jwtToken = Cookies.get("jwt_token");
      const response = await fetch(
        `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${category}&title_search=${titleSearch}&rating=${rating}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        const updatedData = responseData.products.map((product) => ({
          title: product.title,
          brand: product.brand,
          price: product.price,
          id: product.id,
          imageUrl: product.image_url,
          rating: product.rating,
        }));
        if (responseData.products.length === 0) {
          console.log('hi');
          this.setState({
            productsList: updatedData,
            apiStatus: ApiStatusConstant.empty,
          });
          return;
        }
        this.setState({
          productsList: updatedData,
          apiStatus: ApiStatusConstant.success,
        });
      } else {
        this.setState({
          apiStatus: ApiStatusConstant.failed,
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({ apiStatus: ApiStatusConstant.failed });
    }
  };

  onChangeInput = (value) => {
    this.setState({ titleSearch: value }, this.getProducts);
  };

  onSelectCategory = (category) => {
    console.log(category);
    this.setState({ category: category }, this.getProducts);
  };

  onSelectRating = (rating) => {
    // console.log(rating);
    this.setState({ rating: rating }, this.getProducts);
  };

  clearFilter = () => {
    this.setState(
      { titleSearch: "", rating: "", category: "" },
      this.getProducts
    );
  };

  updateActiveOptionId = (activeOptionId) => {
    this.setState({ activeOptionId: activeOptionId }, this.getProducts);
  };

  renderProductsList = () => {
    const { productsList, activeOptionId } = this.state;
    return (
      <div className="NxtTrendz-allproducts-container">
        <ProductsHeader
          activeOptionId={activeOptionId}
          updateActiveOptionId={this.updateActiveOptionId}
        />
        <div className="NxtTrendz-products-list">
          {productsList.map((product) => (
            <ProductItem productData={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  };

  renderContent = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case ApiStatusConstant.loading:
        return (
          <div className="nxttrend-allproduct-center">
            <ThreeDots color="#0284c7" height={80} width={80} />
          </div>
        );
      case ApiStatusConstant.failed:
        return (
          <div className="nxttrend-allproduct-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
              alt="failure"
            />
            <h2>Oops! Something went wrong</h2>
            <p className="nxttrend-allproduct-failure-text">
              We are having some trouble proccessing your request.
            </p>
            <p className="nxttrend-allproduct-failure-text">
              Please try again later
            </p>
          </div>
        );
      case ApiStatusConstant.success:
        return this.renderProductsList();
      case ApiStatusConstant.empty:
        return (
          <div className="nxttrend-allproduct-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
              alt="no product"
            />
            <h2>No Product Found</h2>
            <p className="nxttrend-allproduct-empty-text">
              We could not find any product. Try other filters
            </p>
          </div>
        );
    }
  };
  render() {
    const {category}=this.state;
    return (
      <div className="nxttrendz-allproducts">
        <ProductFilter
          onChangeInput={this.onChangeInput}
          onSelectCategory={this.onSelectCategory}
          onSelectRating={this.onSelectRating}
          clearFilter={this.clearFilter}
          category={category}
        />
        {this.renderContent()}
      </div>
    );
  }
}
export default AllProducts;
