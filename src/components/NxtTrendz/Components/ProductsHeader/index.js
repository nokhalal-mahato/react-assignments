import { Component } from "react";
import { BsFilterRight } from "react-icons/bs";
import "./index.css";
import sortbyOptions from "../../Constant/sortByOptionContants";

class ProductsHeader extends Component {
  onChangeHandler = (event) => {
    const { updateActiveOptionId } = this.props;
    updateActiveOptionId(event.target.value);
  };
  render() {
    const { activeOptionId } = this.props;
    return (
      <div className="nxttrendz-products-header">
        <h1 className="nxttrendz-products-list-heading">All Products</h1>
        <div className="nxttrendz-sort-by-container">
          <BsFilterRight className="nxttrendz-sort-by-icon" />
          <p className="nxttrendz-sort-by">Sort by</p>
          <select
            className="nxttrendz-sort-by-select"
            value={activeOptionId}
            onChange={this.onChangeHandler}
          >
            {sortbyOptions.map((item) => (
              <option
                key={item.optionId}
                value={item.optionId}
                className="nxttrendz-selected-option"
              >
                {item.displayText}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default ProductsHeader;
