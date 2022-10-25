import NxtTrendzNav from "../NxtTrendzNav";
import { Component } from "react";
import "./index.css";
import AllProducts from "../../Components/AllProducts";
import PrimeProducts from "../../Components/PrimePorducts";

class Product extends Component {
  render() {
    return (
      <div className="nxttrendz-products-page">
        <NxtTrendzNav />
        <div className="nxttrendz-products-container">
          <PrimeProducts/>
          <AllProducts/>
        </div>
      </div>
    );
  }
}
export default Product;
