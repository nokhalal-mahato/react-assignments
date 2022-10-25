import { Component } from "react";
import "./index.css";

class LanguageFilterItem extends Component {
  onSelectTab=()=>{
    const {data,onSelect}=this.props;
    onSelect(data.id);
  }
  render() {
    const { data, isActive } = this.props;
    return (
      <div
        className={`git-language-filter-item ${
          isActive ? "git-active-language-filter" : ""
        }`}
        onClick={this.onSelectTab}
      >
        <p className="git-language-filter-text">{data.displayText}</p>
      </div>
    );
  }
}
export default LanguageFilterItem;
