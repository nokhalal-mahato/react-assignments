import { Component } from "react";
import filterCategory from "../../Constant/filterCategory";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import './index.css'

class ProductFilter extends Component {

  onChangeInput = (event) => {
    const {onChangeInput}=this.props;
    onChangeInput(event.target.value);
  };
  onSelectCategoryHandler=(event)=>{
    const { onSelectCategory } = this.props;
    onSelectCategory(event.target.id);
  }
  onSelectRatingHandler=(star)=>{
    const { onSelectRating } = this.props;
    onSelectRating(star);
  }
  render() {
    const {clearFilter,category}=this.props;
    return (
      <div className="nxttrendz-product-filter">
        <div className="nxttrendz-input-field">
          <input
            className="nxttrendz-input"
            placeholder="Search"
            onChange={this.onChangeInput}
            type="text"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search logo"
          />
        </div>
        <h3 className="nxttrendz-filter-category">Category</h3>
        {filterCategory.map((item) => (
          <p key={item.id} id={item.id} onClick={this.onSelectCategoryHandler} className={category==item.id ? 'active-category':''}>
            {item.title}
          </p>
        ))}
        <h3 className="nxttrendz-filter-category">Rating</h3>
        <p onClick={this.onSelectRatingHandler.bind(this, 4)}>
          <AiFillStar className="nxttrend-star-icon" />
          <AiFillStar className="nxttrend-star-icon" />
          <AiFillStar className="nxttrend-star-icon" />
          <AiFillStar className="nxttrend-star-icon" />
          <AiOutlineStar className="nxttrend-star-icon" /> & up
        </p>
        <p onClick={this.onSelectRatingHandler.bind(this, 3)}>
          <AiFillStar className="nxttrend-star-icon" />
          <AiFillStar className="nxttrend-star-icon" />
          <AiFillStar className="nxttrend-star-icon" />
          <AiOutlineStar className="nxttrend-star-icon" />
          <AiOutlineStar className="nxttrend-star-icon" /> & up
        </p>
        <p onClick={this.onSelectRatingHandler.bind(this, 2)}>
          <AiFillStar className="nxttrend-star-icon" />
          <AiFillStar className="nxttrend-star-icon" />
          <AiOutlineStar className="nxttrend-star-icon" />
          <AiOutlineStar className="nxttrend-star-icon" />
          <AiOutlineStar className="nxttrend-star-icon" /> & up
        </p>
        <p onClick={this.onSelectRatingHandler.bind(this, 1)}>
          <AiFillStar className="nxttrend-star-icon" />
          <AiOutlineStar className="nxttrend-star-icon" />
          <AiOutlineStar className="nxttrend-star-icon" />
          <AiOutlineStar className="nxttrend-star-icon" />
          <AiOutlineStar className="nxttrend-star-icon" /> & up
        </p>
        <button onClick={clearFilter} className="nxttrendz-clear-filter-btn">Clear Filters</button>
      </div>
    );
  }
}

export default ProductFilter;