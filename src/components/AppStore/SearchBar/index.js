import { Component } from "react";
import "./index.css";

class SearchBar extends Component {

  onChangeHandler=(event)=>{
    this.props.onInputChange(event.target.value);
  }  
  render() {
    const {value}=this.props;
    return (
      <div className="appstore-input-field">
        <input
          className="appstore-input"
          placeholder="Search"
          onChange={this.onChangeHandler}
          type="text"
          value={value}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search logo"
        />
      </div>
    );
  }
}

export default SearchBar;
